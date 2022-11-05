
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from "@chakra-ui/react";

function MenuIngredients({natures, nature, setNature}){ 

	return (
		<Menu isLazy={true}>
			<MenuButton h='35px' color="#4a5568" fontWeight="100" fontSize="14px" borderRadius={"6px"} as={Button} variant='outline' rightIcon={<ChevronDownIcon />}>
				{nature}
			</MenuButton>
			<MenuList>
				<MenuItem color="#4a5568" fontWeight="100" onClick={() => {setNature("ALL")}} fontSize="14px">ALL</MenuItem>
				{
					natures?.map((e, i) => {
						return (
							<MenuItem onClick={() => {setNature(e?.attributes?.name)}} color="#4a5568" fontWeight="100" fontSize="14px" key={i+e.id}>{e.attributes.name}</MenuItem>
						)
					})
				}
			</MenuList>
		</Menu>
	);
}

export default MenuIngredients;