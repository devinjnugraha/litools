import { Container, Form, Stack } from "react-bootstrap";
import AppCard from "./AppCard";
import img from "../asset/img/logo192.png";

export default function ToolWrapper() {
	return (
		<>
			<section
				className="bg-success-subtle rounded-bottom-5 py-4 text-center position-relative"
				style={{ height: "40vh" }}
			>
				<Container>
					<img height={"100vw"} src={img} alt="riskLogo" />
					<p className="fw-semibold mb-1">Risk Calculator</p>
					<small>Calculate your position based on your risk tolerance</small>
				</Container>
			</section>
			<section className="position-relative mt-relative">
				<Container>
					<Stack gap={3} className="mb-3">
						<AppCard className="bg-darker shadow-sm rounded">
							<Form>
								<Form.Group className="mb-3" controlId="formCurrency">
									<Form.Label className="small text-muted mb-0">
										What currency are you using?
									</Form.Label>
									<Form.Select className="fw-semibold" size="sm">
										<option value="1">IDR</option>
										<option value="2">USD</option>
										<option value="3">EUR</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formCapital">
									<Form.Label className="small text-muted mb-0">How much is your capital?</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formStopLoss">
									<Form.Label className="small text-muted mb-0">
										What is your planned stop loss percentage?
									</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formRiskTolerance">
									<Form.Label className="small text-muted mb-0">
										Risk tolerance of the capital (2% is recommended)
									</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formSharePrice">
									<Form.Label className="small text-muted mb-0">Current share price</Form.Label>
									<Form.Control className="fw-semibold" size="sm" type="number" />
								</Form.Group>
							</Form>
						</AppCard>

						<AppCard className="bg-darker shadow-sm rounded">
							<Stack direction="horizontal" gap={2}>
								<img src={img} alt="logo" height={30} />
								<div>
									<small className="small text-muted">Recommended position size</small>
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
