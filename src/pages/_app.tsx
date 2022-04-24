import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Head from 'next/head';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>dashGO</title>
			</Head>
			<ChakraProvider theme={theme}>
				<SideBarDrawerProvider>
					<Component {...pageProps} />
				</SideBarDrawerProvider>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
