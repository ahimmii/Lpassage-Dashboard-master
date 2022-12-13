import { Grid, Spinner, Stack, GridItem, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import getOrders from '../../controller/getOrders';
import Card from './Card';
import { Colors, colorsLength } from './Colors';
import axios from "axios";
import { backEndUrl } from '../../controller/urls.token';

const ListCards = ({ socket, thereIsToken, getOrdersData, orders, connect, setOrders }) => {

	useEffect(() => {
		if (socket) {
			socket.on("newOrder", (newOrder) => {
				getOrdersData();
			})
		}
	}, [socket])

	useEffect(() => {
		getOrdersData();
	}, [connect, thereIsToken]);

	let i = 1;
	let x = 0;

	// if (orders.length)
	// 	console.log(orders.length)


	return orders.length > 0 ? (

		<SimpleGrid
			id='Header'
			// display='flex'
			// flexDirection='column-reverse'
			boxShadow='base'
			rounded='2xl'
			p={1}
			autoRows='auto'
			autoColumns='auto'
			gap={3}
			alignItems='start'
			templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', '2xl': 'repeat(5, 1fr)' }}
			templateRows='[header] 350px [footer] start [main-start main-end] 1fr'
		>
			{orders?.map((el, i) => {
				return (
					<>
					{el?.attributes?.plats?.map((plat, i) => {
					return(
					// {console.log("this "+plat.name)}
					<GridItem id='Header' boxShadow='base' rounded='xl' w='full' transition='5s ease'>
						<Card
							getOrdersData={getOrdersData}
							orders={el}
							plat = {i}
							color={
								Colors[
								Number(String(el?.id).substring(String(el?.id).length - 1, String(el?.id).length)) % colorsLength
								]
							}
						/>
					</GridItem>
					);
					})}
					</>
				);
			})}


		</SimpleGrid>

	) : (
		<Stack w='full' minH='80vh' justifyContent='center' alignItems='center'>
			<Spinner color='orange.500' size="xl" thickness='5px' />
		</Stack>
	);
};

export default ListCards;
