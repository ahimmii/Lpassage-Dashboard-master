
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from "@chakra-ui/react";

function MenuStock({ stock, serveur, setServeur }) {

	const F_name = [...new Map(stock?.data[0]?.Ingredient?.map((F_name) => [F_name['name'], F_name])).values()]
	return (
		<Menu isLazy={true}>
			<MenuButton h='35px' color="#4a5568" fontWeight="100" fontSize="14px" borderRadius={"6px"} as={Button} variant='outline' rightIcon={<ChevronDownIcon />}>
				{serveur}
			</MenuButton>
			<MenuList
				css={{
					"&::-webkit-scrollbar": {
						width: "4px",
					},
					"&::-webkit-scrollbar-track": {
						width: "6px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "#e2e8f0",
						borderRadius: "24px",
					},
				}}
				overflowX="auto"
				maxHeight="30rem"
			>
				<MenuItem color="#4a5568" fontWeight="100" onClick={() => { setServeur("ALL") }} fontSize="14px">ALL</MenuItem>
				{					
					F_name.map((e, i) => {
						return (
							<MenuItem onClick={() => { setServeur(e.name) }} color="#4a5568" fontWeight="100" fontSize="14px" key={i}>{e.name}</MenuItem>
						)
					})
				}
			</MenuList>
		</Menu>
	);
}

export default MenuStock;