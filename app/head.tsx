import { FC } from 'react';

const Head: FC = () => (
    <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="I'm Jonathan, a front-end developer from Gothenburg" />

        <title>Jonathan Wilsson - Front-end developer</title>

        <link rel="preload" href="/fonts/source-sans-pro-v13-light.woff2" as="font" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
);

export default Head;
