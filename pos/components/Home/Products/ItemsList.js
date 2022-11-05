import { Text, HStack, Heading, Divider, Box, GridItem } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import Card from './Card';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const ItemsList = ({ type, products, createOrder }) => {

    //filter products by size (normal or max)
    let normalProducts = products?.filter((product) => {
        return product.attributes.size != 'max';
    });

    let maxProducts = products?.filter((product) => {
        return product.attributes.size == 'max';
    });
    // end filter
    
    return (
        <Box
            px={{ base: 0, md: '20px' }}
            py={0}
            overflowY='scroll'
            w='full'
            id={type?.attributes.name.replace(/\s+/g, '').toLowerCase()}
            className='removeBarScroll'
        >

            <Tabs py={3} colorScheme='orange' align='end'>
                <TabList>
                    <HStack spacing={0} w='full' alignItems='center' color='black.500' px={5} py={5} mt={3}>
                        <Heading size='13px'>{type?.attributes.name}</Heading>
                    </HStack>
                    {
                        maxProducts?.length != 0 ? (
                            <>
                                <Tab pb={0} fontSize={"13px"}>Normal</Tab>
                                <Tab pb={0} fontSize={"13px"}>Max</Tab>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Show_prodects products={normalProducts} createOrder={createOrder} isMax={false}/>
                    </TabPanel>
                    <TabPanel>
                        <Show_prodects products={maxProducts} createOrder={createOrder} isMax={true} />
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    );
};

function Show_prodects({products, createOrder, isMax}) {
    return (
        <Grid
            spacing={3}
            templateColumns={products?.length > 0 ? {
                base: 'repeat(2, 1fr)',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
                '2xl': 'repeat(7, 1fr)',
            } : {base: 'repeat(1, 1fr)'}}
            gap={2}
            w='full'
            h='auto'
            p={4}
        >
            {products?.length > 0 ? (
                products?.map((product, index) => {
                        return <Card key={index + new Date()} createOrder={createOrder} product={product} isMax={isMax}/>;
                })
            ) : (
                <GridItem border='1px solid #eee' borderRadius='md' p={5} textAlign='center'>
                    <Text fontSize='sm' color='gray.500'>
                        No products found
                    </Text>
                </GridItem>
            )}
        </Grid>
    )
} 

export default ItemsList;
