import "../styles/globals.css";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: {
        template: "litools | %s",
        default: "litools",
    },
    description: "Your All-in-One Online Toolbox",
    icons: {
        icon: [
            { url: "/litools/favicon.ico" },
            { url: "/litools/favicon.svg", type: "image/svg+xml" },
        ],
        apple: "/litools/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-background!">
                <div className="max-w-3xl mx-auto container">{children}</div>
            </body>
        </html>
    );
}
