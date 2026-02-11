'use client';

import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-12 border-t">
			<div className="container mx-auto px-3 md:px-4 py-8">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					{/* Brand and IP notice */}
					<div className="space-y-1 flex-2">
						<div className="font-semibold text-base text-primary">litools</div>
						<p className="text-sm text-muted-foreground">
							© {year} Devin Jaya Nugraha. All rights reserved.
						</p>
						<p className="text-xs text-muted-foreground">
							Built with Next.js, Tailwind CSS, shadcn/ui, and Lucide Icons. For simulation/demo purposes
							only unless otherwise stated.
						</p>
					</div>

					{/* Links / actions */}
					<div className="flex flex-1 flex-wrap items-center gap-3 text-sm md:justify-end">
						<Link href="/terms" className="text-muted-foreground hover:text-primary">
							Terms
						</Link>
						<span className="text-muted-foreground">•</span>
						<Link href="/privacy" className="text-muted-foreground hover:text-primary">
							Privacy
						</Link>
						<span className="text-muted-foreground">•</span>
						<Link href="/contact" className="text-muted-foreground hover:text-primary">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
