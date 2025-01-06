import { Col, Row, Stack } from 'react-bootstrap';
import img from '../asset/img/logo192.png';
import Cards from '../component/Cards';

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
          <h5>Your All-in-One Online Toolbox</h5>
          <small>
            Smart tools for everyday tasks—<b>anytime, anywhere</b>.
          </small>
        </Stack>
      </section>
      <section className="container">
        <h6>Explore Our Tools</h6>
        <Cards />
      </section>
      <section className="container py-5 mt-5 border-top">
        <h6>Get Started Now</h6>
        <small className="fw-semibold">No signups. No installations. Just solutions.</small>
        <div>
          <small>
            <i>litools – Your essential toolbox for every need.</i>
          </small>
        </div>
      </section>
    </>
  );
}
