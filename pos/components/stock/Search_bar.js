import { Stack, Text } from '@chakra-ui/react';
import { Input, Autocomplete } from '@mantine/core';
import { useEffect, useState, forwardRef } from 'react';
import { IconX } from '@tabler/icons';
import { ActionIcon, Button } from '@mantine/core';

function Search_bar({ data, value, setValue }) {
	useEffect(() => {
		// console.log(value);
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
                        }
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
				//itemComponent={forwardRef(({ value, barCode, ...others }, ref) => (
				//	<Stack spacing={0} ref={ref} {...others}>
				//		<Text>{value}</Text>
				//		<Text fontSize={'13px'} color='gray.500'>
				//			#{barCode ? barCode : ''}
				//		</Text>
				//	</Stack>
				//))}
				//data={data}
				//filter={(value, item) =>
				//	item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
				//	(item.barCode && item.barCode.toLowerCase().includes(value.toLowerCase().trim()))
				//}
				/* add right button to input */
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
			<Button type='button' variant='outline' color='orange' style={{ height: '39px', borderRadius: "10px" }}
                    onClick={() => {
                        // console.log(data)
                    }}>
				Enregistrer
			</Button>
		</>
	);
}

export default Search_bar;
