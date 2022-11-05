import { Box, Modal, ModalOverlay, ModalContent, Text, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Stack, Heading } from '@chakra-ui/react';

const ProductInfo = ({ isOpen, onClose, name, image, description }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
						<Stack alignItems='center'>
                            <Box h='200px' w='full' bgColor='red'
                                bg={'url(' +image+ ')'}
                                rounded='md'
                                backgroundPosition='center'
                                backgroundRepeat='no-repeat'
                                backgroundSize='cover'
                                cursor='pointer'
                            ></Box>
							<Heading fontSize="17px" textAlign='center'>
								{name}
							</Heading>
                            <Text fontSize="14px">
                                {description}
                            </Text>
						</Stack>
						
					</ModalBody>
                    <ModalFooter pb={4} pr={2}>
                        <Button size='sm' colorScheme='orange' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProductInfo;
