import { Stack, Text, Container, useToast, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MantineProvider } from '@mantine/core';
import { Loader } from '@mantine/core';

// components
import Header from "../components/admin/Header";
import Get_Data from "../Controller/getData";
import { getUser } from "../Controller/apis";
import Search_bar from "../components/stock/Search_bar";
import { Box } from "@chakra-ui/react";
import Table_stock from "../components/stock/table";

export default function Stock() {
	const router = useRouter();
	const [checkAccess, setCheckAccess] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const toast = useToast();

	useEffect(() => {
		Get_Data("/api/ingredient-list?populate[list][populate]=*")
			.then((res) => {
				setData(res?.data?.attributes?.list?.map((item) => ({
					value: item.Name,
					key: item.id,
					barCode: item.barCode,
					qte: 0,
					prix_par_unite: 0,
				})));
				setTimeout(() => {
					setLoading(false);
					console.log("done")
				}, 500);
			})
			.catch((err) => {
				toast({
					title: err.message,
					status: "error",
					isClosable: true,
				});
				console.log(err);
			});
	}, []);

    useEffect(() => {
		getUser("/api/users/me?populate=image,role")
			.then((res) => {
				if (res.role == undefined && !(res?.role?.name == "admin")) {
					document.write("YOU ARE NOT AUTHORIZED TO ACCESS ...");
				} else {
					setCheckAccess(true);
				}
			})
			.catch((err) => {
				window.write(err);
			});
	}, []);
	const [valueSearch, setValueSearch] = useState("");

	return (
		<>
			<Head>
				<title>{"L'PasSage • Stock"}</title>
				<meta name='description' content="L'passage" />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Container id='Header' maxW='container.xl'>
				<Header />
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
      			>
				{
					(checkAccess == false || loading == true) ? (
						<Stack w='full' justifyContent='center' alignItems='center' h='80vh'>
							<Loader color='#F48342' />
						</Stack>
					) : (
						<Stack
							px={{base: '10px', md: "15px"}}
							minH='80vh'
							//align='center'
							//justify='center'
							w='100%'
							mt='4'
							spacing={4}
							mb={"20px"}
						>
							<Stack direction={{base: "column", md: "row"}} w='full'>
								<Search_bar data={data} value={valueSearch} setValue={setValueSearch} />
							</Stack>
							<Table_stock setData={setData} data={data} filter={valueSearch}/>
						</Stack>
					)
				}
				</MantineProvider>
			</Container>
		</>
	);
}
