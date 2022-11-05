import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../components/themes/theme";
import { io } from "socket.io-client";
import { backEndUrl } from "../controller/urls.token";
import { useEffect, useState } from "react";

import '../styles/globals.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {

	const [socket, setSocket] = useState(null);
	const [connect, setConnect] = useState(false);
	// sockets
	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("connected");
				setConnect(true);
					
				socket.on("disconnect", () => {
					console.log("disconnected");
					setConnect(false);
				});
			});
			return () => {socket.disconnect(); setSocket(undefined)};
		} else
        setSocket(io(backEndUrl, { auth: {token: `${(typeof window !== 'undefined') ? localStorage.getItem('lapassage_token_kitchen') : ""}`}}))
	}, [socket]);


	return (
		<ChakraProvider theme={theme}>
			<Component socket={socket} connect={connect} {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
