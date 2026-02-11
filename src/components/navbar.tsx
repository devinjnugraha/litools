"use client";

import { usePathname } from "next/navigation";
import NavbarHome from "./navbar-home";
import NavbarPage from "./navbar-page";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return isHome ? <NavbarHome /> : <NavbarPage key={pathname} />;
}
