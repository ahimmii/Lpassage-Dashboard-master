import {
	Spinner,
	Stack,
	HStack,
	VStack,
	useDisclosure,
	useBoolean,
	useToast,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import Sidebar from '../components/Home/SideBar/SideBar';
import { Header, HeaderMobile } from '../components/Home/Header/Header';
import Menu from '../components/Home/Products/Menu';
import Checkout from '../components/Home/Checkout/Checkout';
import ChoixDaccompagnements_AND_sauce from '../components/Home/ChoixDaccompagnements_AND_sauce/cs';
import PlaceDeConsomation from '../components/Home/PlaceDeConsomation/PlaceDeConsomation';
import TableInfo from '../components/Home/TableInfo/TableInfo';
import LivraisonInfo from '../components/Home/LivraisonInfo/LivraisonInfo';
import SuccessNotify from '../components/Modal/success';
import { Text } from '@chakra-ui/react';

// apis
import { getSideBarLinks, getPlacesDeConsomation, getTypes, getProducts, postOrders, getUser } from '../Controller/apis';
import { backEndUrl } from '../Controller/urls';
import Get_Data from '../Controller/getData';

// socket
import { io } from 'socket.io-client';

// bill printer
import { print_bill } from '../utils/bills_printer/printer';

export default function Home({ socket, connect }) {
	const router = useRouter();
	const toast = useToast();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [Confirm, setConfirm] = useBoolean(false);
	const [LivraisonInfoWin, setLivraisonInfoWin] = useBoolean();
	const [typeOfOrderWin, setTypeOfOrderWin] = useBoolean();
	const [sidebarWin, setsidebarWin] = useBoolean();
	const [TableInfoWin, setTableInfoWin] = useBoolean();
	const [showSuccess, setShowSuccess] = useBoolean();
	const [Orders, setOrders] = useState([]);
	const [SideBarLinks, setSideBarLinks] = useState(null);
	const [placesDeConsomation, setPlacesDeConsomation] = useState(null);
	const [types, setTypes] = useState(null);
	const [products, setProducts] = useState(null);
	// max
	const [maxChoixAccompagnement, setMaxchoix_accompagnements] = useState(0);
	const [maxJus, setMaxJus] = useState(0);
	const [maxSauce, setMaxSauce] = useState(0);
	// end
	const [choix_accompagnements, setchoix_accompagnements] = useState(null);
	const [sauces, setSauce] = useState(null);
	const [jus, setJus] = useState(null);
	const [profile, setProfile] = useState({
		name: 'Loading...',
		Username: '',
		img: '/Images/DefaultAvatar.png',
		data: null,
	});
	const [newOrder, setNewOrder] = useState({});
	const [section_CS, setSection_CS] = useState('0');
	const [loading_data, setLoading_data] = useState(true);

	const createOrder = (p) => {
		if (p.attributes.maxChoixAccompagnement) setMaxchoix_accompagnements(p.attributes.maxChoixAccompagnement);
		if (p.attributes.maxSauce) setMaxSauce(p.attributes.maxSauce);
		if (p.attributes.maxJus) setMaxJus(p.attributes.maxJus);

		setchoix_accompagnements(p.attributes.choix_accompagnements.data);
		setSauce(p.attributes.sauces.data);
		setJus(p.attributes.juses.data);

		Get_Data('/api/ingredient-stocks?&populate=Ingredient&pagination[page]=1&pagination[pageSize]=1&sort[0]=createdAt:desc')
			.then((res) => {
				if (res?.data[0]?.attributes?.Ingredient) {
					p.attributes.Fiche_technique_de_fabrication?.forEach((item) => {
						item.prix_par_unit = 0;
					});
					res.data[0].attributes.Ingredient?.forEach((i) => {
						p.attributes.Fiche_technique_de_fabrication?.forEach((f) => {
							if (i.name == f.Ingredients) {
								f.prix_par_unit = i.prix_par_unit;
							}
						});
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		const order = {
			__component: 'orders.order',
			id_Qte: new Date().getTime(),
			user: [profile.data],
			product_id: p.id,
			name: p.attributes.name,
			image: p.attributes.image,
			imageURL: p?.attributes?.image?.data.attributes.url,
			price: p.attributes.price,
			categories: p.attributes.categories.data,
			time: Date.now(),
			placeDeConsomation: [],
			sauces: [],
			choix_accompagnements: [],
			juses: [],
			fiche_technique_de_fabrication: p.attributes.Fiche_technique_de_fabrication,
			qte: 1,
		};
		setNewOrder(order);

		if (p.attributes.choix_accompagnements.data.length == 0 && p.attributes.sauces.data.length == 0) {
			let newListOfOrders = Orders.slice(0, Orders.length);
			newListOfOrders.push(order);
			setOrders(newListOfOrders);
			setNewOrder({});
		} else {
			if (p.attributes.choix_accompagnements.data.length == 0) setSection_CS(1);
			else setSection_CS(0);
			onOpen();
		}
	};

	const incrementQte = (p) => {
		let newListOfOrders = Orders.slice(0, Orders.length);
		newListOfOrders.forEach((item) => {
			if (item.id_Qte == p.id_Qte) {
				item.qte++;
			}
		});
		setOrders(newListOfOrders);
	};

	const decrementQte = (p) => {
		let newListOfOrders = Orders.slice(0, Orders.length);
		newListOfOrders.forEach((item) => {
			if (item.id_Qte == p.id_Qte) {
				if (item.qte > 1) item.qte--;
			}
		});
		setOrders(newListOfOrders);
	};

	const setQte = (p, qte) => {
		if (qte <= 0) {
			qte = 1;
		}
		let newListOfOrders = Orders.slice(0, Orders.length);
		newListOfOrders.forEach((item) => {
			if (item.id_Qte == p.id_Qte) {
				item.qte = qte;
			}
		});
		setOrders(newListOfOrders);
	};

	const addChoixAccompToOrder = (ChoixAccompagnement, inIt) => {
		Get_Data('/api/ingredient-stocks?&populate=Ingredient&pagination[page]=1&pagination[pageSize]=1&sort[0]=createdAt:desc')
			.then((res) => {
				if (res?.data[0]?.attributes?.Ingredient) {
					ChoixAccompagnement.attributes.fiche_technique_de_fabrication?.forEach((item) => {
						item.prix_par_unit = 0;
					});
					res.data[0].attributes.Ingredient?.forEach((i) => {
						ChoixAccompagnement.attributes.fiche_technique_de_fabrication?.forEach((f) => {
							if (i.name == f.Ingredients) {
								f.prix_par_unit = i.prix_par_unit;
							}
						});
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		let cpyOrder = Object.assign({}, newOrder);
		if (inIt) cpyOrder.choix_accompagnements.splice(cpyOrder.choix_accompagnements.indexOf(ChoixAccompagnement), 1);
		else {
			if (cpyOrder.choix_accompagnements.length >= maxChoixAccompagnement) newOrder.choix_accompagnements.shift();
			cpyOrder.choix_accompagnements.push(ChoixAccompagnement);
		}
		setNewOrder(cpyOrder);
	};

	const addJusToOrder = (jus, inIt) => {

		Get_Data('/api/ingredient-stocks?&populate=Ingredient&pagination[page]=1&pagination[pageSize]=1&sort[0]=createdAt:desc')
			.then((res) => {
				if (res?.data[0]?.attributes?.Ingredient) {
					jus.attributes.fiche_technique_de_fabrication?.forEach((item) => {
						item.prix_par_unit = 0;
					});
					res.data[0].attributes.Ingredient?.forEach((i) => {
						jus.attributes.fiche_technique_de_fabrication?.forEach((f) => {
							if (i.name == f.Ingredients) {
								f.prix_par_unit = i.prix_par_unit;
							}
						});
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		let cpyOrder = Object.assign({}, newOrder);
		if (inIt) cpyOrder.juses.splice(cpyOrder.juses.indexOf(jus), 1);
		else {
			if (cpyOrder.juses.length >= maxJus) newOrder.juses.shift();
			cpyOrder.juses.push(jus);
		}
		setNewOrder(cpyOrder);
	};

	const addSauceToOrder = (sauce, inIt) => {

		Get_Data('/api/ingredient-stocks?&populate=Ingredient&pagination[page]=1&pagination[pageSize]=1&sort[0]=createdAt:desc')
			.then((res) => {
				if (res?.data[0]?.attributes?.Ingredient) {
					sauce.attributes.fiche_technique_de_fabrication?.forEach((item) => {
						item.prix_par_unit = 0;
					});
					res.data[0].attributes.Ingredient?.forEach((i) => {
						sauce.attributes.fiche_technique_de_fabrication?.forEach((f) => {
							if (i.name == f.Ingredients) {
								f.prix_par_unit = i.prix_par_unit;
							}
						});
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		let cpyOrder = Object.assign({}, newOrder);
		if (inIt) cpyOrder.sauces.splice(cpyOrder.sauces.indexOf(sauce), 1);
		else {
			if (cpyOrder.sauces.length >= maxSauce) newOrder.sauces.shift();
			cpyOrder.sauces.push(sauce);
		}
		setNewOrder(cpyOrder);
	};

	const addOrderToOrders = () => {
		let newListOfOrders = Orders.slice(0, Orders.length);
		newListOfOrders.push(newOrder);
		setOrders(newListOfOrders);
		setNewOrder({});
	};

	const choisePlaceDeConsomation = (status, inIt) => {
		let newListOfOrders = Orders.slice(0, Orders.length);

		newListOfOrders.forEach((element) => {
			if (inIt) {
				element.placeDeConsomation.splice(element.placeDeConsomation.indexOf(status), 1);
			} else {
				if (element.placeDeConsomation.length >= 1) {
					Orders.forEach((el) => {
						el.placeDeConsomation.shift();
					});
				}
				element.placeDeConsomation.push(status);
			}
		});
		setOrders(newListOfOrders);
	};

	const handleClickConfirm = () => {
		setTypeOfOrderWin.on();
	};

	const takeLivraisonInfo = (data) => {
		let newListOfOrders = Orders.slice(0, Orders.length);

		newListOfOrders.forEach((element) => {
			element.placeDeConsomation[0].fname = data.fname;
			element.placeDeConsomation[0].address = data.address;
			element.placeDeConsomation[0].phoneNumber = data.phoneNumber;
		});
		setOrders(newListOfOrders);
		sendOrdersToServer();
	};

	const takeTableInfo = (tableId) => {
		let newListOfOrders = Orders.slice(0, Orders.length);

		newListOfOrders.forEach((element) => {
			element.placeDeConsomation[0].tableId = tableId;
		});
		setOrders(newListOfOrders);
		sendOrdersToServer();
	};

	const confirmOrder = () => {
		if (Orders[0].placeDeConsomation[0].id == 0) {
			// Livrasion
			setLivraisonInfoWin.on();
		} else if (Orders[0].placeDeConsomation[0].id == 1) {
			// sur table
			setTableInfoWin.on();
		} else {
			// importer
			sendOrdersToServer();
		}
	};

	const sendOrdersToServer = async () => {
		setConfirm.on();
		await postOrders(
			//'/api/orders?populate[plats][populate][sauces][populate][image]=*&populate[plats][populate][juses][populate][image]=*&populate[plats][populate][choix_accompagnements][populate][image]=*&populate[plats][populate]=categories',
			"/api/create-order",
			Orders
		)
			.then((res) => {
				//console.log(res.data);
				socket.emit('orderCreated', res.data);
				setOrders([]);
				setTypeOfOrderWin.off();
				setConfirm.off();
				setShowSuccess.on();
				print_bill(Orders, profile);
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: err.message,
					status: 'error',
					isClosable: true,
				});
			});
	};

	useEffect(() => {
		getUser('/api/users/me?populate=*')
			.then(async (res) => {
				await setProfile({
					name: res.first_name + ' ' + res.last_name,
					Username: res.username,
					img: backEndUrl + res.image[0].url || '/Images/DefaultAvatar.png',
					data: res,
				});

				await getSideBarLinks('/sidebarLinks').then((res) => {
					setSideBarLinks(res);
				});

				await getPlacesDeConsomation('/placesDeConsomation').then((res) => {
					setPlacesDeConsomation(res);
				});

				await getProducts(
					'/api/prodects/?populate[choix_accompagnements][populate]=image&populate[sauces][populate]=image&populate[categories][populate]=*&populate[image][populate]=*&populate[juses][populate]=image'
				)
					.then((res) => {
						setProducts(res.data);
					})
					.catch((err) => {
						toast({
							title: err.message,
							status: 'error',
							isClosable: true,
						});
					});

				await getTypes('/api/categories')
					.then((res) => {
						setTypes(res.data);
					})
					.catch((err) => {
						toast({
							title: "Error: can't get categories!",
							status: 'error',
							isClosable: true,
						});
					});

				setLoading_data(false);
			})
			.catch((err) => {
				toast({
					title: err?.response?.data?.error?.message || 'Error',
					status: 'error',
					isClosable: true,
				});
				router.push('/');
			});
	}, []);

	const cancelOrder = (order) => {
		let newListOfOrders = Orders.slice(0, Orders.length);
		newListOfOrders = newListOfOrders.filter((el) => el.time != order.time);
		setOrders(newListOfOrders);
	};

	return (
		<>
			<Head>
				<title>{"L'PasSage"}</title>
				<meta name='description' content='description here' />
				<link rel='icon' href='/logo.png' />
			</Head>

			<Stack id='page' direction='row' w='full' h='100vh' spacing={0}>
				<VStack id='navbarContainer' display={{ base: 'none', md: 'flex' }} p='8px 4px 8px 8px' h='100vh'>
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
					py='4px'
					className='removeBarScroll'
				>
					<Stack id='Header-Desktop' p={2} w='full' display={{ base: 'none', md: 'flex' }} pb={0}>
						<Header HeaderLinks={types} />
					</Stack>
					<Stack id='Header-mobile' p={2} w='full' display={{ base: 'flex', md: 'none' }} pb={0}>
						<HeaderMobile
							Orders={Orders}
							confirmOrders={handleClickConfirm}
							setOrders={setOrders}
							onOpen={setsidebarWin.on}
							setQte={setQte}
							decrementQte={decrementQte}
							incrementQte={incrementQte}
						/>
					</Stack>

					<HStack id='Section' w='full' overflowX='scroll' h='full' p={2} className='removeBarScroll'>
						{!connect ? (
							<Stack justifyContent='center' w='100%' alignItems='center' display='flex' h='200px'>
								<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
								{!connect ? <Text>Connecting to server...</Text> : null}
							</Stack>
						) : (
							<>
								<Menu products={products} createOrder={createOrder} types={types} />
								<Checkout
									setQte={setQte}
									decrementQte={decrementQte}
									incrementQte={incrementQte}
									cancelOrder={cancelOrder}
									Confirm={Confirm}
									Orders={Orders}
									setOrders={setOrders}
									confirmOrders={handleClickConfirm}
								/>
							</>
						)}
					</HStack>
				</VStack>
			</Stack>

			<ChoixDaccompagnements_AND_sauce
				title={['Choix des accompagnements', 'Les sauces', 'Les jus']}
				action={[addChoixAccompToOrder, addSauceToOrder, addJusToOrder]}
				items={[choix_accompagnements, sauces, jus]}
				onClose={onClose}
				isOpen={isOpen}
				newOrder={newOrder}
				next={addOrderToOrders}
				section_CS={section_CS}
				setSection_CS={setSection_CS}
			/>

			<PlaceDeConsomation
				title={''}
				newOrder={Orders[0]}
				toCenter={true}
				onClose={setTypeOfOrderWin.off}
				isOpen={typeOfOrderWin}
				next={confirmOrder}
				placesDeConsomation={placesDeConsomation}
				choisePlaceDeConsomation={choisePlaceDeConsomation}
			/>

			<LivraisonInfo
				title={'Livraison information'}
				onClose={setLivraisonInfoWin.off}
				isOpen={LivraisonInfoWin}
				takeLivraisonInfo={takeLivraisonInfo}
			/>

			<TableInfo title={'Table Info'} onClose={setTableInfoWin.off} isOpen={TableInfoWin} takeTableInfo={takeTableInfo} />

			<SuccessNotify isOpen={showSuccess} onClose={setShowSuccess.off} />
		</>
	);
}
