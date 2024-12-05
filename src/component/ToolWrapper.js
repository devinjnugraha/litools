import { Container, Form, Stack } from "react-bootstrap";
import AppCard from "./AppCard";
import img from "../asset/img/logo192.png";

export default function ToolWrapper() {
	return (
		<>
			<section className="bg-success-subtle rounded-bottom-5 py-4 text-center" style={{ height: "40vh" }}>
				<img height={150} src={img} alt="riskLogo" />
				<p className="fw-semibold fs-5">Risk Calculator</p>
				<p>Calculate your position based on your risk tolerance</p>
			</section>
			<section style={{ marginTop: "-7rem" }}>
				<Container>
					<Stack gap={3}>
						<AppCard className="bg-darker">
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="small text-muted mb-0">
										What currency are you using?
									</Form.Label>
									<Form.Select className="fw-semibold" size="sm">
										<option value="1">IDR</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="small text-muted mb-0">How much is your capital?</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="small text-muted mb-0">
										What is your planned stop lost percentage?
									</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="small text-muted mb-0">
										Risk tolerance of the capital (2% is recommended)
									</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="small text-muted mb-0">Current share price</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
							</Form>
						</AppCard>

						<AppCard className="bg-darker">
							<Stack direction="horizontal" gap={2}>
								<img src={img} alt="logo" height={30} />
								<div>
									<small className="text-muted">Recommended position size</small>
									<div className="fw-semibold">33000 shares</div>
								</div>
							</Stack>
						</AppCard>
					</Stack>
				</Container>
			</section>
		</>
	);
}
