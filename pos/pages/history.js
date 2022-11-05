import {
	Text,
	Stack,
	HStack,
	VStack,
	useBoolean,
	Heading,
	Divider,
	Image,
	Spacer,
	Box,
	Tag,
	Button,
	useToast,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";

import { Spinner } from '@chakra-ui/react'

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

// components
import Sidebar from "../components/Home/SideBar/SideBar";
import OrderInfoModal from "../components/Modal/OrderinfoModal";

// apis
import { getHistory, getSideBarLinks, getUser } from "../Controller/apis";
import Put_Data from "../Controller/putData";
import { backEndUrl } from "../Controller/urls";

//const socket = io(backEndUrl);

export default function History({socket, connect}) {

	const router = useRouter();
	const toast = useToast();
	// sockets
	useEffect(() => {
		if (socket) {
			socket.on("orderReceived", () => {
				console.log("Order received!!");
				
			})
		} 
	}, [socket]);

	const [Loading, setLoading] = useBoolean(false);
	const [Loading_data, setLoading_data] = useBoolean(true);
	const [sidebarWin, setsidebarWin] = useBoolean();
	const [orderInfomodal, setOrderinfomodal] = useBoolean();
	const [btnPaidOrder, setBtnPaidOrder] = useBoolean(false);
	const [btnReadyOrder, setBtnReadyOrder] = useBoolean(false);
	const [btnCancelOrder, setBtnCancelOrder] = useBoolean(false);
	const [elementToShowInModal, setElementToShowInModal] = useState(null);
	const [SideBarLinks, setSideBarLinks] = useState(null);
	const [sizeElements, setSizeElements] = useState(1);
	const [maxOrders, setmaxOrders] = useState(-1);

	const [profile, setProfile] = useState({
		name: "Loading...",
		Username: "",
		img: "/Images/DefaultAvatar.png",
	});

	const [types] = useState(null);
	const [commandeType] = useState(["annulé", "En cours de traitement", "La commande est prête", "A été payé"]);

	const [History, setHistory] = useState([]);

	const OrderStatus = (el) => {
		let color;
		if (el != null && el.attributes != undefined) {
			if (el.attributes.order_status == "1") color = "#F0D800";
			else if (el.attributes.order_status == "2") color = "#00A8F0";
			else if (el.attributes.order_status == "3") color = "#1ABD00";
			else if (el.attributes.order_status == "0") color = "#FF0000";
			return (
				<>
					<Box w={2} h={2} rounded='full' bg={color}></Box>
					<Text>{commandeType[el.attributes.order_status]}</Text>
				</>
			);
		}
	};

	const placeDeConsomation = (e) => {
		if (e != null && (e?.attributes?.place_de_consomation) != undefined) {
			if (e?.attributes?.place_de_consomation[0].name == "Sur table") {
				return (
					<Text w='fit-content' colorScheme='orange' fontSize={"13px"}>
						{e != null
							? `${e?.attributes?.place_de_consomation[0].name}: ${e?.attributes?.place_de_consomation[0].tableId}`
							: null}
					</Text>
				);
			} else {
				return (
					<Text w='fit-content' colorScheme='orange' fontSize='13px'>
						{e != null ? e?.attributes?.place_de_consomation[0].name : null}
					</Text>
				);
			}
		}
	};

	const updateOrderStatus = async (order, data) => {
		let status;
		Put_Data(`/api/orders/${order.id}`, {
			data: data,
		})
			.then((res) => {
				socket.emit("updateOrderStatus", {order: order, status: data});
				//setOrderinfomodal.off();
				status = 1
				setHistory(
					History.map((element) => {
						if (element.id == order.id) {
							element.attributes.order_status = data.order_status;
							return element;
						} else return element;
					})
				);
			})
			.catch((err) => {
				status = 0
			});
		return status
	};

	useEffect(() => {
		getSideBarLinks("/sidebarLinks").then((res) => {
			setSideBarLinks(res);
		});

		getUser("/api/users/me?populate=*")
			.then((res) => {
				setProfile({
					name: res.first_name + " " + res.last_name,
					Username: res.username,
					img: backEndUrl + res.image[0].url || "/Images/DefaultAvatar.png",
				});

				getHistory(
					"/api/orders?sort=createdAt:desc&pagination[pageSize]=5&pagination[page]=1&populate[user]=*&populate[plats][populate][sauces][populate][image]=*&populate[plats][populate][juses][populate][image]=*&populate[plats][populate][choix_accompagnements][populate][image]=*&populate[plats][populate]=categories",
					sizeElements
				)
					.then((res) => {
						setHistory(res.data);
						setmaxOrders(res.meta.pagination.pageCount);
					})
					.catch((err) => {
						toast({
							title: err.response?.data?.error.message || err.message,
							status: "error",
							isClosable: true,
						});
					});
			})
			.catch((err) => {
				toast({
					title: err.response?.data?.error.message || err.message,
					status: "error",
					isClosable: true,
				});
				router.push("/");
			});
	}, []);

	const filter_data = [0, 1, 2, 3];
	const [filter, setFilter] = useState("");

	const filter_history = (f) => {
		if (filter == (f == null ? "" : "&filters[order_status][$eq]=" + f)) return;
		setFilter(f == null ? "" : "&filters[order_status][$eq]=" + f);
		setHistory([]);
		setSizeElements(1);
	};

	useEffect(() => {
		getHistory(
			"/api/orders?sort=createdAt:desc&populate[user]=*&populate[plats][populate][sauces][populate][image]=*&populate[plats][populate][juses][populate][image]=*&populate[plats][populate][choix_accompagnements][populate][image]=*&populate[plats][populate]=categories&pagination[pageSize]=5&pagination[page]=" +
				sizeElements +
				filter,
			sizeElements
		)
			.then((res) => {
				setHistory([...History, ...res.data]);
				setLoading.off();
				setmaxOrders(res.meta.pagination.pageCount);
				setLoading_data.off();
			})
			.catch((err) => {
				toast({
					title: err.response?.data?.error.message || err.message,
					status: "error",
					isClosable: true,
				});
			});
	}, [sizeElements, filter]);

	//function fixDup(array) {
	//	let result = [];
	//	let id = array[0]?.attributes.id_order;
	//	let newArray = [];

	//	for (let i = 0; i < array.length; i++) {
	//		if (id == array[i]?.attributes.id_order) {
	//			newArray.push(array[i]);
	//		} else {
	//			id = array[i--].attributes.id_order;
	//			result.push(newArray);
	//			newArray = [];
	//		}
	//	}
	//	if (array.length) {
	//		result.push(newArray);
	//	}
	//	return result;
	//}

	return (
		<>
			<Head>
				<title>{"L'PasSage • History"}</title>
				<meta name='description' content='' />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Stack id='page' direction='row' w='full' h='100vh' spacing={0}>
				<VStack id='navbarContainer' display={{ base: "none", md: "flex" }} p='8px 4px 8px 8px' h='100vh'>
					<Sidebar
						HeaderLinks={types}
						isOpen={sidebarWin}
						onOpen={setsidebarWin.on}
						onClose={setsidebarWin.off}
						profile={profile}
						Links={SideBarLinks}
					/>
				</VStack>
				<VStack
					id='main'
					w='full'
					spacing={0}
					overflowX='scroll'
					h='calc(100vh)'
					alignItems='start'
					className='removeBarScroll'
					p={1}
					py={3}
					pr={3}
				>
					<Stack
						id='Section'
						w='full'
						overscroll='hidden'
						overflowY='scroll'
						rounded='xl'
						h='full'
						border={{ base: "", md: "2px solid #eee" }}
						p={2}
						className='removeBarScroll'
					>
						<HStack w='100%' h='50px' justifyContent='center' pl={4} px={3}>
							<Heading fontSize={20}>Historique</Heading>
							<Spacer />

							<Menu>
								<MenuButton as={Button} rightIcon={<Image src='/Images/icons/HeaderIcons/arrowDown.svg' w={4} />}>
									{commandeType[filter.split("=")[1]] ? commandeType[filter.split("=")[1]] : "Tout"}
								</MenuButton>
								<MenuList>
									<MenuItem
										key='123456789'
										onClick={() => {
											filter_history(null);
										}}
									>
										<Stack key='ALL1' direction='row' alignItems='center'>
											<Box w={2} h={2} rounded='full' bg='black'></Box>
											<Text>Tout</Text>
										</Stack>
									</MenuItem>
									{filter_data.map((el, index) => {
										return (
											<MenuItem
												key={index}
												onClick={() => {
													filter_history(index);
												}}
											>
												<Stack key={el} direction='row' alignItems='center'>
													{OrderStatus({
														attributes: {
															order_status: index,
														},
													})}
												</Stack>
											</MenuItem>
										);
									})}
								</MenuList>
							</Menu>

							<Link href='/home'>
								<Button display={{ base: "block", md: "none" }}>
									<Image src='/Images/icons/return.svg' w={4} />
								</Button>
							</Link>
						</HStack>
						<Divider />
						<Stack
							w='100%'
							h='calc(100% - 50px)'
							justifyContent={History?.length <= 0 ? "center" : "flex-start"}
							alignItems={History?.length <= 0 ? "center" : "flex-start"}
						>
							{
								Loading_data ? (
									<Stack w="full" justifyContent='center' alignItems='center' h='90vh'>
										<Spinner
											thickness='4px'
											speed='0.65s'
											emptyColor='gray.200'
											color='orange.500'
											size='xl'
										/>
									</Stack>
									) : (
									<>

										{History?.length <= 0 ? (
											<Text color='gray.400' fontWeight={900} fontSize={20}>
												Aucune commande	
											</Text>
										) : (
											<Stack w='full' px={{ base: 4, md: 10 }}>
												<OrderInfoModal
													btnCancelOrder={btnCancelOrder}
													setBtnCancelOrder={setBtnCancelOrder}
													isOpen={orderInfomodal}
													onClose={setOrderinfomodal.off}
													element={elementToShowInModal}
													OrderStatus={OrderStatus}
													placeDeConsomation={placeDeConsomation}
													btnPaidOrder={btnPaidOrder}
													updateOrderStatus={updateOrderStatus}
													btnReadyOrder={btnReadyOrder}
													setBtnReadyOrder={setBtnReadyOrder}
													setBtnPaidOrder={setBtnPaidOrder}
													profile={profile}
												/>
												{History?.map((el) => {
													return (
														<>
															<Stack
																boxShadow='base'
																py={5}
																px={5}
																cursor='pointer'
																rounded={"md"}
																_hover={{ bg: "gray.50" }}
																key={el.id}
																onClick={() => {
																	setElementToShowInModal(el);
																	setOrderinfomodal.on();
																}}
																fontSize='12px'
																//direction={{ base: "column", md: "row" }}
															>
																<HStack wrap='wrap'>
																	<Heading color='orange.500' fontSize={{ base: "18px", md: "18px" }}>
																		Demande #{el?.id}
																	</Heading>
																	<HStack color='black.500' fontWeight={200} fontSize='11px'>
																		{placeDeConsomation(el)}
																	</HStack>
																	<HStack>
																		{OrderStatus(el)}
																	</HStack>
																	<Spacer />
																	{/* total price */}
																	<Heading color='orange.500' fontSize={{ base: "18px", md: "18px" }}>
																		{el?.attributes.total_price} DH
																	</Heading>
																</HStack>
																<Stack p={5}>
																	{
																		el.attributes?.plats?.map((plat) => {																			return (
																				<HStack key={plat.id}>
																					<Image
																						src={
																							backEndUrl + plat?.imageURL ||
																							"/Images/food_default.png"
																						}
																						w={{ base: "150px", md: "150px" }}
																						minH={{ base: "150px", md: "150px" }}
																						rounded='md'
																						border='1px solid #eee'
																					/>
																					<Stack>
																						<HStack>
																							<Heading fontWeight={500} fontSize={{ base: "18px", md: "18px" }}>
																								{plat.name} <Text as='span' color="orange.500">x</Text> {plat.qte}
																							</Heading>
																						</HStack>
																						<HStack display={{ base: "flex", md: "none" }}>
																							<Heading fontSize='12px'>{plat?.price} DH</Heading>
																						</HStack>

																						<HStack display={{ base: "none", md: "flex" }}>
																							<Heading fontSize='14px' fontWeight="300">{plat?.price} DH</Heading>
																							{/*{OrderStatus(el)}*/}
																						</HStack>
																					</Stack>
																				</HStack>

																			);
																		})
																	}
																</Stack>
																{/* time order created */}
																<Text color='gray.400' pl={5} fontSize={{ base: "12px", md: "12px" }}>
																	{new Date(el?.attributes?.createdAt).toLocaleString()}
																</Text>
															</Stack>
															<Divider />
														
														</>
													);
												})}
												<Stack
													justifyContent='center'
													alignItems='center'
													display={maxOrders > sizeElements ? "flex" : "none"}
												>
													<Button
														onClick={() => {
															if (maxOrders > sizeElements) {
																setSizeElements(sizeElements + 1);
																setLoading.on();
															} else {
																setLoading.off();
																toast({
																	title: `No more orders`,
																	status: "warning",
																	isClosable: true,
																});
															}
														}}
														fontSize={14}
														w={{ base: "full", md: "fit-content" }}
														isLoading={Loading}
													>
														Load More
													</Button>
												</Stack>
											</Stack>
										)}
									
									</>	
								)
							}
						</Stack>
					</Stack>
				</VStack>
			</Stack>
		</>
	);
}
