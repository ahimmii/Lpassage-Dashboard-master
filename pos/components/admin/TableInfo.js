import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

function TableInfo({ tableList, ordersPrix, nature, numOrders, matierePremiere, total_orders, revenue }) {
	//const [total, setTotal] = useState([{
	//	QteTH: 0,
	//	CoutTH: 0,
	//	QteFinalTH: 0,
	//	CoutFinalTH: 0,
	//	Th: 0
	//}]);

	//useEffect(() => {
	//	let total = {
	//		QteTH: 0,
	//		CoutTH: 0,
	//		QteFinalTH: 0,
	//		CoutFinalTH: 0,
	//		thPerce: 0
	//	};
	//	tableList.forEach((item) => {
	//		total.QteTH += item.Quantites;
	//		total.CoutTH += item.Prix;
	//		total.QteFinalTH += (Number(item.StockQuantite) - Number(item.Quantites));
	//		total.CoutFinalTH += (Number(item.StockQuantitePrix) - Number(item.Prix));
	//		total.thPerce += ((Number(item.Prix) / Number(ordersPrix)) * 100);
	//	});
	//	setTotal(total);
	//}, [tableList, ordersPrix]);

	const total_cout = () => {
		let total_cout = 0;
		matierePremiere.map((e, i) => {
			if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
				total_cout += Number(e[Object.keys(e)[0]]?.le_cout);
		});
		return String(total_cout.toFixed(2) + ' DH');
	};

	const QTE_restante_en_Dhs = () => {
		let total_cout = 0;
		matierePremiere.map((e, i) => {
			if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
				total_cout += Number(e[Object.keys(e)[0]]?.qte_restante_en_dhs);
		});
		return String(total_cout.toFixed(2) + ' DH');
	};

	const ratio_matiere = () => {
		let total_cout = 0;
		matierePremiere.map((e, i) => {
			if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
				total_cout += Number(e[Object.keys(e)[0]]?.le_cout);
		});
		return String((total_cout / total_orders).toFixed(2)) + ' %';
	};

	return (
		<TableContainer border='1px #eee solid' rounded='md'>
			<StatGroup p={5}>
				<Stat>
					<StatLabel>Total</StatLabel>
					<StatNumber>{revenue.toFixed(2)} DH</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Le total des commandes:</StatLabel>
					<StatNumber>{total_orders}</StatNumber>
				</Stat>
			</StatGroup>

			<Table variant='simple' size='md'>
				<Thead bg='#F48342' height={'50px'}>
					<Tr>
						<Th color='white' fontSize='14px'>
							ingredients
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							QTE consommée
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							Le coût
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							Qte restante
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							QTE restante en Dhs
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							Ratio matière:<br></br> le cout/CA
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{matierePremiere.map((e, i) => {
						//console.log(e[Object.keys(e)[0]]?.qte_consommee)

						if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
						return (
							<Tr key={i}>
								<Td fontSize='14px'>{Object.keys(e)[0]}</Td>
								<Td fontSize='14px' isNumeric>
									{String(e[Object.keys(e)[0]]?.qte_consommee) + e[Object.keys(e)[0]]?.unite}
								</Td>
								<Td fontSize='14px' isNumeric>
									{String(Number(e[Object.keys(e)[0]]?.le_cout).toFixed(2)) + ' DH'}
								</Td>
								<Td fontSize='14px' isNumeric>
									{(e[Object.keys(e)[0]]?.qte_restante).toFixed(2) + e[Object.keys(e)[0]]?.unite}
								</Td>
								<Td fontSize='14px' isNumeric>
									{String((e[Object.keys(e)[0]]?.qte_restante_en_dhs).toFixed(2)) + ' DH'}
								</Td>
								<Td fontSize='14px' isNumeric>
									{
										//((Number(e[Object.keys(e)[0]]?.qte_consommee)) && Number(e[Object.keys(e)[0]].stock.qte)) ? (
										//	((Number(e[Object.keys(e)[0]]?.qte_consommee)) / Number(e[Object.keys(e)[0]].stock.qte) * 100)
										//) : (
										//	"0"
										//)

										((Number(e[Object.keys(e)[0]]?.le_cout).toFixed(2)) && revenue.toFixed(2)) ? (
											(Number(e[Object.keys(e)[0]]?.le_cout) / revenue * 100).toFixed(2)
										) : (
											"0"
										)

									} %
								</Td>
							</Tr>
						);
					})}
				</Tbody>
				<Tfoot>
					<Tr height={'60px'} bg='orange.100'>
						<Th fontSize='14px'>Total: </Th>
						<Th fontSize='14px' isNumeric>
							{/*{total?.QteTH?.toFixed(2)}*/}
						</Th>
						<Th fontSize='14px' isNumeric>
							{total_cout()}
						</Th>
						<Th fontSize='14px' isNumeric></Th>
						<Th fontSize='14px' isNumeric>
							{QTE_restante_en_Dhs()}
						</Th>
						<Th fontSize='14px' isNumeric>
							{ratio_matiere()}
						</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
}

export default TableInfo;
