import { Modal, ModalOverlay, ModalContent, Text, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Stack } from '@chakra-ui/react';

const SuccessNotify = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={{base: 'xs', md: "md"}} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
						<Stack alignItems='center'>
							<Image src="/Images/icons/success.svg" w="70%" />
							<Text fontSize="14px" textAlign='center'>
								The order has been  <br />confirmed
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

export default SuccessNotify;
