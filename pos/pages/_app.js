import { useEffect, useState } from 'react';
import theme from '../components/themes/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { io } from 'socket.io-client';
import { backEndUrl } from '../Controller/urls';

// css
import "../styles/fonts.css";
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
    
    const [socket, setSocket] = useState(null);
	const [connect, setConnect] = useState(false);
	// sockets
	useEffect(() => {
		if (Component.name == "Home" || Component.name == "History")
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
				setSocket(io(backEndUrl, { auth: {token: `${(typeof window !== 'undefined') ? localStorage.getItem('lpasSage_token') : ""}`}}))
	}, [socket]);

    return (
        <ChakraProvider theme={theme}>
            <Component socket={socket} connect={connect} {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
