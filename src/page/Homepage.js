import { Col, Row, Stack } from "react-bootstrap";
import img from "../asset/img/logo192.png";
import Cards from "../component/Cards";

export default function Homepage() {
	return (
		<>
			<section className="container text-center py-4">
				<Stack gap={2}>
					<Row className="mx-auto">
						<Col xs={6}>
							<img src={img} alt="hero" />
						</Col>
					</Row>
					<h5>
						Investasi Reksa Dana
						<br />
						Tanpa Ribet
					</h5>
					<small>Satu klik untuk investasi reksa dana sesuai level risiko kamu.</small>
				</Stack>
			</section>
			<section className="container">
				<h6>Online Tools</h6>
				<Cards />
			</section>
		</>
	);
}
