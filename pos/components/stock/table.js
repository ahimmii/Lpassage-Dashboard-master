import { Input, Text } from '@chakra-ui/react';
import { NumberInput } from '@mantine/core';
import { Table } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useEffect, useState } from 'react';

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

function Table_stock({ data, filter, setData, setDataChanged }) {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		setRows(
			data.map((element, index) => {
				if (filter === '' || element?.value.toLowerCase().includes(filter?.toLowerCase().trim()) || element?.barCode && element?.barCode.toLowerCase().includes(filter?.toLowerCase().trim())) {
					return (
						<tr key={element.key}>
							<td style={{ fontSize: '14px', textAlign: 'left' }}>
								<Text>{element.value}</Text>
								<Text color='gray.400' fontSize='12px'>
									{element.barCode || 'N/A'}
								</Text>
							</td>

							<td>
								{/* here */}
								<InputNumber
									setDataChanged={setDataChanged}
									value={element.qte}
									onChange={(value) => {
										setData(
											data.map((el, i) => {
												// console.log(el)
												if (i === index) {
													el.qte = value;
												}
												return el;
											})
										);
									}}
								/>
							</td>

							<td>
								{/* here */}
								<InputNumber
									setDataChanged={setDataChanged}
									value={element.prix_par_unite}
									onChange={(value) => {
										setData(
											data.map((el, i) => {
												if (i === index) {
													el.prix_par_unite = value;
												}
												return el;
											})
										);
									}}
								/>
							</td>

							<td>
								<InputNumber
									setDataChanged={setDataChanged}
									value={parseInt(element?.barCode)}
									onChange={(value) => {
										setData(
											data.map((el, i) => {
												if (i == index) {
													el.barCode = value;
												}
												return el;
											})
										);
									}}
								/>
							</td>

							<td>
								<InputNumber
									setDataChanged={setDataChanged}
									value={element.qte_reste}
									onChange={(value) => {
										setData(
											data.map((el, i) => {
												if (i === index) {
													// console.log("this " + value)
													el.qte_reste = value;
												}
												return el;
											})
										);
									}}
								/>
							</td>
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
					<th>Article</th>
					<th>Qte</th>
					<th>Prix par unite</th>
					<th>BarCode</th>
					<th>Qte Reste</th>
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
	// console.log("this "+query);

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
// function InputText({ value, onChange, setDataChanged }) {
// 	const [query, setQuery] = useState(value);

// 	useEffect(() => {
// 		if (query !== value) {
// 			setDataChanged(true);
// 			const timeOutId = setTimeout(() => onChange(query), 300);
// 			return () => clearTimeout(timeOutId);
// 		}
// 	}, [query]);
// 	// console.log("this "+query);
// 	// {console.log("hana "+setDataChanged.barCode)}

// 	return (
// 		<Input
// 			styles={{
// 				root: {
// 					border: 0,
// 				},
// 				input: {
// 					textAlign: 'center',
// 					border: 'none',
// 					fontSize: '14px',
// 				},
// 			}}
// 			w='80%'
// 			outline='0'
// 			hideControls
// 			value={query}
// 			onChange={setQuery}
// 			focusBorderColor='#fff'
// 		/>
// 	);
// }
export default Table_stock;
