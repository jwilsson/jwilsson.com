import Head from 'next/head';

import GlobalStyle from '../styles/global'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />

            <Head>
                <title>Jonathan Wilsson - Front-end developer</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
