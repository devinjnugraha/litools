import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

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
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased bg-background!">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="max-w-3xl mx-auto container">{children}</div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
