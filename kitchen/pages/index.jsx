import React, { useEffect, useRef, useState } from "react";
import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Head from "next/head";
import { Text, Button, Input, useToast, Stack, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

// socket
import { backEndUrl } from "../controller/urls.token";

// Componenets
import ListCards from "../components/cards/ListCards";
import Header from "../components/header/Header";
import getOrders from "../controller/getOrders";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

function Home({ socket, connect }) {

	const [orders, setOrders] = useState([]);
	const router = useRouter();

	useEffect(() => {
		if (socket) {
			socket.on("orderStatusUpdated", (data) => {
				console.log("orderStatusUpdated", data);
				// remove order from list
				setOrders((prev) => {
					return prev.filter((order) => order.id !== data.order.id);
				});
			});
		}
	}, [socket]);


	const getOrdersData = () => {
		getOrders(
			"/api/orders?sort=createdAt:asc&filters[order_status][$eq]=1&populate[user]=*&populate[plats][populate][sauces][populate][image]=*&populate[plats][populate][juses][populate][image]=*&populate[plats][populate][choix_accompagnements][populate][image]=*&populate[plats][populate]=categories"
		).then((res) => {
			setOrders(res.data);
		}).catch((err) => {
			console.log("error: ", err.response)
		});
	}

	const [thereIsToken, setThereIsToken] = useState(false);
	const indentifyRef = useRef(null);
	const passwordRef = useRef(null);
	const Toast = useToast();

	const login = () => {
		axios.post(backEndUrl + "/api/auth/local", {
			identifier: indentifyRef.current.value,
			password: passwordRef.current.value
		}).then((res) => {
			localStorage.setItem('lapassage_token_kitchen', res.data.jwt);
			setThereIsToken(true);
			getOrdersData();
			router.reload();
		}).catch((err) => {
			Toast({
				title: "Error",
				description: err?.response?.data?.error?.message || "Wrong username or password",
				status: "error",
				duration: 2000,
				isClosable: true,
			})
		});
	}

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (loading) {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.getItem('lapassage_token_kitchen')}` },
				withCredentials: true
			};

			axios.get(backEndUrl + "/api/users/me", config).then((res) => {
				// check responde if user
				if (res.data) {
					setThereIsToken(true);
				}
			}).catch((err) => {
				console.log("Error: ", err.response);
				// if error set loading to 2
				setLoading(2);
			});
		} else {
			if (typeof window !== "undefined") setLoading(true);
			else setLoading(false);
		}
	}, [loading]);

	console.log(connect);

	return (
		<>
			<Head>
				<title>{"L'PassSage"}</title>
			</Head>
			<Header />
			{
				(connect || thereIsToken == false) ? (
					thereIsToken == false ? (
						<Stack p={5} minH='80vh' pt='20vh' justifyContent='center' alignItems='center'>
							{
								loading == 2 ? (
									<Stack w='50%' alignItems='center' shadow='base' p={5} rounded='md' spacing={4}>
										<Image src='/Images/icons/key.svg' w='100px' shadow='inner' rounded='full' p={4} />
										<Input ref={indentifyRef} placeholder='indentify' />
										<Input ref={passwordRef} placeholder='password' type="password" />
										<Button
											w='full'
											onClick={() => {
												login();
											}}
										>
											Se connecter
										</Button>
									</Stack>
								) : (
									<>
										<Spinner color='orange.500' size="xl" thickness='5px' />
										<Text>Verification de la connexion...</Text>
									</>
								)
							}
						</Stack>
					) : (
						<Stack p={5} minH='80vh' pt='75px'>
							{/* <SimpleGrid
								id='Header'
								// display='flex'
								// flexDirection='column-reverse'
								boxShadow='base'
								rounded='2xl'
								p={1}
								autoRows='auto'
								autoFlow='column'
								gap={3}
								alignItems='start'
								templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', '2xl': 'repeat(6, 1fr)' }}
								templateRows='[header] 350px [footer] start [main-start main-end] 1fr'
							> */}
								{/* <GridItem id='Header' boxShadow='base' rounded='xl' w='full' transition='5s ease'> */}
								<ListCards getOrdersData={getOrdersData} setOrders={setOrders} orders={orders} connect={connect} thereIsToken={thereIsToken} socket={socket} />
								{/* </GridItem> */}
							{/* </SimpleGrid> */}
						</Stack>
					)
				) : (
					<Stack p={5} minH='100vh' justifyContent='center' alignItems='center' pt='75px'>
						<Spinner color='orange.500' size="xl" thickness='5px' />
						<Text fontSize='16px'>Connexion au serveur</Text>
					</Stack>
				)
			}
		</>
	);
}

export default Home;
