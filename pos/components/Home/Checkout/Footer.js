import { VStack, Text, HStack, Spacer, Button } from "@chakra-ui/react";

const Footer = ({ Orders, setOrders, confirmOrders, Confirm }) => {

    const calcTotal = () => {
        let total = 0.00;
        Orders.forEach(order => {
            total += parseFloat(order.price) * order.qte;
        });
        return total;
    }

    return (
        <VStack
            w='full'
            px={5}
            fontSize='14px'
            fontWeight={800}
            color='black.500'
            spacing={5}
            pt={2}
        >
            <HStack w={"100%"} mt={1} h='20px'>
                <Text>Total:</Text>
                <Spacer />
                <Text>{parseFloat(calcTotal()).toFixed(2)} DH</Text>
            </HStack>
            <HStack w={"full"} >
                <Button
                    variant='solid'
                    colorScheme='whiteAlpha'
                    color='gray.700'
                    w='40%'
                    rounded='md'
                    size='md'
                    fontSize='14px'
                    bg='none'
                    border='1px solid #eee'
                    p='11px'
                    _active={{ color: "white", bg: "orange.700" }}
                    isDisabled={!Orders.length? true : false}
                    onClick={() => { setOrders([]) }}
                >
                    Clear
                </Button>
                <Button
                    variant='solid'
                    colorScheme='orange'
                    w='calc(100% - 40%)'
                    size='md'
                    rounded='md'
                    fontSize='14px'
                    isDisabled={!Orders.length? true : false}
                    onClick={() => {
                        confirmOrders();
                    }}
					isLoading={Confirm}
                >
                    Confirm
                </Button>
            </HStack>
        </VStack>
    );
};

export default Footer;
