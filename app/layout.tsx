import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
    description: "I'm Jonathan, a front-end developer from Gothenburg",
    title: 'Jonathan Wilsson - Front-end developer',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en" className="antialiased bg-primary min-h-full relative">
        <body className="h-screen absolute inset-0 z-1 animate-fade-in">{children}</body>
    </html>
);

export default RootLayout;
