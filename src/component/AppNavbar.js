import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../asset/img/logo192.png';
import { Stack } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function AppNavbar() {
  const location = useLocation();
  const navbarClass = location.pathname !== '/' ? 'sticky-top bg-success-subtle' : 'sticky-top';

  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container>
        <Navbar.Brand href="/">
          <Stack gap={2} direction="horizontal">
            <img src={img} height={30} alt="brandLogo" />
            <div className="fw-semibold">litools</div>
          </Stack>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
