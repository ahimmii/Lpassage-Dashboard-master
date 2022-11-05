import { Button, Heading, HStack, Image, Spacer, Stack, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { logout } from "../../Controller/apis";

export default function Header() {

	const toast = useToast();
    const router = useRouter();
    const [Loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        logout().then(res => {
            toast({
                title: res.message,
                status: "success",
                isClosable: true,
            });
            router.push('/')
        }).catch(res => {
            toast({
                title: res.message,
                status: "error",
                isClosable: true,
            });
            setLoading(false);
        })
    }

	return (
		<Stack justifyContent='center' h='100px'>
			<HStack bg='#F48342' h='50px' px={{ base: 4, md: 8 }} borderRadius='16px'>
				<Image borderRadius='100%' w={{base: '50px', md: '70px'}} src='/Images/Logo.png' alt='logo' />
				<Heading as='h1' color='#FAFAFA' fontSize={{base: '17px', md: '20px'}}>
					{"L'PasSage"}
				</Heading>
				<Spacer />
				<Button
                    onClick={handleClick}
					size={{base: 'xs', md: 'sm'}}
					rounded='full'
					colorScheme='orange'
					color='whiteAlpha.900'
                    transition='ease-in-out 0.1s'
					_hover={{ color: "white", background: "orange.800" }}
					variant='ghost'
                    _active={{ color: "white", background: "orange.400" }}
                    isLoading={Loading}
				>
					Se déconnecter
				</Button>
			</HStack>
		</Stack>
	);
}
