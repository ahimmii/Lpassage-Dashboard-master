import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Divider, DrawerHeader, DrawerFooter } from "@chakra-ui/react";

//Components
import Header from "../Checkout/Header";
import Footer from "../Checkout/Footer";
import Body from "../Checkout/Body";

const DrawerCheckout = ({ isOpen, onClose, Orders, setOrders, confirmOrders, setQte, decrementQte, incrementQte }) => {
    return (
        <Drawer placement='right' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <Header NumberOfOrders={Orders.length} onClose={onClose} mobile={true} />
                </DrawerHeader>
                <Divider />
                <DrawerBody px={1}>
                    <Body Orders={Orders} setQte={setQte} decrementQte={decrementQte} incrementQte={incrementQte} isMobile={true}/>
                </DrawerBody>
                <Divider />
                <DrawerFooter>
                    <Footer Orders={Orders} setOrders={setOrders} confirmOrders={confirmOrders} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerCheckout;
