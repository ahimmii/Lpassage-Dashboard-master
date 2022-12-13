import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react";
import post_data from "../../Controller/postData";

function TableInfo2({ serveur, date, setTotal_plats, total_orders}) {
	// set every orders to the product

	const [data, setData] = useState([]);
	const [resposne, setResponse] = useState([]);
	const [total, setTotal] = useState(0);

	// get data from api
	useEffect(() => {
		if (date[0] && date[1]) {
			post_data("/api/gestion-des-serveurs", {
				gte: date[0].toISOString(),
				lte: date[1].toISOString(),
			}).then((res) => {
				console.log(res)
				setResponse(res.data.data);
				setTotal(res.data.total_revunue);
			}).catch((err) => {
				console.log(err);
			});
		}
	}, [date]);

	const renderData = () => {
		let total_ratio = 0;
		let total_price = 0;
		let total_orders = 0;
		let data = resposne?.map((item, index) => {
			return item.data_orders.map((item2, index2) => {
				if (item2.CAT && (serveur == item.username || serveur == "ALL")) {
					let ratio = (Number(item2.CA) / total * 100);
					total_ratio += Number(ratio);
					total_price += Number(item2.CA);
					total_orders += Number(item2.CAT);
					return (
						<Tr key={index2 + index}>
							<Td>{item2.name} ✖ <Text as="span" color='orange.500' fontWeight={900}>{item2.CAT}</Text></Td>
							<Td>{item.username}</Td>
							<Td isNumeric>{Number(item2.CA).toFixed(2)} DH</Td>
							<Td isNumeric>{ratio.toFixed(2)}%</Td>
						</Tr>
					);
				}
			});
		})
		setTotal_plats(total_orders);
		return [data, total_ratio, total_price, total_orders];
	}

	useEffect(() => {
		setData(renderData);
	}, [resposne, serveur]);

	return (
		<TableContainer border='1px #eee solid' rounded='md'>
			<StatGroup p={5}>
				<Stat>
					<StatLabel>Total</StatLabel>
					<StatNumber>{data[2]?.toFixed(2)} DH</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Le total des commandes:</StatLabel>
					<StatNumber>{total_orders}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Total des plats:</StatLabel>
					<StatNumber>{data[3]}</StatNumber>
				</Stat>
			</StatGroup>

			<Table variant='simple' size='md'>
				<Thead bg='#F48342' height={"50px"}>
					<Tr>
						<Th color='white' fontSize='14px'>
							Article
						</Th>
						<Th color='white' fontSize='14px'>
							serveur
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							CA
						</Th>
						<Th color='white' fontSize='14px' isNumeric>
							Ration
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data[0]}
				</Tbody>
				<Tfoot>
					<Tr height={"60px"} bg='orange.100'>
						<Th fontSize='14px'>Total: </Th>
						<Th fontSize='14px' isNumeric></Th>
						<Th fontSize='14px' isNumeric>{data[2]?.toFixed(2)} DH</Th>
						<Th fontSize='14px' isNumeric>{data[1]?.toFixed(2)}%</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
}

export default TableInfo2;
