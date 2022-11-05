import { Link, Stack, Button, Image, Text } from "@chakra-ui/react";
import LinkNext from "next/link";

const LargButton = ({ info, active, onClose }) => {
    return (
        <Stack key={info.name} w='full' p={2}>
            <LinkNext href={info.href}>
                <Link
                    onClick={onClose}
                    bg={active ? "orange.200" : ""}
                    rounded='xl'
                    p='11px'
                    h='50px'
                    _hover={{ bg: "#FFE0D3" }}
                    _active={{ bg: "orange.100" }}
                    variant='ghost'
                    colorScheme='orange'
                    alignItems='center'
                    pl={5}
                    display='flex'
                >
                    <Image alt='icon' src={info.icon} mr={3} p={0} />
                    <Text fontSize={12} fontWeight={200} color='black.500'>
                        {info.name}
                    </Text>
                </Link>
            </LinkNext>
        </Stack>
    );
};

const SmallButton = ({ info, active }) => {
    return (
        <LinkNext href={info.href}>
            <Link
                bg={active ? "orange.200" : ""}
                rounded='xl'
                p='10px'
                variant='ghost'
                colorScheme='orange'
                _hover={{ bg: "#FFE0D3" }}
                _active={{ bg: "orange.100" }}
                justifyContent='center'
                alignItems='center'
            >
                <Image w='17px' alt='icon' src={info.icon} />
            </Link>
        </LinkNext>
    );
};

export { LargButton, SmallButton };
