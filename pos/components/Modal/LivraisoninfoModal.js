import {
	Text,
	HStack,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Box,
} from "@chakra-ui/react";

const ModalMenu = ({ onClose, isOpen, children, title, next, disablebtn, data }) => {
	return (
		<Modal
			size={{base: "xs", md: "md"}}
			isCentered
			onClose={onClose}
			isOpen={isOpen}
			scrollBehavior='inside'
			motionPreset='none'
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Text color='black.500' fontSize='sm'>
						{title}
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box>
						{children}
					</Box>
				</ModalBody>
				<ModalFooter>
					<HStack>
						<Button
							variant='solid'
							colorScheme='whiteAlpha'
							color='gray.700'
							rounded='md'
							size='sm'
							fontSize='12px'
							bg='none'
							border='1px solid #eee'
							p='11px'
							_active={{ color: "white", bg: "orange.700" }}
							isDisabled={false ? true : false}
							onClick={() => {
								onClose();
							}}
						>
							Annuler
						</Button>
						<Button
							variant='solid'
							colorScheme='orange'
							size='sm'
							rounded='md'
							fontSize='12px'
							p='11px'
							isDisabled={disablebtn != undefined && disablebtn ? true : false}
							onClick={() => {
								onClose();
								setTimeout(() => {
									next(data);
                                    //data.setFname('');
                                    //data.setAddress('');
                                    //data.setPhoneNumber('');
								}, 140);
							}}
						>
							Suivant 
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalMenu;
