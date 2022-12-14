import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    public override render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="I'm Jonathan, a front-end developer from Gothenburg" />

                    <link
                        rel="preload"
                        href="/fonts/source-sans-pro-v13-light.woff2"
                        as="font"
                        crossOrigin="anonymous"
                    />

                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                </Head>

                <body className="antialiased bg-primary min-h-full relative">
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
