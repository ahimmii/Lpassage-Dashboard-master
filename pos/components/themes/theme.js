import { extendTheme } from '@chakra-ui/react';

const themeChakra = extendTheme({
	fonts: {
		heading: 'Poppins-Bold, sans-serif',
		body: 'Poppins-Regular, sans-serif',
	},
	colors: {
		orange: {
			500: '#F48342',
			200: '#FFEAE1',
		},
		black: {
			500: '#3D3D56',
		},
	},
});

export default themeChakra;
