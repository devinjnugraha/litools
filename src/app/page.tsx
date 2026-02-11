import Hero from "@/components/hero";
import { PencilRulerIcon } from "lucide-react";
import Tools from "./tools";
import NavbarHome from "@/components/navbar-home";

export default function Home() {
    return (
        <div className="px-3 md:px-4">
            <NavbarHome />
            <Hero
                icon={PencilRulerIcon}
                title="Your All-in-One Online Toolbox"
                subtitle={
                    <>
                        Smart tools for everyday tasks—<b className="font-semibold">anytime, anywhere</b>
                    </>
                }
            />
            <Tools />
        </div>
    );
}
