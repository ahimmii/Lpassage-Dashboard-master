import {
	Box,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	HStack,
	Select,
} from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useRef, useState } from "react";
import put_data from '../../Controller/putData';


const addFournisseur = async (data) => {

	put_data('/api/add-fournisseur', data)
		.then((res) => {
			if (res.status === 200) {
				toast({
					title: 'Stock mis à jour',
					description: 'Le stock a été mis à jour avec succès',
					status: 'success',
					duration: 5000,
					isClosable: true,
					position: 'top',
				});
			}
		})
		.catch(() => {
			toast({
				title: 'Erreur',
				description: 'Une erreur est survenue lors de la mise à jour du stock',
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top',
			});
		});
};



export default function ReturnFocus({Data, setData}) {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [Name, setName] = useState("");
	const [Montant, setMontant] = useState(0);
	const [Total, setTotal] = useState(0);
	const initialRef = useRef(null)
	const finalRef = useRef(null)

	function Pdata() {

		const test = Data.data;
		const data = {
			__component: "fournisseur-list.fournisseur",
			Name: Name,
			Montant: Montant,
			Total: Total
		};

		test.push(data)
		setData({data: test})
		addFournisseur(Data)
		onClose()
		
		// addFournisseur(test);
		// window.location.reload();
	}

	return (
		<>
			<Button
				variant='outline'
				color='orange'
				colorScheme='orange'
				onClick={onOpen} >
				Ajouter
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Ajouter Nouveau Fournisseur</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={4}>
						<FormControl>
							<FormLabel>Fournisseur</FormLabel>
							<Input ref={initialRef} placeholder='Fournisseur'
								onChange={(event) => {
									setName(event.target.value);
								}} />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Montant</FormLabel>
							<NumberInput defaultValue={0}
								onChange={(value) => {
									setMontant(event.target.value);
								}}>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Total</FormLabel>
							<NumberInput
								defaultValue={0}
								onChange={(value) => {
									setTotal(event.target.value);
								}}>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='orange'
							mr={3}
							onClick={Pdata}>Ajouter</Button>
						<Button onClick={onClose}>Annuler</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

// function SupprimerFocus(Data) {


// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const [Pin, setPin] = useState("");
// 	const [Name, setName] = useState("");
// 	// const [Montant, setMontant] = useState(0);
// 	// const [Total, setTotal] = useState(0);
// 	const initialRef = useRef(null)
// 	const finalRef = useRef(null)

// 	const Pdata = () => {

// 		if (Pin == "1775") {
// 			console.log(Name);
// 			onClose();
// 		}
// 	}

// 	return (
// 		<>
// 			<Button
// 				variant='outline'
// 				color='red'
// 				colorScheme='red'
// 				onClick={onOpen} >
// 				Supprimer
// 			</Button>


// 			<Modal
// 				initialFocusRef={initialRef}
// 				finalFocusRef={finalRef}
// 				isOpen={isOpen}
// 				onClose={onClose}>
// 				<ModalOverlay />
// 				<ModalContent>
// 					<ModalHeader>Supprimer Fournisseur</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody pb={4}>
// 						<FormControl>
// 							<FormLabel >Fournisseur</FormLabel>
// 							<Select
// 								placeholder='Sélectionner Fournisseur'
// 								fontSize={19} textAlign="center"
// 								onChange={(event) => setName(event.target.value)}>
// 								{/* {Data?.map((item) => {
// 									return (
// 										<option value={item.Name} key={item.id}>{item.Name}</option>
// 									)
// 								})} */}
// 							</Select>
// 						</FormControl>
// 						<br />
// 						<FormControl >
// 							<FormLabel>PIN</FormLabel>
// 							<HStack align="center" justify="center">
// 								<PinInput mask onChange={(value) => setPin(value)} >
// 									<PinInputField />
// 									<PinInputField />
// 									<PinInputField />
// 									<PinInputField />
// 								</PinInput>
// 							</HStack>
// 						</FormControl>
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button
// 							colorScheme='orange'
// 							mr={3}
// 							>Supprimer</Button>
// 						<Button onClick={onClose}>Annuler</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	)
// }