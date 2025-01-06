import { Button, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import img from '../asset/img/average-price-calculator.png';
import ToolLayout from '../component/ToolLayout';
import AppCard from '../component/AppCard';
import { useEffect, useState } from 'react';
import Input from '../component/Input';
import { formatCurrency } from '../utils/util';

export default function AveragePrice() {
  const [currency, setCurrency] = useState('IDR');
  const [currentAveragePrice, setCurrentAveragePrice] = useState(null);
  const [sharesOwned, setSharesOwned] = useState(null);
  const [buyPrice, setBuyPrice] = useState(null);
  const [numberOfShares, setNumberOfShares] = useState(null);
  const [newAveragePrice, setNewAveragePrice] = useState(null);

  useEffect(() => {
    if (currentAveragePrice && sharesOwned && buyPrice && numberOfShares) {
      const newAveragePrice =
        (currentAveragePrice * sharesOwned + buyPrice * numberOfShares) /
        (parseFloat(sharesOwned) + parseFloat(numberOfShares));
      setNewAveragePrice(newAveragePrice);
    } else {
      setNewAveragePrice(null);
    }
  }, [currentAveragePrice, sharesOwned, buyPrice, numberOfShares]);

  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
  }
  function handleCurrentAveragePriceChange(e) {
    setCurrentAveragePrice(e.target.value);
  }
  function handleSharesOwnedChange(e) {
    setSharesOwned(e.target.value);
  }
  function handleBuyPriceChange(e) {
    setBuyPrice(e.target.value);
  }
  function handleNumberOfSharesChange(e) {
    setNumberOfShares(e.target.value);
  }

  function handleReset() {
    setCurrentAveragePrice(null);
    setSharesOwned('');
    setBuyPrice(null);
    setNumberOfShares('');
  }

  return (
    <ToolLayout
      heading="Average Price Calculator"
      description="Easily calculate the new average price of your shares after a purchase"
      img={img}
    >
      <AppCard className="bg-darker shadow-sm rounded">
        <Form>
          <Input
            inputType="select"
            label={'Currency'}
            options={[
              { value: 'IDR', label: 'IDR' },
              { value: 'USD', label: 'USD' },
            ]}
            value={currency}
            onChange={handleCurrencyChange}
          />
          <p className="fw-semibold mb-1">Current Holdings</p>
          <Input
            label="Current average price"
            inputType="currency"
            currency={currency}
            value={currentAveragePrice}
            onChange={handleCurrentAveragePriceChange}
          />
          <Input
            label="Shares owned"
            inputType="input"
            type="number"
            inputGroupText="shares"
            value={sharesOwned}
            onChange={handleSharesOwnedChange}
          />
          <p className="fw-semibold mb-1">New Purchase</p>
          <Input
            label="Buy price"
            inputType="currency"
            currency={currency}
            value={buyPrice}
            onChange={handleBuyPriceChange}
          />
          <Input
            label="Number of shares"
            inputType="input"
            type="number"
            inputGroupText="shares"
            value={numberOfShares}
            onChange={handleNumberOfSharesChange}
          />
        </Form>
      </AppCard>

      {newAveragePrice && (
        <AppCard className="bg-darker shadow-sm rounded">
          <Stack direction="horizontal" gap={2}>
            <img src={img} alt="logo" height={30} />
            <div>
              <small className="small text-muted">Your new average price</small>
              <div className="fw-bold">{formatCurrency(currency, newAveragePrice)}</div>
            </div>
          </Stack>
        </AppCard>
      )}
      <Button variant="link" onClick={handleReset}>
        Reset
      </Button>
    </ToolLayout>
  );
}
