import Document, {
    Head,
    Html,
    Main,
    NextScript,
    type DocumentContext,
    type DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
    public static override async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;
        const sheet = new ServerStyleSheet();

        try {
            ctx.renderPage = (): ReturnType<typeof originalRenderPage> =>
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

    public override render(): JSX.Element {
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
