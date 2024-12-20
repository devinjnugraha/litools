import { Button, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import AppCard from "../component/AppCard";
import img from "../asset/img/logo192.png";
import AppOffcanvas from "../component/AppOffcanvas";
import Input from "../component/Input";
import { useState } from "react";

export default function RiskCalculator() {
	const [currency, setCurrency] = useState("IDR");
	const [risk, setRisk] = useState(2.0);

	function handleCurrencyChange(e) {
		setCurrency(e.target.value);
	}
	function handleRiskChange(e) {
		setRisk(e.target.value);
	}
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
								<Row className="justify-content-around mb-3">
									<Col xs={4}>
										<Input
											inputType="select"
											label={
												<>
													Currency{" "}
													<AppOffcanvas title="Currency">This is for the body</AppOffcanvas>
												</>
											}
											options={[
												{ value: "IDR", label: "IDR" },
												{ value: "USD", label: "USD" },
											]}
											value={currency}
											onChange={handleCurrencyChange}
										/>
									</Col>
									<Col xs={4}>
										<Input
											label={
												<>
													Risk <AppOffcanvas title="Risk">This is for the body</AppOffcanvas>
												</>
											}
											type="number"
											value={risk}
											onChange={handleRiskChange}
											inputGroupText="%"
										/>
									</Col>
								</Row>

								<Input
									label={
										<Stack direction="horizontal" className="justify-content-between">
											<span>
												Total capital{" "}
												<AppOffcanvas title="Total Capital">This is for the body</AppOffcanvas>
											</span>
											<div className="d-flex gap-2">
												{["1K", "10K", "1M", "10M", "100M"].map((value) => (
													<Button
														key={value}
														variant="outline-success"
														size="sm"
														className="py-0 fw-semibold"
													>
														{value}
													</Button>
												))}
											</div>
										</Stack>
									}
									inputType="currency"
									currency={currency}
								/>
								<Input label="Current share price" inputType="currency" currency={currency} />
								<Input
									label="Stop loss price"
									inputType="currency"
									currency={currency}
									inputGroupText={<span className="fw-bold text-danger">-6%</span>}
								/>
							</Form>
						</AppCard>

						<AppCard className="bg-darker shadow-sm rounded">
							<Stack direction="horizontal" gap={2}>
								<img src={img} alt="logo" height={30} />
								<div>
									<small className="small text-muted">Recommended position size</small>
									<div className="fw-bold">33000 shares</div>
								</div>
							</Stack>
						</AppCard>
					</Stack>
				</Container>
			</section>
		</>
	);
}
