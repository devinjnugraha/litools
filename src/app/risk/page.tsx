import Hero from "@/components/hero";
import { CircleGaugeIcon } from "lucide-react";
import { Metadata } from "next";
import NavbarPage from "@/components/navbar-page";
import RiskClientPage from "./page-client";

export const metadata: Metadata = {
    title: "Position Risk Calculator",
    description: "Calculate your optimal position size based on your risk tolerance",
};

export default function RiskPage() {
    return (
        <>
            <NavbarPage />
            <div className="relative px-3 md:px-4 pb-16">
                <div className="absolute inset-x-0 top-0 h-[40svh] rounded-b-3xl bg-accent -z-10" />

                <Hero
                    icon={CircleGaugeIcon}
                    title="Position Risk Calculator"
                    subtitle="Calculate your optimal position size based on your risk tolerance"
                />

                <RiskClientPage />
            </div>
        </>
    );
}
