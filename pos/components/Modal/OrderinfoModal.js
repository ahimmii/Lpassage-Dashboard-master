import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Image,
	Button,
	Text,
	HStack,
	Stack,
	Heading,
	ButtonGroup,
	Divider,
	useToast,
	Spacer,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { print_bill } from '../../Controller/print_bill';
import { backEndUrl } from '../../Controller/urls';

const OrderInfoModal = ({
	setBtnCancelOrder,
	setBtnPaidOrder,
	btnReadyOrder,
	setBtnReadyOrder,
	updateOrderStatus,
	isOpen,
	onClose,
	element,
	OrderStatus,
	placeDeConsomation,
	cancelOrder,
	orderIsPaid,
	btnCancelOrder,
	btnPaidOrder,
    profile
}) => {
	const toast = useToast();
	const [titles] = useState({
		maine: '',
		ChoixDaccompagnements: 'Choix d’accompagnements',
		sauces: 'Les sauces',
		LesJus: 'Les jus',
		buttons: {
			cancel: 'Annuler',
			paid: 'Payer',
			printBill: 'Imprimer la facture',
			Ready: 'Prêt',
		},
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'full', sm: 'sm', md: 'md' }} scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader fontSize={'14px'}>
					<HStack>
						<Text>Domand</Text>
						<Text color='orange.500'>#{element != null ? element?.id : ''}</Text>
						{element != null ? OrderStatus(element) : ''}
					</HStack>
				</ModalHeader>
				<ModalCloseButton />
				{element != undefined ? (
					<ModalBody>
						{element.attributes?.plats?.map((plat, index) => {
							return (
								<Stack
									spacing={8}
									key={index + new Date().getTime()}
									mb='10px'
									border='2px solid #eee'
									rounded='md'
									p={3}
								>
									<Stack>
										<Stack>
											<Text fontSize={13} mb={0}></Text>
											<HStack>
												<Image
													src={backEndUrl + plat?.imageURL}
													w='80px'
													rounded='lg'
													border='1px solid #eee'
												/>
												<Stack>
													<Heading fontSize='17px'>
														{plat?.name != undefined ? plat.name : null}{' '}
														<Text as='span' color='orange.500'>
															x
														</Text>{' '}
														<Text as='span'>{plat?.qte}</Text>
													</Heading>
													{/* price */}
													<Text fontSize={14} fontWeight={800} mb={0}>
														{plat?.price != undefined ? plat.price : null} DH
													</Text>
												</Stack>
											</HStack>
										</Stack>

										<Stack
											pt={3}
											px={5}
											display={plat?.choix_accompagnements?.data?.length > 0 ? 'flex' : 'none'}
											mt={2}
										>
											<Text fontSize={13}>{titles?.ChoixDaccompagnements}</Text>
											<Divider my={2} />
											{plat?.choix_accompagnements?.data != undefined
												? plat?.choix_accompagnements?.data.map((el, i) => {
														return (
															<HStack key={new Date() + '0' + i}>
																<Image
																	src={
																		backEndUrl + el?.attributes?.image?.data?.attributes?.url
																	}
																	w='80px'
																	rounded='lg'
																	border='1px solid #eee'
																/>
																<Stack>
																	<Heading fontWeight='300' fontSize='14px'>
																		{el?.attributes.name != undefined
																			? el.attributes.name
																			: null}
																	</Heading>
																</Stack>
															</HStack>
														);
												  })
												: null}
										</Stack>

										<Stack pt={3} display={plat?.sauces?.data?.length > 0 ? 'flex' : 'none'} mt={2} px={5}>
											<Text fontSize={13}>{titles.sauces}</Text>
											<Divider my={2} />
											{plat?.sauces?.data != undefined
												? plat?.sauces?.data.map((el) => {
														return (
															<HStack key={el.id + new Date()}>
																<Image
																	src={
																		backEndUrl + el?.attributes?.image?.data?.attributes?.url
																	}
																	w='80px'
																	rounded='lg'
																	border='1px solid #eee'
																/>
																<Stack>
																	<Heading fontWeight='300' fontSize='14px'>
																		{el?.attributes?.name != undefined
																			? el?.attributes?.name
																			: null}
																	</Heading>
																</Stack>
															</HStack>
														);
												  })
												: null}
										</Stack>

										<Stack pt={3} display={plat?.juses?.data?.length > 0 ? 'flex' : 'none'} mt={2} px={5}>
											<Text fontSize={13}>{titles?.LesJus}</Text>
											<Divider my={2} />
											{plat?.juses?.data != undefined
												? plat?.juses?.data.map((el) => {
														return (
															<HStack key={el.id + new Date()}>
																<Image
																	src={
																		backEndUrl + el?.attributes?.image?.data?.attributes?.url
																	}
																	w='80px'
																	rounded='lg'
																	border='1px solid #eee'
																/>
																<Stack>
																	<Heading fontWeight='300' fontSize='14px'>
																		{el?.attributes?.name != undefined
																			? el?.attributes?.name
																			: null}
																	</Heading>
																</Stack>
															</HStack>
														);
												  })
												: null}
										</Stack>
									</Stack>
								</Stack>
							);
						})}

						<Stack
							w='full'
							rounded='md'
							border='1px solid #eee'
							fontSize={12}
							p={8}
							bgImg={'/Images/icons/LivrasionBg.svg'}
							bgRepeat='no-repeat'
							bgPosition='right'
							minH='180px'
							justifyContent='center'
							display={element?.attributes?.place_de_consomation[0]?.name == 'Livrasion' ? 'flex' : 'none'}
						>
							<Stack>
								<Stack>
									<Text fontWeight={700}>Nom et prénom</Text>
									<Text>{element?.attributes.place_de_consomation[0]?.fname}</Text>
								</Stack>
								<Stack>
									<Text fontWeight={700}>Adresse</Text>
									<Text>{element?.attributes.place_de_consomation[0]?.address}</Text>
								</Stack>
								<Stack>
									<Text fontWeight={700}>Numéro de téléphone</Text>
									<Text>{element?.attributes.place_de_consomation[0]?.phoneNumber}</Text>
								</Stack>
							</Stack>
						</Stack>
					</ModalBody>
				) : null}
				<ModalFooter>
					<ButtonGroup gap={2}>
						<Button
							fontWeight={500}
							size={'sm'}
							//colorScheme='gray'
							mr={-1}
							onClick={() => {
								let status;
								setBtnCancelOrder.on();
								status = updateOrderStatus(element, { order_status: '0' });
								if (status) {
									toast({
										title: `Commande annulée`,
										description: `La commande a été annulée avec succès`,
										status: 'success',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								} else {
									toast({
										title: `Erreur`,
										description: `Une erreur est survenue lors de l'annulation de la commande`,
										status: 'error',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								}
								setBtnCancelOrder.off();
							}}
							display={element != null ? (element.attributes.order_status != '0' ? 'flex' : 'none') : null}
							isLoading={btnCancelOrder}
						>
							{titles.buttons.cancel}
						</Button>

						<Button
							fontWeight={500}
							size={'sm'}
							display={element != null ? (element.attributes.order_status != '2' ? 'flex' : 'none') : null}
							//colorScheme='orange'
							mr={-1}
							onClick={() => {
								let status;
								setBtnReadyOrder.on();
								status = updateOrderStatus(element, { order_status: '2' });
								if (status) {
									toast({
										title: `Commande prête`,
										description: `La commande a été prête avec succès`,
										status: 'success',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								} else {
									toast({
										title: `Erreur`,
										description: `Une erreur est survenue lors de la préparation de la commande`,
										status: 'error',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								}
								setBtnReadyOrder.off();
							}}
							isLoading={btnReadyOrder}
						>
							{titles.buttons.Ready}
						</Button>

						<Button
							fontWeight={500}
							size={'sm'}
							display={element != null ? (element?.attributes?.order_status != '3' ? 'flex' : 'none') : null}
							//colorScheme='orange'
							mr={-1}
							onClick={() => {
								let status;
								setBtnPaidOrder.on();
								//element.forEach(element => {
								status = updateOrderStatus(element, { order_status: '3' });
								//});
								if (status) {
									toast({
										// the order is paid
										title: `Commande payée`,
										description: `La commande a été payée avec succès`,
										status: 'success',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								} else {
									toast({
										title: `Erreur`,
										description: `Une erreur est survenue lors du paiement de la commande`,
										status: 'error',
										isClosable: true,
										duration: 1700,
                                        position: 'top-right'
									});
								}
								setBtnPaidOrder.off();
							}}
							isLoading={btnPaidOrder}
						>
							{titles.buttons.paid}
						</Button>

						                   
                        <Button
                            fontWeight={500}
                            size={'sm'}
                            //colorScheme='orange'
                            onClick={() => {
                                print_bill(element, profile);
                            }}
                        >
                            {titles.buttons.printBill}
                        </Button>
					</ButtonGroup>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default OrderInfoModal;
