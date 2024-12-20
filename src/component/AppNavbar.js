import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img from "../asset/img/logo192.png";
import { Stack } from "react-bootstrap";

export default function AppNavbar() {
	return (
		<Navbar expand="lg" className=" sticky-top bg-success-subtle">
			<Container>
				<Navbar.Brand href="/">
					<Stack gap={2} direction="horizontal">
						<img src={img} height={30} alt="brandLogo" />
						<div className="fw-semibold">litools</div>
					</Stack>
				</Navbar.Brand>
				<button>switcher</button>
			</Container>
		</Navbar>
	);
}
