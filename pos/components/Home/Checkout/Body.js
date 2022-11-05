import { VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

//components
import OrderCard from "./OrderCard";

const Body = ({ setQte, Orders, cancelOrder, decrementQte, incrementQte, isMobile }) => {
	const refCheckoutBody = useRef(null);

	const scrollToBottom = () => {
		refCheckoutBody.current.scrollTo({
			top: refCheckoutBody.current.scrollHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		scrollToBottom();
	}, [Orders]);

	return (
		<VStack ref={refCheckoutBody} w='full' h={typeof isMobile != undefined && isMobile ? 'full' : 'calc(100% - 56px - 140px)'} spacing={0} overflowY='auto'>
			{Orders.map((order, index) => {
				return (
					<OrderCard
						setQte={setQte}
						decrementQte={decrementQte}
						incrementQte={incrementQte}
						cancelOrder={cancelOrder}
						key={index + new Date()}
						order={order}
					/>
				);
			})}
		</VStack>
	);
};

export default Body;
