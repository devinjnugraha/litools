"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function NavbarPage() {
    const router = useRouter();

    function handleBack() {
        return router.back();
    }

    return (
        <nav className="sticky top-0 py-2 px-3 md:px-4 z-10 bg-accent">
            <div className="flex gap-2 items-center justify-center h-14 relative">
                <Button variant={"ghost"} size={"icon-sm"} onClick={handleBack} className="absolute left-0">
                    <ChevronLeftIcon className="size-8 text-primary" />
                </Button>
                <Link href="/" aria-label="Go to home">
                    <div className="font-semibold text-xl text-primary">litools</div>
                </Link>
                <div className="absolute right-0">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
