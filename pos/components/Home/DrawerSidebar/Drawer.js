import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";

//Components
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

const DrawerSidebar = ({ isOpen, onClose, Links, profile, HeaderLinks }) => {
    return (
        <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <Header onClose={onClose} />
                <Body Links={Links} onClose={onClose} HeaderLinks={HeaderLinks} />
                <Footer profile={profile}/>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerSidebar;
