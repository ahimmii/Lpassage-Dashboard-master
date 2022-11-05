import { Button, DrawerFooter, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useRouter } from "next/router";
import { logout } from "../../../Controller/apis";

const Footer = ({ profile }) => {
    const router = useRouter();
    const toast = useToast();
    return (
        <DrawerFooter>
            <Stack direction='row' alignItems='center' w={'full'} p={2}>
                <Image src={profile.img} w={'40px'} h={'40px'} rounded={'xl'} alt='avatar' />
                <Stack direction='column' spacing={0}>
                    <Text fontWeight={800} fontSize={'sm'} color='black.500'>{profile.name}</Text>
                    <Text fontSize={'xs'} color='black.500'>@{profile.Username}</Text>
                </Stack>
                <Spacer />
                <Button size='xs' variant='solid' colorScheme='red' onClick={()=> {
                    logout().then(res => {
                        toast({
                            title: res.message,
                            status: 'success',
                            duration: 8000,
                            isClosable: true,
                        })
                        router.push('/');
                    }).catch(res => {
                        toast({
                            title: res.message,
                            status: 'error',
                            duration: 8000,
                            isClosable: true,
                        })
                    })
                }}>Logout</Button>
            </Stack>
        </DrawerFooter>
    );
};

export default Footer;
