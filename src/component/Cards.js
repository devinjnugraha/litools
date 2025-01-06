import { Card, Col, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ToolCard from './ToolCard';
import prcImg from '../asset/img/position-risk-calculator.webp';
import apcImg from '../asset/img/average-price-calculator.png';

export default function Cards() {
  const navigate = useNavigate();

  function handleRiskCalculatorClick() {
    navigate('/risk-calculator');
  }

  function handleAveragePriceClick() {
    navigate('/average-price');
  }

  const tools = [
    {
      heading: 'Position Risk Calculator',
      img: prcImg,
      onClick: handleRiskCalculatorClick,
    },
    {
      heading: 'Average Price Calculator',
      img: apcImg,
      onClick: handleAveragePriceClick,
    },
  ];

  return (
    <Row>
      {tools.map((tool) => (
        <Col xs={6} className="mb-3" key={tool.heading}>
          <ToolCard {...tool} />
        </Col>
      ))}
    </Row>
  );
}
