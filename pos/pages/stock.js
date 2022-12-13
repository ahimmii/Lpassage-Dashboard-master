import { Stack, Container, useToast, Button } from '@chakra-ui/react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { MantineProvider, Text } from '@mantine/core';
import { Loader } from '@mantine/core';

// components
import Header from '../components/admin/Header';
import Get_Data from '../Controller/getData';
import { getUser } from '../Controller/apis';
import InputsSection from '../components/stock/InputsSection';
import Table_stock from '../components/stock/table';
import post_data from '../Controller/postData';

export default function Stock() {

	const [checkAccess, setCheckAccess] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [date, setDate] = useState('');
	const [dataChanged, setDataChanged] = useState(false);
	const toast = useToast();


	const updateStock = async (data) => {
		
		post_data('/api/update-stock', data)
			.then((res) => {
				if (res.status === 200) {
					toast({
						title: 'Stock mis à jour',
						description: 'Le stock a été mis à jour avec succès',
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top',
					});
				}
			})
			.catch((err) => {
				toast({
					title: 'Erreur',
					description: 'Une erreur est survenue lors de la mise à jour du stock',
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'top',
				});
			});
	};

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
						setDate(res.createdAt);
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

				setTimeout(() => {
					setLoading(false);
					console.log('done');
				}, 500);
			})
			.catch((err) => {
				toast({
					title: err.message,
					status: 'error',
					isClosable: true,
				});
				console.log(err);
				setLoading(-1);
			});
	}, []);

	useEffect(() => {
		getUser('/api/users/me?populate=image,role')
			.then((res) => {
				if (res.role == undefined && !(res?.role?.name == 'admin')) {
					document.write('YOU ARE NOT AUTHORIZED TO ACCESS ...');
				} else {
					setCheckAccess(true);
				}
			})
			.catch((err) => {
				window.write(err);
			});
	}, []);
	const [valueSearch, setValueSearch] = useState('');

	return (
		<>
			<Head>
				<title>{"L'PasSage • Stock"}</title>
				<meta name='description' content="L'passage" />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Container id='Header' maxW='container.xl'>
				<Header />
				<MantineProvider withGlobalStyles withNormalizeCSS>
					{loading != -1 ? (
						checkAccess == false || loading == true ? (
							<Stack w='full' justifyContent='center' alignItems='center' h='80vh'>
								<Loader color='#F48342' />
							</Stack>
						) : (
							<Stack px={{ base: '10px', md: '15px' }} minH='80vh' w='100%' mt='4' spacing={4} mb={'20px'}>
								<Stack spacing={0}>
									<Text align='center' size='xl' weight={700}>
										{'Stock du jour'.toUpperCase()}
									</Text>
									<Text align='center' size='xs'>
										{new Date(date).toLocaleDateString('fr-FR', {
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</Text>
								</Stack>

								<Stack direction={{ base: 'column', md: 'row' }} w='full'>
									
									<InputsSection
										updateStock={updateStock}
										data={data}
										value={valueSearch}
										setValue={setValueSearch}
										dataChanged={dataChanged}
										setDataChanged={setDataChanged}
									/>
									
								</Stack>
								
								<Table_stock setDataChanged={setDataChanged} setData={setData} data={data} filter={valueSearch} />
							</Stack>
						)
					) : (
						<Stack w='full' justifyContent='center' alignItems='center' h='80vh'>
							<Text fontSize='2xl' color='red.500' fontWeight='bold'>
								{"Une erreur s'est produite, veuillez réessayer"}
							</Text>
							<Button
								onClick={() => {
									window.location.reload();
								}}
								color='white'
								bg='red.500'
								_hover={{ bg: 'red.600' }}
								_active={{ bg: 'red.700' }}
								_focus={{ boxShadow: 'none' }}
								p='2'
								rounded='md'
								fontSize='sm'
							>
								{'Recharger'}
							</Button>
						</Stack>
					)}
				</MantineProvider>
			</Container>
		</>
	);
}
