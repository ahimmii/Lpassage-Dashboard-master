import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Stack, Text } from '@chakra-ui/react';

import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

function TableInfo({ data, stock }) {

        // console.log(data.data.Ingredient)

        // const total_cout = () => {
        //         let total_cout = 0;
        //         matierePremiere?.map((e, i) => {
        //                 if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
        //                         total_cout += Number(e[Object.keys(e)[0]]?.le_cout);
        //         });
        //         return String(total_cout.toFixed(2) + ' DH');
        // };

        // const QTE_restante_en_Dhs = () => {
        //         let total_cout = 0;
        //         matierePremiere?.map((e, i) => {
        //                 if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
        //                         total_cout += Number(e[Object.keys(e)[0]]?.qte_restante_en_dhs);
        //         });
        //         return String(total_cout.toFixed(2) + ' DH');
        // };

        // const ratio_matiere = () => {
        //         let total_cout = 0;
        //         matierePremiere?.map((e, i) => {
        //                 if (e[Object.keys(e)[0]]?.nature == nature || nature == "ALL")
        //                         total_cout += Number(e[Object.keys(e)[0]]?.le_cout);
        //         });
        //         return String((total_cout / total_orders).toFixed(2)) + ' %';
        // };

        return (
                <TableContainer border='1px #eee solid' rounded='md'>
                        {/* <StatGroup p={5}>
                                <Stat>
                                        <StatLabel>Total</StatLabel>
                                        <StatNumber>{revenue.toFixed(2)} DH</StatNumber>
                                </Stat>
                                <Stat>
                                        <StatLabel>Le total des commandes:</StatLabel>
                                        <StatNumber>{total_orders}</StatNumber>
                                </Stat>
                                <Stat>
                                        <StatLabel>Total des plats:</StatLabel>
                                        <StatNumber>{total_plats}</StatNumber>
                                </Stat>
                        </StatGroup> */}

                        <Table variant='simple' size='md'>
                                <Thead bg='#F48342' height={'50px'}>
                                        <Tr>
                                                <Th color='white' fontSize='14px'>
                                                        ingredients
                                                </Th>
                                                <Th color='white' fontSize='14px' isNumeric>
                                                        Prix par unite
                                                </Th>
                                                <Th color='white' fontSize='14px' isNumeric>
                                                        Qte Entrer
                                                </Th>
                                                <Th color='white' fontSize='14px' isNumeric>
                                                        Qte Sortir
                                                </Th>
                                                <Th color='white' fontSize='14px' isNumeric>
                                                        Qte restante
                                                </Th>
                                        </Tr>
                                </Thead>
                                <Tbody>
                                        {data?.data?.map((el, index) => {
                                                const list = el.Ingredient.map((e, i) => {
                                                        if (e.name == stock || stock == "ALL")
                                                                return (      
                                                                        <Tr key={i}>
                                                                                <Td fontSize='14px'>{e.name}
                                                                                <Text color='gray.400' fontSize='12px'>
                                                                                        {e.barCodes || '0'}
                                                                                </Text>
                                                                                </Td>
                                                                                <Td fontSize='14px' isNumeric>
                                                                                        {e.prix_par_unit || '0'}
                                                                                </Td>
                                                                                <Td fontSize='14px' isNumeric>
                                                                                        {e.Quantites || '0'}
                                                                                </Td>
                                                                                <Td fontSize='14px' isNumeric>
                                                                                        {e.qte_restes || '0'}
                                                                                </Td>
                                                                                <Td fontSize='14px' isNumeric>
                                                                                        {e.Quantites - e.qte_restes || '0'}
                                                                                </Td>
                                                                        </Tr>
                                                                );
                                                })
                                                return(list)
                                        })}
                                </Tbody>
                                <Tfoot>
                                        {/* <Tr height={'60px'} bg='orange.100'>
                                                <Th fontSize='14px'>Total: </Th>
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
                                        </Tr> */}
                                </Tfoot>
                        </Table>
                </TableContainer>
        );
}

export default TableInfo;
