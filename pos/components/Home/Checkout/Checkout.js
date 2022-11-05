import { VStack, Divider } from "@chakra-ui/react";

//Components
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const checkout = ({ setQte, Orders, setOrders, confirmOrders, Confirm, cancelOrder, decrementQte, incrementQte }) => {

	return (
		<VStack
			id='checkout'
			display={{ base: "none", md: "block" }}
			w='350px'
			rounded='xl'
			h='100%'
			border='2px solid #eee'
			p={3}
		>
			<Header NumberOfOrders={Orders.length} />
			<Divider />
			<Body setQte={setQte} cancelOrder={cancelOrder} Orders={Orders} decrementQte={decrementQte} incrementQte={incrementQte}/>
			<Divider />
			<Footer Confirm={Confirm} Orders={Orders} setOrders={setOrders} confirmOrders={confirmOrders} />
		</VStack>
	);
};

export default checkout;
