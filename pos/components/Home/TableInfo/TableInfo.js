import ModalMenu from "../../Modal/TableinfoModal";
import React from "react";
import { Text, Input, Stack, HStack, Button } from '@chakra-ui/react';


function TableInfo({ onClose, isOpen, takeTableInfo, title }) {
	
    const [tableId, setTableId] = React.useState('')
    
    const handleChangeTableId = (Num) => {
        if (Num === '<') setTableId(tableId.substring(0, tableId.length - 1))
        else if (Num === "C") setTableId('')
        else setTableId(String(tableId) + String(Num))

    }

    return (
		<ModalMenu
			title={title}
			toCenter={true}
			onClose={onClose}
			isOpen={isOpen}
			next={takeTableInfo}
            tableId={tableId}
        >
            <Stack spacing={4} color='black.500'>
                <Stack spacing={-1}>
                    <Text fontSize='xs' mb='8px'>Table Number?</Text>
                    <Input focusBorderColor="orange.500" value={tableId} rounded='md' onChange={handleChangeTableId} size='sm' />
                </Stack>
                <Stack>
                    <HStack>
                        <Button onClick={() => handleChangeTableId(1)} colorScheme='gray' variant='solid' w='full'>1</Button>
                        <Button onClick={() => handleChangeTableId(2)} colorScheme='gray' variant='solid' w='full'>2</Button>
                        <Button onClick={() => handleChangeTableId(3)} colorScheme='gray' variant='solid' w='full'>3</Button>
                    </HStack>
                    <HStack>
                        <Button onClick={() => handleChangeTableId(4)} colorScheme='gray' variant='solid' w='full'>4</Button>
                        <Button onClick={() => handleChangeTableId(5)} colorScheme='gray' variant='solid' w='full'>5</Button>
                        <Button onClick={() => handleChangeTableId(6)} colorScheme='gray' variant='solid' w='full'>6</Button>
                    </HStack>
                    <HStack>
                        <Button onClick={() => handleChangeTableId(7)} colorScheme='gray' variant='solid' w='full'>7</Button>
                        <Button onClick={() => handleChangeTableId(8)} colorScheme='gray' variant='solid' w='full'>8</Button> 
                        <Button onClick={() => handleChangeTableId(9)} colorScheme='gray' variant='solid' w='full'>9</Button>
                    </HStack>
                    <HStack>
                        <Button onClick={() => handleChangeTableId('C')} colorScheme='gray' variant='solid' w='full'>C</Button>
                        <Button onClick={() => handleChangeTableId(0)} colorScheme='gray' variant='solid' w='full'>0</Button>
                        <Button onClick={() => handleChangeTableId('<')} colorScheme='gray' variant='solid' w='full'>{'<'}</Button>
                    </HStack>
                </Stack>
            </Stack>
		</ModalMenu>
	);
}

export default TableInfo;
