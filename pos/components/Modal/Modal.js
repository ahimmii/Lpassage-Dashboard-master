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
	Grid,
} from "@chakra-ui/react";

const ModalMenu = ({ onClose, isOpen, children, title, next, toCenter, disablebtn }) => {
	return (
		<Modal
			size={toCenter != undefined && toCenter == true ? { base: "xs", md: "xl" } : { base: "xs", md: "xl", xl: "3xl" }}
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
				<ModalCloseButton onClose={onClose}/>
				<ModalBody>
					<Grid
						templateColumns={
							toCenter != undefined && toCenter == true
								? { base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }
								: { base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }
						}
						gap={6}
					>
						{children}
					</Grid>
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
							Cancel
						</Button>
						<Button
							variant='solid'
							colorScheme='orange'
							size='sm'
							rounded='md'
							fontSize='12px'
							p='11px'
							isDisabled={disablebtn != undefined && disablebtn ? true : false}
							onClick={ () => {
								next();
							}}
						>
							Next
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalMenu;
