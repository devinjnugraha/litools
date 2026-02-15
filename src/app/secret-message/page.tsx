import Hero from "@/components/hero";
import { Suspense } from "react";
import { LockIcon } from "lucide-react";
import { Metadata } from "next";
import NavbarPage from "@/components/navbar-page";
import SecretMessageClientPage from "./page-client";

export const metadata: Metadata = {
    title: "Secret Message",
    description: "Encrypt and decrypt secret messages using a private key",
};

export default function SecretMessagePage() {
    return (
        <>
            <NavbarPage />
            <div className="relative px-3 md:px-4 pb-16">
                <div className="absolute inset-x-0 top-0 h-[40svh] rounded-b-3xl bg-accent -z-10" />

                <Hero
                    icon={LockIcon}
                    title="Secret Message"
                    subtitle="Encrypt and decrypt secret messages safely"
                />

                <Suspense>
                    <SecretMessageClientPage />
                </Suspense>
            </div>
        </>
    );
}
