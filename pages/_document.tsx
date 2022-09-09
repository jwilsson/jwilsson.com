import Document, {
    Head,
    Html,
    Main,
    NextScript,
    type DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
    static override async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;
        const sheet = new ServerStyleSheet();

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    override render() {
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
