import { Image, Text, GridItem, VStack, Stack, Radio } from "@chakra-ui/react";
import { backEndUrl } from "../../Controller/urls";

const ModalCard = ({ item, selected, ifClicked}) => {
	
    return (
		<GridItem
			cursor='pointer'
			rounded='md'
			overflow='hidden'
            shadow='base'
			border='1px solid #eee'
			spacing={-5}
			h={{base: '150px', md: '160px'}}
			onClick={() => {
				ifClicked(item, selected)
			}}
        >
			<Radio position='relative' zIndex={1} colorScheme='orange' isChecked={selected} left='calc(100% - 25px)' h='15px' top='8px'></Radio>
			<VStack h={{base: '150px', md: '160px'}} zIndex={0} w='100%' position='relative' top='-25px'  spacing={0} textAlign='center'>
				<Image src={backEndUrl + item.attributes.image.data.attributes.url} h='70%' w='100%' alt={`Image for ${item.attributes.name}`} />
                <Stack h='30%' justifyContent='center' w='full'>
                    <Text color='black.500' fontSize='xs'>
                        {item.attributes.name.length > 15 ? item.attributes.name.substring(0, 15) + "..." : item.attributes.name}
                    </Text>
                </Stack>
			</VStack>
		</GridItem>
	);
};

const ModalCardForPlaceDeConsomation = ({ item, selected, ifClicked}) => {

    return (
		<GridItem
			cursor='pointer'
			rounded='md'
			overflow='hidden'
            shadow='base'
			border='1px solid #eee'
			spacing={-5}
			h={{base: '150px', md: '160px'}}
			onClick={() => {
				ifClicked(item, selected)
			}}
        >
			<Radio position='relative' zIndex={1} colorScheme='orange' isChecked={selected} left='calc(100% - 25px)' h='15px' top='8px'></Radio>
			<VStack h={{base: '150px', md: '160px'}} zIndex={0} w='100%' position='relative' top='-25px'  spacing={0} textAlign='center'>
				<Image src={item.image} h='70%' w='100%' alt={`Image for ${item.name}`} />
                <Stack h='30%' justifyContent='center' w='full'>
                    <Text color='black.500' fontSize='xs'>
                        {item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name}
                    </Text>
                </Stack>
			</VStack>
		</GridItem>
	);
};

export {ModalCard, ModalCardForPlaceDeConsomation};
