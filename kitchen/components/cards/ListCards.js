import { Grid, Spinner, Stack, GridItem } from '@chakra-ui/react';
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

	return orders.length > 0 ? (
		<Grid
			id='Header'
			boxShadow='base'
			rounded='2xl'
			p={2}
			w='full'
			gap={4}
			templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', '2xl': 'repeat(4, 1fr)' }}
		>
			{orders?.map((el, i) => {
				return (
					<GridItem id='Header' key={el?.id || i} boxShadow='base' rounded='xl' w='full' transition='5s ease'>
						<Card
							getOrdersData={getOrdersData}
							orders={el}
							color={
								Colors[
									Number(String(el?.id).substring(String(el?.id).length - 4, String(el?.id).length)) % colorsLength
								]
							}
						/>
					</GridItem>
				);
			})}
		</Grid>
	) : (
		<Stack w='full' minH='80vh' justifyContent='center' alignItems='center'>
			<Spinner color='orange.500' size="xl" thickness='5px' />
		</Stack>
	);
};

export default ListCards;
