import { Card, Stack } from 'react-bootstrap';

export default function ToolCard({ heading, img, onClick }) {
  return (
    <Card className="cursor-pointer h-100" onClick={onClick}>
      <Card.Body>
        <Stack className="justify-content-between h-100">
          <small>{heading}</small>
          <img src={img} alt="" height={30} className="ms-auto" />
        </Stack>
      </Card.Body>
    </Card>
  );
}
