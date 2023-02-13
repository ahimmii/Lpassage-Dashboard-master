import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Stack, Text } from '@chakra-ui/react';

import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

import { useState } from 'react';


function TableInfo({ fournisseur, data }) {
        
        let T = 0

        return (
                <TableContainer border='1px #eee solid' rounded='md'>
                        {data?.data?.map((el) => {
                                el.fournisseur.map((e) => {
                                        T += e.Montant
                                })
                        })}
                        <StatGroup p={5}>
                                <Stat>
                                        <StatLabel>Total</StatLabel>
                                        <StatNumber>{T} DH</StatNumber>
                                </Stat>
                                {/* <Stat>
                                        <StatLabel>Le total des commandes:</StatLabel>
                                        <StatNumber>{total_orders}</StatNumber>
                                </Stat>
                                <Stat>
                                        <StatLabel>Total des plats:</StatLabel>
                                        <StatNumber>{total_plats}</StatNumber>
                                </Stat> */}
                        </StatGroup>

                        <Table variant='simple' size='md'>
                                <Thead bg='#F48342' height={'50px'}>
                                        <Tr>
                                                <Th color='white' fontSize='14px'>
                                                        Fournisseur
                                                </Th>
                                                <Th color='white' fontSize='14px' isNumeric>
                                                        Montant
                                                </Th>
                                                {/* <Th color='white' fontSize='14px' isNumeric>
                                                        Somme
                                                </Th> */}
                                        </Tr>
                                </Thead>
                                <Tbody>
                                        {data?.data?.map((el, index) => {
                                                const list = el.fournisseur.map((e, i) => {
                                                        if (e.Name == fournisseur || fournisseur == "ALL")
                                                                return (
                                                                        <Tr key={i}>
                                                                                <Td fontSize='14px'>{e.value}
                                                                                <Text fontSize='18px'>
                                                                                        {e.Name || 'N/A'}
                                                                                </Text>
                                                                                </Td>
                                                                                <Td fontSize='14px' isNumeric>
                                                                                        {e.Montant}
                                                                                </Td>
                                                                                {/* <Td fontSize='14px' isNumeric>
                                                                                        {e.Total}
                                                                                </Td> */}
                                                                        </Tr>
                                                                );
                                                        })
                                                        return(list)
                                                        
                                        })}
                                </Tbody>
                                {/* <Tfoot>
                                        <Tr height={'60px'} bg='orange.100'>
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
                                        </Tr>
                                </Tfoot> */}
                        </Table>
                </TableContainer>
        );
}

export default TableInfo;
