import { Card, Container, Form } from "react-bootstrap";
import AppCard from "./AppCard";

export default function AppSection() {
	return (
		<section className="app-section py-3">
			<Container>
				<h3>test</h3>
				<AppCard title="Trade Information" className="bg-darker">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-muted mb-0">Stop Loss %</Form.Label>
							<Form.Control size="sm" type="number" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-muted mb-0">Current share price</Form.Label>
							<Form.Control size="sm" type="number" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-muted mb-0">Capital</Form.Label>
							<Form.Control size="sm" type="number" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-muted mb-0">Risk per trade</Form.Label>
							<Form.Control size="sm" type="number" />
						</Form.Group>
					</Form>
				</AppCard>
			</Container>
		</section>
	);
}
