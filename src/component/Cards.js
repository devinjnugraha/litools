import { Card, Col, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Cards() {
	const navigate = useNavigate();

	function handleRiskCalculatorClick() {
		navigate("/risk-calculator");
	}

	return (
		<Row>
			<Col xs={6} className="mb-3">
				<Card className="cursor-pointer" onClick={handleRiskCalculatorClick}>
					<Card.Body>
						<Stack>
							<div>Position Calculator</div>
							<img
								src="https://app.bibit.id/static/media/icon-reksadana.fa98183b3c90648733fa95809e2ca7d4.svg"
								alt=""
								height={30}
								className="ms-auto"
							/>
						</Stack>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} className="mb-3">
				<Card className="cursor-pointer">
					<Card.Body>
						<Stack>
							<div>SBN Retail</div>
							<img
								src="https://app.bibit.id/static/media/icon-sbn.573d49f303e1ff14601150fa7b76cc21.svg"
								alt=""
								height={30}
								className="ms-auto"
							/>
						</Stack>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} className="mb-3">
				<Card className="cursor-pointer">
					<Card.Body>
						<Stack>
							<div>Obligasi FR</div>
							<img
								src="https://app.bibit.id/static/media/icon-fr.63200ff4c072bceddb2cd50017315bc7.svg"
								alt=""
								height={30}
								className="ms-auto"
							/>
						</Stack>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} className="mb-3">
				<Card className="cursor-pointer">
					<Card.Body>
						<Stack>
							<div>Saham</div>
							<img
								src="https://app.bibit.id/static/media/icon-saham.9dcaf9c1769b0609b9bfebb0f5e25fa3.svg"
								alt=""
								height={30}
								className="ms-auto"
							/>
						</Stack>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}
