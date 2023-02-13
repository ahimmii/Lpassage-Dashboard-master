import {Button} from '@chakra-ui/react'
import { Input, Autocomplete } from '@mantine/core';
import { useEffect, useState, forwardRef } from 'react';
import { IconX } from '@tabler/icons';
import { ActionIcon } from '@mantine/core';

function InputsSection({ data, value, setValue, updateStock, dataChanged, setDataChanged }) {
	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<>
			<Input
				styles={() => ({
					wrapper: {
						width: '100%',
						border: '1px solid #E2E8F0',
						borderRadius: '10px',
						/* change the root border when input is focus */
						'&:focus-within': {
							border: '1px solid #F48342',
						},
					},

					input: {
						marginLeft: '3px',
						width: '95%',
						height: 40,
						border: 'none',
						padding: '0 10px',
						fontSize: 14,
						color: '#4A5568',
					},
				})}
				placeholder='Rechercher'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				rightSection={
					<ActionIcon
						onClick={() => {
							setValue('');
						}}
						mr={2}
						variant='transparent'
						color='gray'
					>
						<IconX size={16} />
					</ActionIcon>
				}
			/>
			{/* button save changes */}
			<Button
				variant='outline'
				color='orange'
				colorScheme='orange'
				disabled={!dataChanged}
				onClick={() => {
					updateStock(data);
					setDataChanged(false);
				}}
			>
				Enregistrer
			</Button>
		</>
	);
}

export default InputsSection;
