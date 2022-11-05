import { Image, Stack, HStack, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const LinkHeader = ({ name, link, icon }) => {
    return (
        <Stack h='full' w='fit-content' minW='80px' spacing={-1} alignItems='center'>
            <Link href={link}>
                <HStack cursor='pointer' h='full' w='fit-content'>
                    <Heading fontSize='sm' color='black.500'>
                        {name}
                    </Heading>
                </HStack>
            </Link>
            <HStack display={false ? 'block' : 'none'} h='5px' w='70%' borderTopRadius='md' bg='orange.500'></HStack>
        </Stack>
    );
};

const LinkHeaderInMenu = ({ name, link }) => {
    return (
        <Link href={link}>
            <Stack  h='full' w='full' minW='80px' spacing={-1} alignItems='center' p={5} minH={"50px"}>
                    <HStack cursor='pointer' h='full' w='100%'>
                        <Heading fontSize='xs' color='black.500'>
                            {name}
                        </Heading>
                    </HStack>
                <HStack display={false ? 'block' : 'none'} h='5px' w='70%' borderTopRadius='md' bg='orange.500'></HStack>
            </Stack>
        </Link>
    );
};

export { LinkHeader, LinkHeaderInMenu };
