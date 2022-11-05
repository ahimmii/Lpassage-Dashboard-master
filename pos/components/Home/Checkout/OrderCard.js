import { VStack, Text, HStack, Stack, Image, Box, Button, Input } from "@chakra-ui/react";
import { backEndUrl } from "../../../Controller/urls";
import { CloseButton } from '@chakra-ui/react'
import { useState, useRef } from 'react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

function OrderCard ({ setQte, order, cancelOrder, decrementQte, incrementQte }) {
    const [height , setHeight] = useState("110px")
    const [heightfull , setHeightfull] = useState("120px")
    const [opacity , setOpacity] = useState("1")
    const [padding , setPadding] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // reff
    const refNumQte = useRef(null)

    return (
        <Stack w='full' spacing={0} py={padding} h={heightfull} transition='0.5s ease'>
            <HStack opacity={opacity} w='full' border='1px solid #eee' rounded='xl' h={height} spacing={0} pr={1} transition='0.5s ease'>
                <HStack p='10px' spacing={0}>
                    <Box h='90px' w='90px' bgColor='red' rounded='xl' border='1px solid #eee'
                        bg={
                            'url(' +
                                (backEndUrl + (order.image.data.attributes.url || ""))
                            + ')'
                        }
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        backgroundSize='cover'
                    ></Box>
                </HStack>
                <VStack w='full' h='full' alignItems={"start"} justifyContent='center'>
                    <Text fontSize='sm' color='black.500'>
                        {order.name.length > 15 ? order.name.substring(0, 18) + "..." : order.name}
                        <Stack
                            py={0}
                            h='full'
                            fontWeight={900}
                            color='orange.500'
                        >
                            <Text fontSize='sm'>{(parseFloat(order.price)).toFixed(2)} DH</Text>
                        </Stack>
                    </Text>
                    <HStack>
                        <Button w='fit-content' size="sm" onClick={() => {
                            if (order.qte > 1) {
                                decrementQte(order);
                            }
                        }}>-</Button>
                        <Stack cursor='pointer' onClick={onOpen} w='55px' rounded='lg' border='#eee solid 2px' h='full' justifyContent={"center"} textAlign='center'><Text>{order.qte}</Text></Stack>
                        <Button w='fit-content' size="sm" onClick={() => {
                            incrementQte(order);
                        }}>+</Button>
                    </HStack>
                </VStack>
                <Stack  h='full' alignItems={"end"} pt="5px" pr='1px'>
                    <CloseButton position='relative' onClick={() => {
                        setHeight("0px")
                        setOpacity("0")
                        setPadding(0)
                        setHeightfull("0px")
                        cancelOrder(order)
                    }} />
                </Stack>
            </HStack>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Qte - {order.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>

                            <NumberInput defaultValue={order.qte} colorScheme='orange'>
                                <NumberInputField ref={refNumQte}/>
                                <NumberInputStepper>
                                </NumberInputStepper>
                            </NumberInput>
                            <Button onClick={() => {
                                console.log(refNumQte.current.value)
                                setQte(order, refNumQte.current.value)
                                onClose()
                            }} colorScheme='orange' variant='outline' >Set</Button>
                        </Stack>

                    </ModalBody>
                    <ModalFooter>


                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Stack>
    );
};

export default OrderCard;
