import { Stack, useBoolean, Container, useToast, filter, Spinner } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import MenuIngredients from '../components/admin/MenuIngredients';
import DatePicker from '../components/admin/DatePicker';
import TableInfo from '../components/admin/TableInfo';
import Header from '../components/admin/Header';
import Get_Data from '../Controller/getData';
import post_data from '../Controller/postData';
import { getUser } from '../Controller/apis';
import TableInfo2 from '../components/admin/Tableinfo2';
import MenuServeurs from '../components/admin/MenuServeurs';
import MenuStock from '../components/admin/MenuStock';
import MenuFournisseurs from '../components/admin/MenuFournisseurs';
import TableInfo3 from '../components/admin/TableInfo3';
import TableInfo4 from '../components/admin/TableInfo4';

export default function Admin() {
	const [Loading, setLoading] = useBoolean(true);
	const [LoadingData, setLoadingData] = useBoolean(false);
	const router = useRouter();
	const toast = useToast();
	const [date, setDate] = useState([new Date(), new Date()]);
	const [dates, setDates] = useState('');
	const [natures, setNatures] = useState([]);
	const [nature, setNature] = useState('ALL');
	const [users, setUsers] = useState([]);
	const [data, setData] = useState([]);
	const [dataS, setDataS] = useState([]);
	const [dataF, setDataF] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);
	const [serveur, setServeur] = useState('ALL');
	const [stock, setStock] = useState('ALL');
	const [fournisseur, setFournisseur] = useState('ALL');
	const [matierePremiere, setMatierePremiere] = useState([]);
	const [total_orders, setTotal_orders] = useState(0);
	const [revenue, setRevenue] = useState(0);
	const [total_plats, setTotal_plats] = useState(0);


	useEffect(() => {
		if (date[0] && date[1]) {
			setLoadingData.on();
			post_data('/api/matiere-premiere', {
				gte: date[0].toISOString(),
				lte: date[1].toISOString(),
			})
				.then((res) => {
					setMatierePremiere(res?.data?.data?.ingredients || []);
					setTotal_orders(res?.data?.data?.total_orders || 0);
					setRevenue(res?.data?.data?.revenue || 0);
					// console.log(res?.data?.data?.ingredients);
					setLoadingData.off();
				})
				.catch((err) => {
					console.log(err);
					setLoadingData.off();
				});
		}
	}, [date]);

	useEffect(() => {
		if (date[0] && date[1]) {
			setLoadingData.on();
			post_data('/api/find-Stock', {
				gte: date[0].toISOString(),
				lte: date[1].toISOString(),
			})
				.then((res) => {

					setDataS(res.data)
					setLoadingData.off();
				})
				.catch((err) => {
					console.log(err);
					setLoadingData.off();
				});
		}
	}, [date]);


	useEffect(() => {
		if (date[0] && date[1]) {
			setLoadingData.on();
			post_data('/api/find-fournisseur', {
				gte: date[0].toISOString(),
				lte: date[1].toISOString(),
			})
				.then((res) => {

					setDataF(res.data)
					setLoadingData.off();
				})
				.catch((err) => {
					console.log(err);
					setLoadingData.off();
				});
		}
	}, [date]);

	useEffect(() => {
		Get_Data('/api/ingredient-list?populate[list][populate]=*')
			.then((res) => {
				let datas = res?.data?.attributes?.list?.map((item) => (
					{
						value: item.Name,
						key: item.id
					}));
				// for (let i = 0; i < datas.length; i++) {
				// 	const element = datas[i];
				// 	// console.log(element);
				// }

				Get_Data('/api/get-stock')
					.then((res) => {
						// console.log(res.createdAt)
						setDates(res.createdAt);
						res?.data?.forEach((item) => {
							datas?.forEach((ingredient) => {
								if (ingredient.value == item.name) {
									ingredient.qte = item.Quantites;
									ingredient.prix_par_unite = item.prix_par_unit;
									ingredient.unit = item.unit;
									ingredient.barCode = item.barCodes;
									ingredient.qte_reste = item.qte_restes;
								}
							});
						});
						setData(datas);
					})
					.catch((err) => {
						console.log(err);
						setLoading(-1);
					});

				// setTimeout(() => {
				// 	setLoading(false);
				// 	console.log('done');
				// }, 500);
			})
			.catch((err) => {
				toast({
					title: err.message,
					status: 'error',
					isClosable: true,
				});
				// setLoading(-1);
			});
	}, []);

	useEffect(() => {
		Get_Data('/api/natures')
			.then((res) => {
				setNatures(res.data);
			})
			.catch((err) => {
				toast({
					title: err.message,
					status: 'error',
					isClosable: true,
				});
				console.log(err);
			});
		getUser('/api/users/me?populate=image,role')
			.then((res) => {
				if (res.role == undefined && !(res?.role?.name == 'admin')) {
					document.write('YOU ARE NOT AUTHORIZED TO ACCESS ...');
				} else {
					setLoading.off();
				}
			})
			.catch((err) => {
				toast({
					title: err?.response?.data?.error?.message || 'Error',
					status: 'error',
					isClosable: true,
				});
				router.push('/');
			});
		Get_Data('/api/categories')
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				toast({
					title: err.message,
					status: 'error',
					isClosable: true,
				});
			});
	}, []);

	return (
		<>
			<Head>
				<title>{"L'PasSage • Admin"}</title>
				<meta name='description' content='' />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Container id='Header' maxW='container.xl'>
				<Header />

				{Loading ? (
					<Stack w='full' justifyContent='center' alignItems='center' h='90vh'>
						<Spinner size='lg' color='orange.500' />
					</Stack>
				) : (
					<>
						<Stack id='Content' p={5} minH='calc(100vh - 100px)'>
							<Tabs colorScheme='orange' index={tabIndex} onChange={setTabIndex}>
								<TabList>
									<Tab>Matiere premiere</Tab>
									<Tab>Gestion des serveurs</Tab>
									<Tab>Stock</Tab>
									<Tab>Fournisseur</Tab>
									{/* <Tab>gestion RH</Tab> */}
								</TabList>

								<Stack mb={5} direction='row' wrap='wrap' gap={3} px='20px' mt='10px'>
									<DatePicker date={date} setDate={setDate} />
									{tabIndex == 0 ? (
										<MenuIngredients nature={nature} setNature={setNature} natures={natures} />
									) : tabIndex == 1 ? (
										<MenuServeurs serveur={serveur} setServeur={setServeur} natures={users} />
									) : tabIndex == 2 ? (
										<MenuStock serveur={stock} setServeur={setStock} stock={dataS} />
									) : (
										<MenuFournisseurs serveur={fournisseur} setServeur={setFournisseur} fournisseur={dataF} />
									)}

								</Stack>

								{!LoadingData ? (
									<>
										<TabPanels mt='-20px'>
											<TabPanel>
												<TableInfo
													total_plats={total_plats}
													nature={nature}
													matierePremiere={matierePremiere}
													total_orders={total_orders}
													revenue={revenue}
												/>
											</TabPanel>
											<TabPanel>
												{/*<Stack mb={5} direction='row' wrap='wrap' gap={2}>
														<DatePicker date={date} setDate={setDate} />
														<MenuIngredients nature={nature} setNature={setNature} natures={natures} />
												</Stack>*/}
												<TableInfo2
													total_orders={total_orders}
													setTotal_plats={setTotal_plats}
													date={date}
													serveur={serveur}
												/>
											</TabPanel>
											<TabPanel>
													<TableInfo3
															stock={stock}
															data={dataS}
															
															/>
											</TabPanel>
											<TabPanel>
												<TableInfo4
													fournisseur={fournisseur}
													data={dataF}
												/>
											</TabPanel>
										</TabPanels>
									</>
								) : (
									<Stack w='full' justifyContent='center' alignItems='center' h='20vh'>
										<Spinner size='lg' color='orange.500' />
									</Stack>
								)}
							</Tabs>
						</Stack>
					</>
				)}
			</Container>
		</>
	);
}
