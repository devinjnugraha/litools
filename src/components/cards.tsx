'use client';

import Link from 'next/link';
import { type ComponentType } from 'react';
import { CircleGaugeIcon, ScaleIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Tool = {
	heading: string;
	href: string;
	Icon: ComponentType<React.ComponentProps<'svg'>>;
};

const tools: Tool[] = [
	{
		heading: 'Position Risk Calculator',
		href: '/risk',
		Icon: CircleGaugeIcon,
	},
	{
		heading: 'Average Price Calculator',
		href: '/average-price',
		Icon: ScaleIcon,
	},
];

export default function Cards({ className }: { className?: string }) {
	return (
		<div className={cn('grid grid-cols-2 gap-3 sm:gap-4 md:gap-6', className)}>
			{tools.map((tool) => (
				<ToolCard key={tool.heading} {...tool} />
			))}
		</div>
	);
}

function ToolCard({ heading, href, Icon }: Tool) {
	return (
		<Link href={href} className="group rounded-lg" aria-label={heading}>
			<Card>
				<CardContent>
					<div className="flex flex-col items-center text-center gap-1">
						<Icon
							className="size-7 text-gray-700 dark:text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:text-primary"
							aria-hidden="true"
						/>
						<small className="text-sm font-medium text-gray-900 dark:text-gray-100">{heading}</small>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
