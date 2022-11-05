import { Box } from "@chakra-ui/react";
import ItemsList from "./ItemsList";

const Menu = ({ products, types, createOrder }) => {
	return (
		<Box
			id='Menu'
			w={{ base: "full", md: "calc(100% - 350px)" }}
			overscroll='hidden'
			overflowY='scroll'
			rounded='xl'
			h='full'
			border={{base: '', md: '2px solid #eee'}}
			scrollBehavior={{md: 'smooth'}}
		>
			{types?.map((type, index) => {
				
				let productslist = products?.filter((product) => {
					return product.attributes.categories.data[0].id === type.id
				});
				return (
					<ItemsList key={(type.id)} createOrder={createOrder} type={type} products={productslist} />
				);
			})}
		</Box>
	);
};

export default Menu;
