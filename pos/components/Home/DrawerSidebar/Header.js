import { DrawerHeader, Button, Image, Heading, HStack, Spacer } from "@chakra-ui/react";

const Header = ({ onClose }) => {
    return (
        <DrawerHeader>
            <HStack>
                <Image alt='logo' src='/Images/Logo.png' w='50px' />
                <Heading fontSize='20px' color='black.500' as='h1'>
                    {"L'PasSage"}
                </Heading>
                <Spacer />
                <Button
                    colorScheme='orange'
                    onClick={onClose}
                    variant='ghost'
                    rounded='xl'
                    p='11px'
                    w='40px'
                    h='40px'
                >
                    <Image alt='unexpand' w='15px' src='/Images/icons/Unexpand.svg' />
                </Button>
            </HStack>
        </DrawerHeader>
    );
};

export default Header;
