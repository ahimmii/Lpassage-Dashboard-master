import { HStack, Heading, Image, Button, Spacer } from '@chakra-ui/react';
import DrawerCheckout from '../DrawerCheckout/Drawer';
import { useBoolean } from '@chakra-ui/react';
import { useRef } from 'react';

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

// Components
import { LinkHeaderInMenu } from './Link';

const Header = ({ HeaderLinks }) => {
    const refHeader = useRef(null);

    return (
        <HStack className='removeBarScroll' id='header' w='full' h='60px' border='2px solid #eee' rounded='xl' px={5} ref={refHeader}>
            <Heading fontSize='20px' color='black.500' as='h1'>
                {"L'PasSage"}
            </Heading>
            <Spacer />
            <Menu
                placement='bottom-start'
                isLazy={true}
            >
                <MenuButton
                    _expanded={{ bg: 'orange.500', color: 'white' }}
                    size='md'
                    as={Button}
                    rightIcon={<Image src='/Images/icons/HeaderIcons/arrowDown.svg' w={4} />}
                >
                    Prodects
                </MenuButton>
                <MenuList>
                    {
                        HeaderLinks?.map((link, index) => {
                            if (link != undefined)
                                return (
                                    <MenuItem _hover={{background: "orange.500"}} key={(index + link.attributes.name)} p={0} >
                                        <LinkHeaderInMenu
                                            name={link.attributes.name != undefined ? link.attributes.name : null}
                                            link={`#${link.attributes.name.replace(/\s+/g, '').toLowerCase()}`}
                                        />
                                    </MenuItem>
                                );
                        })
                    }
                </MenuList>
            </Menu>
        </HStack>
    );
};

const HeaderMobile = ({ onOpen, Orders, setOrders, confirmOrders, setQte, decrementQte, incrementQte }) => {
    const [CheckoutModal, setCheckoutModal] = useBoolean();

    return (
        <>
            <HStack id='header' w='full' h='60px' borderBottom='2px solid #eee' px={2}>
                <Button px={3} bg='none' onClick={onOpen} variant='solid'>
                    <Image src='/Images/icons/menu.svg' w='25px' h='25px' />
                </Button>
                <Heading fontSize='20px' color='black.500' as='h1'>
                    {"L'PasSage"}
                </Heading>
                <Spacer />
                <Button colorScheme='whiteAlpha' onClick={setCheckoutModal.on} variant='solid'>
                    <Image src={Orders?.length > 0? '/Images/icons/checkoutFull.svg' : '/Images/icons/checkout.svg'} w='30px' h='30px' />
                </Button>
            </HStack>
            <DrawerCheckout
                isOpen={CheckoutModal}
                setOrders={setOrders}
                confirmOrders={confirmOrders}
                Orders={Orders}
                onClose={setCheckoutModal.off}
                setQte={setQte} decrementQte={decrementQte} incrementQte={incrementQte}
            />
        </>
    );
};

export { Header, HeaderMobile };
