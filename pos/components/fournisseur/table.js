import { Input, Text, Button } from '@chakra-ui/react';
import { NumberInput } from '@mantine/core';
import { Table } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useEffect, useState } from 'react';
import put_data from '../../Controller/putData';
import SupprimerFocus from '../../components/fournisseur/ReturnFocus';

const updateFournisseur = async (data) => {

	put_data('/api/update-fournisseur', data)
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
		.catch((err) => {
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

const useStyles = createStyles((theme, _params, getRef) => ({
	table: {
		borderRadius: '10px',
		overflow: 'hidden',
		border: '0',
		boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
		textAlign: 'center',
		'& thead': {
			background: '#F48342',
			'& tr': {
				'& th': {
					textAlign: 'center',
					color: 'white',
					borderRadius: 5,
					height: '50px',
					fontSize: '16px',
				},
			},
		},
		'& tbody': {
			'& tr': {
				'& td': {
					textAlign: 'center',
					padding: '0 auto',
					margin: '0 0',
				},
			},
		},
	},
}));



function Table_stock({ data, filter, id, setData, setDataChanged }) {
	const [rows, setRows] = useState([]);
	
	const deleteFournisseur = (idx) => {

		let newdata = data.data.filter(x => x.id != idx)
		newdata = { data: newdata, id: id}
		setData(newdata)
		updateFournisseur(newdata)

	}

	useEffect(() => {
		setRows(
			data?.data?.map((element, index) => {
				if (filter === '' || element?.Name.toLowerCase().includes(filter?.toLowerCase().trim())) {
					return (
						<tr key={element?.id}>
							{/* {console.log(index)} */}
							<td style={{ fontSize: '19px', textAlign: 'center', fontWeight: 'bold' }}>
								<Text>{element?.Name}</Text>
							</td>

							<td>
								{/* here */}
								<InputNumber
									setDataChanged={setDataChanged}
									value={element?.Montant}
									onChange={(value) => {
										const newData__ = data.data.map(x => {
											if (x.id === element.id) {
												return { ...x, Montant: value }
											}
											return x
										})
										setData({data: newData__})
									}}
								/>
							</td>
							<tb>
								<Button onClick={() => deleteFournisseur(element.id)}>X</Button>
							</tb>
						</tr>

					);
				}
			})
		);
	}, [filter, data]);

	const { classes } = useStyles();

	return (
		<Table fontSize='15px' withColumnBorders className={classes.table}>
			<thead>
				<tr>
					<th>Fournisseur</th>
					<th>Montant</th>
					<th></th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}

function InputNumber({ value, onChange, setDataChanged }) {
	const [query, setQuery] = useState(value);

	useEffect(() => {
		if (query !== value) {
			setDataChanged(true);
			const timeOutId = setTimeout(() => onChange(query), 300);
			return () => clearTimeout(timeOutId);
		}
	}, [query]);

	return (
		<NumberInput
			styles={{
				root: {
					border: 0,
				},
				input: {
					textAlign: 'center',
					border: 'none',
					fontSize: '14px',

				},

			}}
			w='80%'
			outline='0'
			hideControls
			value={query}
			onChange={setQuery}
		/>
	);
}
export default Table_stock;
