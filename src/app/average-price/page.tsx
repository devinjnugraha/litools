import Hero from "@/components/hero";
import NavbarPage from "@/components/navbar-page";
import { ScaleIcon } from "lucide-react";
import { Metadata } from "next";
import AveragePriceClientPage from "./page-client";

export const metadata: Metadata = {
    title: "Average Price Calculator",
    description: "Easily calculate the new average price of your shares after a purchase",
};

export default function AveragePricePage() {
    return (
        <>
            <NavbarPage />
            <div className="relative px-3 md:px-4 pb-16">
                <div className="absolute inset-x-0 top-0 h-[40svh] rounded-b-3xl bg-accent -z-10" />

                <Hero
                    icon={ScaleIcon}
                    title="Average Price Calculator"
                    subtitle="Easily calculate the new average price of your shares after a purchase"
                />

                <AveragePriceClientPage />
            </div>
        </>
    );
}
