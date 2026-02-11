import { type LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface HeroProps {
	icon?: LucideIcon;
	title: ReactNode;
	subtitle: ReactNode;
}

export default function Hero({ icon: _icon, title, subtitle }: HeroProps) {
	return (
		<section className="flex flex-col gap-2 items-center text-center py-16">
			{_icon && <_icon className="size-16 mb-4 text-primary" />}
			<h5 className="text-base font-semibold">{title}</h5>
			<small className="text-sm">{subtitle}</small>
		</section>
	);
}
