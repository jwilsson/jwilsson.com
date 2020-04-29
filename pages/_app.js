import Head from 'next/head';

import '../styles/site.css';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Jonathan Wilsson - Front-end developer</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
