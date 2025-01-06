import { Button, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import AppCard from '../component/AppCard';
import AppOffcanvas from '../component/AppOffcanvas';
import Input from '../component/Input';
import { useEffect, useState } from 'react';
import ButtonOptions from '../component/ButtonOptions';
import { formatCurrency, formatNumber } from '../utils/util';
import useIsFirstRender from '../hooks/useIsFirstRender';
import img from '../asset/img/position-risk-calculator.webp';

export default function RiskCalculator() {
  const isFirstRender = useIsFirstRender();
  const [currency, setCurrency] = useState('IDR');
  const [risk, setRisk] = useState(2.0);
  const [riskAmount, setRiskAmount] = useState(0);
  const [capital, setCapital] = useState(null);
  const [capitalOption, setCapitalOption] = useState(null);

  const [sharePrice, setSharePrice] = useState(null);
  const [stopLossPrice, setStopLossPrice] = useState(null);
  const [stopLossPct, setStopLossPct] = useState(null);

  const [result, setResult] = useState(0);

  useEffect(() => {
    if (!isFirstRender && capitalOption) {
      setCapital(capitalOption);
    }
  }, [capitalOption]);

  useEffect(() => {
    if (capital !== capitalOption) {
      setCapitalOption(null);
    }
  }, [capital]);

  useEffect(() => {
    const riskAmount = (capital * risk) / 100; // 2% of 10jt = 200rb
    const stopLossPct = ((stopLossPrice - sharePrice) / sharePrice) * 100;
    setStopLossPct(stopLossPct);
    setRiskAmount(riskAmount);

    const result = Math.floor(riskAmount / (sharePrice - stopLossPrice));
    if (sharePrice && stopLossPrice) {
      setResult(result);
    }
  }, [capital, sharePrice, stopLossPrice, risk]);

  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
  }
  function handleRiskChange(e) {
    setRisk(e.target.value);
  }
  function handleCapitalChange(e) {
    setCapital(e.target.value);
  }
  function handleCapitalOptionChange(e) {
    setCapitalOption(e.target.value);
  }

  function handleSharePriceChange(e) {
    setSharePrice(e.target.value);
  }

  function handleStopLossPriceChange(e) {
    setStopLossPrice(e.target.value);
  }

  function handleReset() {
    setCurrency('IDR');
    setRisk(2.0);
    setRiskAmount(0);
    setCapital(null);
    setCapitalOption(null);
    setSharePrice(null);
    setStopLossPrice(null);
    setStopLossPct(null);
    setResult(0);
  }

  const stopLossPctColor = stopLossPct < 0 ? 'text-danger' : 'text-success';

  return (
    <>
      <section
        className="bg-success-subtle rounded-bottom-5 py-4 text-center position-relative"
        style={{ height: '40vh' }}
      >
        <Container>
          <img height={'100vw'} src={img} alt="riskLogo" />
          <p className="fw-semibold mb-1">Position Risk Calculator</p>
          <small>Calculate your optimal position size based on your risk tolerance</small>
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
                      label="Currency"
                      options={[
                        { value: 'IDR', label: 'IDR' },
                        { value: 'USD', label: 'USD' },
                      ]}
                      value={currency}
                      onChange={handleCurrencyChange}
                    />
                  </Col>
                  <Col xs={4}>
                    <Input
                      label={
                        <>
                          Risk Tolerance{' '}
                          <AppOffcanvas title="Risk Tolerance">
                            <p>
                              The 2% risk strategy is a proven investment approach designed to protect your portfolio
                              from significant losses. It ensures that any single trade or investment exposes only 2% of
                              your total portfolio value to risk.
                            </p>
                            <p>
                              By setting a strict limit on potential loss, you can confidently navigate the markets,
                              knowing your capital is preserved for future opportunities. This strategy balances the
                              ambition to grow wealth with the discipline to safeguard it, making it ideal for long-term
                              success.
                            </p>
                          </AppOffcanvas>
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
                    <div>
                      Total capital{' '}
                      <AppOffcanvas title="Total Capital">
                        The total amount of funds available in your portfolio for investment purposes. It includes all
                        cash and liquid assets that can be allocated to trades or investments. Total capital serves as
                        the basis for calculating position sizes, risk levels, and overall portfolio management
                        strategies.
                      </AppOffcanvas>
                    </div>
                  }
                  extraLabel={
                    <ButtonOptions
                      options={[
                        { value: '1000', label: '1K' },
                        { value: '10000', label: '10K' },
                        { value: '1000000', label: '1M' },
                        { value: '10000000', label: '10M' },
                        { value: '100000000', label: '100M' },
                      ]}
                      value={capitalOption}
                      onChange={handleCapitalOptionChange}
                    />
                  }
                  inputType="currency"
                  currency={currency}
                  value={capital}
                  onChange={handleCapitalChange}
                />
                <Input
                  label="Current share price"
                  inputType="currency"
                  currency={currency}
                  value={sharePrice}
                  onChange={handleSharePriceChange}
                />
                <Input
                  label="Stop loss price"
                  inputType="currency"
                  currency={currency}
                  inputGroupText={
                    stopLossPrice && <span className={`fw-bold ${stopLossPctColor}`}>{formatNumber(stopLossPct)}%</span>
                  }
                  value={stopLossPrice}
                  onChange={handleStopLossPriceChange}
                />
              </Form>
            </AppCard>

            <AppCard className="bg-darker shadow-sm rounded">
              <Stack direction="horizontal" gap={2}>
                <img src={img} alt="logo" height={30} />
                <div className="w-100">
                  <small className="small text-muted">Maximum risk you can take</small>
                  <div className="fw-bold text-success">{formatCurrency(currency, riskAmount)}</div>
                  {result > 0 && result !== Infinity && (
                    <>
                      <hr />
                      <small className="small text-muted">Maximum position size</small>
                      <Row>
                        <Col xs={6} className="fw-bold text-success">
                          {formatNumber(result)} shares{' '}
                        </Col>
                        <Col xs={6} className="small text-muted text-end" style={{ fontSize: '0.75rem' }}>
                          {Math.floor(result / 100)} lot{' '}
                          <AppOffcanvas title="Lot">
                            If you are investing stocks in the <b>Indonesia Stock Exchange</b>, 1 lot is equivalent to
                            100 shares.
                          </AppOffcanvas>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} className="small text-success" style={{ fontSize: '0.75rem' }}>
                          ≈{formatCurrency(currency, result * sharePrice)}
                        </Col>
                        <Col xs={6} className="small text-muted text-end" style={{ fontSize: '0.75rem' }}>
                          ≈{formatCurrency(currency, Math.floor(result / 100) * sharePrice * 100)}
                        </Col>
                      </Row>
                    </>
                  )}
                </div>
              </Stack>
            </AppCard>
            <Button variant="link" onClick={handleReset}>
              Reset
            </Button>
          </Stack>
        </Container>
      </section>
    </>
  );
}
