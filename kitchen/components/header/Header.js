import { HStack, Image, Heading, Spacer, Button, border } from "@chakra-ui/react";
//import ipc from 'electron';
//import { ImExit } from "react-icons/im";

//"-webkit-app-region"

const Header = () => {
    return (
        <HStack id='Header' boxShadow='base' p={3} w='full' style={{
            WebkitAppRegion: "drag",
            WebkitUserSelect: "none"
        }} position='fixed' bg='white' zIndex={999} h="65px">
            <Image src='/logo.png' w={{ base: '30px', md: '40px' }} rounded='full' />
            <Heading color='black.500' fontSize={{ base: 17, md: 20 }}>
                {"L'PasSage"}
            </Heading>
            <Spacer />
            {/*<Button variant="none" _hover={{background: "#F48342", color: "white"}} onClick={() => {
                ipc.ipcRenderer.send('closeApp')
            }} >
                <ImExit />
            </Button>*/}
            <Button onClick={
                () => {
                    localStorage.removeItem('lapassage_token_kitchen')
                    window.location.reload()
                }
            }>
                {"Se déconnecter"}
            </Button>
        </HStack>
    );
};

export default Header;