import ModalMenu from "../../Modal/LivraisoninfoModal";
import React, { useEffect } from "react";
import { Text, Input, Stack } from '@chakra-ui/react';


function LivraisonInfo({ onClose, isOpen, takeLivraisonInfo, next, title }) {
	
    const [fname, setFname] = React.useState('')
    const handleChangeFname = (event) => setFname(event.target.value)
    
    const [address, setAddress] = React.useState('')
    const handleChangeAddress = (event) => setAddress(event.target.value)
    
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const handleChangePhoneNumber = (event) => setPhoneNumber(event.target.value)

    useEffect(() => {
        setFname('')
        setAddress('')
        setPhoneNumber('')
    }, [isOpen])

    return (
		<ModalMenu
			title={title}
			toCenter={true}
			onClose={onClose}
			isOpen={isOpen}
			next={takeLivraisonInfo}
            data={{fname, address, phoneNumber, setFname, setAddress, setPhoneNumber}}
			//disablebtn={}
		>
            <Stack spacing={4} color='black.500'>
                <Stack spacing={-1}>
                    <Text fontSize='xs' mb='8px'>Full name</Text>
                    <Input focusBorderColor="orange.500" value={fname} rounded='md' onChange={handleChangeFname} size='sm' />
                </Stack>
                <Stack spacing={-1}>
                    <Text fontSize='xs' mb='8px'>Address</Text>
                    <Input focusBorderColor="orange.500" value={address} rounded='md' onChange={handleChangeAddress} size='sm' />
                </Stack>
                <Stack spacing={-1}>
                    <Text fontSize='xs' mb='8px'>Phone number</Text>
                    <Input focusBorderColor="orange.500" value={phoneNumber} rounded='md' onChange={handleChangePhoneNumber} size='sm' />
                </Stack>
            </Stack>
		</ModalMenu>
	);
}

export default LivraisonInfo;
