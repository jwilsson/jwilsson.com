import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />

            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Jonathan Wilsson - Front-end developer</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
