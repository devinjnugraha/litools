import Nav from "react-bootstrap/Nav";

export default function Tabs() {
	return (
		<Nav variant="underline" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/" active>
					Risk Calculator
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/">Investment Calculator</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/">Pension Fund Calculator</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}
