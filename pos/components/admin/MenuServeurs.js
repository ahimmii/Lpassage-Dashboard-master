
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from "@chakra-ui/react";

function MenuServeurs({natures, serveur, setServeur}) { 

	return (
		<Menu isLazy={true}>
			<MenuButton h='35px' color="#4a5568" fontWeight="100" fontSize="14px" borderRadius={"6px"} as={Button} variant='outline' rightIcon={<ChevronDownIcon />}>
				{serveur}
			</MenuButton>
			<MenuList>
				<MenuItem color="#4a5568" fontWeight="100" onClick={() => {setServeur("ALL")}} fontSize="14px">ALL</MenuItem>
				{
					natures?.map((e, i) => {
						// console.log(natures)
						return (
							<MenuItem onClick={() => {setServeur(e?.username)}} color="#4a5568" fontWeight="100" fontSize="14px" key={i+e.id}>{e.username}</MenuItem>
						)
					})
				}
			</MenuList>
		</Menu>
	);
}

export default MenuServeurs;