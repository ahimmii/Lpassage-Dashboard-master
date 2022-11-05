import { Box, HStack, Heading, Text, Image, Stack, Spacer, Button, useBoolean } from "@chakra-ui/react";
import { useToast, Badge } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import confirmReady from "../../controller/postConfirmIsReady";
import { backEndUrl } from "../../controller/urls.token";

const Card = ({ orders, color, getOrdersData, _key}) => {
	const titles = {
		titleCard: "Demande",
		mainePlate: "",
		ChoixDaccompagnements: "",
		sauces: "",
	};

	const [lodingReady, setLodingReady] = useBoolean(false);
	const refAlertTime = useRef(null);
	const toast = useToast();
	const [alertImage, setAlertImage] = useState(`url(/Images/alert/green.png)`);
	const [alertTime, setAlertTime] = useState(0);

	useEffect(() => {
		let checkTime;
		if (refAlertTime.current && orders?.attributes?.createdAt) {
			checkTime = setInterval(() => {
				if (new Date().getTime() - new Date(orders?.attributes?.createdAt).getTime() > 300000 &&
					new Date().getTime() - new Date(orders?.attributes?.createdAt).getTime() < 900000 &&
					alertImage != `url(/Images/alert/orange.png)`
				) {
					if (refAlertTime.current != null) 
						setAlertImage(`url(/Images/alert/orange.png)`);
				}
				if (new Date().getTime() - new Date(orders?.attributes?.createdAt).getTime() > 900000
					&& alertImage != `url(/Images/alert/red.png)`
				) {
					if (refAlertTime.current != null)
						setAlertImage(`url(/Images/alert/red.png)`);
				}
				setAlertTime(new Date().getTime() - new Date(orders?.attributes?.createdAt).getTime())
			}, 1000)
		}
		return () => {
			clearInterval(checkTime);
		}
	}, [])

	const orderIsReady = async (orders) => {

		setLodingReady.on();
		confirmReady(orders, { order_status: "2" })
			.then((res) => {
				getOrdersData();
				if (res.data.attributes.order_status == "2") {
					toast({
						title: "La commande a été confirmée comme prête.",
						status: "success",
						isClosable: true,
						duration: 700
					});
				} else {
					toast({
						title: "Vous ne pouvez pas confirmer cette commande comme prête.",
						status: "error",
						isClosable: true,
					});
				}
			})
			.catch((err) => {	
				getOrdersData();
				toast({
					title: err.message || "Error!",
					status: "error",
					isClosable: true,
				});
			});
		setLodingReady.off();
	};
	
	return (
		<>
			<Stack h='full' rounded='xl' overflow='hidden'>
				<Box w='full' h={4} bg={color} ></Box>
				<HStack id='headerCard'  px={5} h="40px" py={0} textAlign="center">
					<Heading fontSize='20px'>{titles.titleCard}</Heading>
					<Heading fontSize='18px'>#{orders.id}</Heading>
					<Badge fontSize={13} colorScheme='orange' w='fit-content' rounded='md'>
						{orders?.attributes?.place_de_consomation[0]?.name}
						{orders?.attributes?.place_de_consomation[0]?.tableId
							? ": " + orders?.attributes?.place_de_consomation[0]?.tableId
							: null}
					</Badge>
					<Spacer />
					<Heading fontSize={20}>{new Date(alertTime).getHours() + ":" + new Date(alertTime).getMinutes() + ":" + new Date(alertTime).getSeconds()}</Heading>
					<Box h="38px" w="38px" bgRepeat='no-repeat' rounded='full' backgroundImage={alertImage} bgSize="100%" ref={refAlertTime}></Box>
				</HStack>
				<Stack id='bodyCard' pb={3} pt={0} px={6} fontSize={12}>
					{orders?.attributes?.plats?.map((plat, i) => {
						return (
							<Box border='3px solid #eee' key={i*10} rounded='xl' p={1} background='white'>
								<HStack id='mainePlate'>
									<Image src={backEndUrl + plat.imageURL} w='100px' rounded='xl' />
									<Stack spacing={1}>
										<Heading fontSize={25} color='black.500'>
											{plat.name} <Text as="span" color='orange.500'>x</Text> {plat.qte}
										</Heading>
									</Stack>
								</HStack>

								<Stack>
									{plat?.choix_accompagnements?.data?.length > 0 ? (
										<>
											<Stack>
												{plat?.choix_accompagnements?.data?.map((el, i) => {
													return (
														<HStack
															key={i + el.name}
															rounded='lg'
															px={2}
															py={0}
															overflow='hidden'
															textAlign='center'
														>
															<Image
																src={backEndUrl + el?.attributes?.image?.data?.attributes?.url}
																w='50px'
															/>
															<Text fontSize={16} fontWeight={800}>
																{el?.attributes?.name}
															</Text>
														</HStack>
													);
												})}
											</Stack>
										</>
									) : null}
								</Stack>

								<Stack pt={2}>
									{plat.sauces.data.length > 0 ? (
										<>
											<Stack>
												{plat.sauces.data.map((el, i) => {
													return (
														<HStack
															textAlign='center'
															key={i + el.attributes.name}
															rounded='lg'
															overflow='hidden'
															pr={2}
														>
															<Image
																src={backEndUrl + el.attributes.image.data.attributes.url}
																w='50px'
															/>
															<Text fontSize={16} fontWeight={800}>
																{el.attributes.name}
															</Text>
														</HStack>
													);
												})}
											</Stack>
										</>
									) : null}
								</Stack>

								<Stack pt={2}>
									{plat?.juses?.data?.length > 0 ? (
										<>
											<Stack>
												{plat.juses.data.map((el, i) => {
													return (
														<HStack
															textAlign='center'
															key={i + el.attributes.name}
															rounded='lg'
															overflow='hidden'
															pr={2}
															>
															<Image
																src={backEndUrl + el.attributes.image.data.attributes.url}
																w='50px'
																/>
															<Text fontSize={16} fontWeight={800}>
																{el.attributes.name}
															</Text>
														</HStack>
													);
												})}
											</Stack>
										</>
									) : null}
								</Stack>
							</Box>
						);
					})}
				</Stack>
				<Spacer />
				<HStack p={3} pt={0}>
					<Spacer />
					{/*<Button
						onClick={() => {
							cancelOrder(order);
						}}
						colorScheme='orange'
						size='sm'
						variant='outline'
						isLoading={loadingCancel}
					>
						Cancel
					</Button>*/}
					<Button
						onClick={() => {
							orderIsReady(orders);
						}}
						colorScheme='orange'
						size='sm'
						isLoading={lodingReady}
					>
						Prêt
					</Button>
				</HStack>
				<Box w='full' h={4} bg={color}></Box>
			</Stack>
		</>
	);
};


export default Card;
