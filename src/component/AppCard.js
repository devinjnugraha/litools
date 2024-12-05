import Card from "react-bootstrap/Card";

export default function AppCard({ title, subtitle, children, ...props }) {
	return (
		<Card {...props}>
			<Card.Body>
				{title && <Card.Title>{title}</Card.Title>}
				{subtitle && <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>}
				{children && <div>{children}</div>}
			</Card.Body>
		</Card>
	);
}
