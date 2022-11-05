import { VStack, Text, HStack, Spacer, CloseButton } from "@chakra-ui/react";

const Header = ({ NumberOfOrders, onClose, mobile }) => {
    return (
        <>
        <HStack w='full' h='56px' color='black.500' fontWeight={800} fontSize='14px' px={3} pl={0}>
            { mobile != undefined && mobile ? <CloseButton onClick={onClose} /> : null }
            <Text>Orders</Text>
            <Spacer />
            <Text>{NumberOfOrders}</Text>
        </HStack>
        </>
    );
};

export default Header;
