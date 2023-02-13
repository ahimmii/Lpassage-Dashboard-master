import { Stack, Container, useToast, Button } from '@chakra-ui/react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { MantineProvider, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { Loader } from '@mantine/core';

// components
import Header from '../components/admin/Header';
import Get_Data from '../Controller/getData';
import { getUser } from '../Controller/apis';
import InputsSection from '../components/fournisseur/InputsSection';
import Table_stock from '../components/fournisseur/table';
import ReturnFocus from '../components/fournisseur/ReturnFocus';
import Post_data from '../Controller/postData';
import put_data from '../Controller/putData';

export default function Stock() {

	const router = useRouter();
	const [checkAccess, setCheckAccess] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [date, setDate] = useState('');
	const [id, setId] = useState("");
	const [dataChanged, setDataChanged] = useState(false);
	const toast = useToast();


	const updateFournisseur = async (data) => {

		put_data('/api/update-fournisseur', data)
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

	const createFournisseur = async (data) => {

		Post_data('/api/create-fournisseur', data)
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

		Get_Data('/api/findOne-fournisseur')
			.then((res) => {
				setDate(res.createdAt);

				setData(res);
				setId(res.id);

			})
			.catch((err) => {
				console.log(err);
				setLoading(-1);
			});

		setTimeout(() => {
			setLoading(false);
		}, 5);
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
				toast({
					title: err?.response?.data?.error?.message || 'Error',
					status: 'error',
					isClosable: true,
				});
				router.push('/');
			});
	}, []);
	const [valueSearch, setValueSearch] = useState('');
	if (new Date().toLocaleDateString('fr-FR', { month: 'numeric' }) ==
		new Date(date).toLocaleDateString('fr-FR', { month: 'numeric' }) &&
		new Date().toLocaleDateString('fr-FR', { day: 'numeric' }) <
		new Date(date).toLocaleDateString('fr-FR', { day: 'numeric' })) {

		createFournisseur(data);
		window.location.reload();
	}

	return (
		<>
			<Head>
				<title>{"L'PasSage • Fournisseur"}</title>
				<meta name='description' content="L'passage" />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Container id='Header' maxW='container.xl'>
				<Header />
				<>
					{loading != -1 ? (
						checkAccess == false || loading == true ? (
							<Stack w='full' justifyContent='center' alignItems='center' h='80vh'>
								<Loader color='#F48342' />
							</Stack>
						) : (

							<Stack px={{ base: '10px', md: '15px' }} minH='80vh' w='100%' mt='4' spacing={4} mb={'20px'}>
								<Stack spacing={0}>
									<Text align='center' size='xl' weight={700}>
										{'... du jour'.toUpperCase()}
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
										updateStock={updateFournisseur}
										data={data}
										value={valueSearch}
										setValue={setValueSearch}
										dataChanged={dataChanged}
										setDataChanged={setDataChanged}
									/>
									<ReturnFocus Data={data} setData={setData} />

								</Stack>

								<Table_stock setDataChanged={setDataChanged} setData={setData} data={data} id={id} filter={valueSearch} />
							</Stack>

						)
					) : (
						<Stack w='full' justifyContent='center' alignItems='center' h='80vh' />
					)}
				</>
			</Container>
		</>
	);
}
