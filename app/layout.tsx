import type { FC, PropsWithChildren } from 'react';
import './globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en" className="antialiased bg-primary min-h-full relative">
        <body className="h-screen absolute inset-0 z-1 animate-fade-in">{children}</body>
    </html>
);

export default RootLayout;
