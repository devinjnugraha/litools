import { Container, Stack } from 'react-bootstrap';

export default function ToolLayout({ heading, description, img, children }) {
  return (
    <>
      <section
        className="bg-success-subtle rounded-bottom-5 py-4 text-center position-relative"
        style={{ height: '40vh' }}
      >
        <Container>
          <img height={'100vw'} src={img} alt="logo" />
          <p className="fw-semibold mb-1">{heading}</p>
          <small>{description}</small>
        </Container>
      </section>
      <section className="position-relative mt-relative">
        <Container>
          <Stack gap={3} className="mb-3">
            {children}
          </Stack>
        </Container>
      </section>
    </>
  );
}
