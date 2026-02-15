'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function NavbarHome() {
	return (
		<nav className="sticky top-0 py-2 px-3 md:px-4 z-10 bg-background">
			<div className="flex gap-2 items-center justify-between h-14">
				<Link href="/" aria-label="Go to home">
					<div className="font-semibold text-xl text-primary">litools</div>
				</Link>
                <ThemeToggle />
			</div>
		</nav>
	);
}
