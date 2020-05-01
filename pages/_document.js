import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="I'm Jonathan, a front-end developer from Gothenburg" />

                    <link rel="preload" href="/fonts/patua-one-v10-regular.woff2" as="font" crossOrigin="anonymous" />
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
