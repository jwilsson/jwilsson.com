import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            const enhanceApp = (App) => (props) => {
                return (
                    <StyleSheetManager
                        disableVendorPrefixes
                        sheet={sheet.instance}
                    >
                        <App {...props} />
                    </StyleSheetManager>
                );
            };

            ctx.renderPage = () => {
                return originalRenderPage({
                    enhanceApp,
                });
            };

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const { styleTags } = this.props;

        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="I'm Jonathan, a front-end developer from Gothenburg"
                    />

                    <link
                        rel="preload"
                        href="/fonts/source-sans-pro-v13-light.woff2"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                    {styleTags}
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
