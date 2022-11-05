import { Text, Stack, Image, useBoolean, Box } from '@chakra-ui/react';
import { GridItem } from '@chakra-ui/react';
import longPress from '@rachidoudouch/longpress';
import { useEffect, useRef } from 'react';
import { backEndUrl } from '../../../Controller/urls';

// Components
import ProductInfo from '../../Modal/productInfo';
import { Badge } from '@chakra-ui/react'

const Card = ({ product, createOrder, isMax }) => {

	const refCard = useRef(null);
    const [showinfo, setShowInfo] = useBoolean();

	useEffect(()=> {
		longPress(refCard.current, 300, setShowInfo.on);
	}, []);

    return (
        <GridItem
            id='OrdersMenu'
            rounded='2xl'
            border='2px solid #eee'
            spacing={0}
            cursor='pointer'
            _hover={{ border: '2px solid #F48342' }}
            overflow='hidden'
            onClick={() => {
                createOrder(product);
            }}
			ref={refCard}
        >
            <ProductInfo isOpen={showinfo}
                onClose={setShowInfo.off} name={product?.attributes.name}
                image={(product?.attributes.image != undefined)? `${backEndUrl}${product.attributes.image.data.attributes.url}` : '/Images/food_default.png'}
                description={product.attributes.description}
            />
            
            <Stack w={{ base: '100%' }} spacing={0}>
                <Stack id='image' w='full' spacing={0} p={0}>
                    
                    <Box h='150px' w='full' bgColor='red'
                        bg={
                            'url(' +
                                ((product?.attributes?.image?.data.attributes.url != undefined) ? (
                                    `${backEndUrl}${product.attributes.image.data.attributes.url}`
                                ) : (
                                    '/Images/food_default.png' 
                                ))
                            + ')'
                        }
                        rounded='md'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        backgroundSize='cover'
                        cursor='pointer'
                    >
                        {
                            isMax == true ? (
                                <Badge colorScheme='red' position='relative' rounded='full' variant='solid' p={2} top={2} left={2} >Max</Badge>
                            ) : (
                                <></>
                            )
                        }
                    </Box>

                </Stack>
                <Stack id='name' w='100%' minH='40px' justifyContent='center' alignItems='center' bg='orange.500' textAlign='center'>
                    <Text fontSize={{ base: '10px', md: '13px' }} fontWeight='bold' color='#eee'>
                        {product?.attributes.name?.length > 20 ? product?.attributes.name.substring(0, 20) + '...' : product?.attributes.name}
                    </Text>
                </Stack>
            </Stack>
        </GridItem>
    );
};

export default Card;
