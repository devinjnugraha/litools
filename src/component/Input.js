import { useState } from 'react';
import { Form, InputGroup, Stack } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
import { LOCALE } from '../config/common';

export default function Input({
  label,
  inputType = 'input',
  type = 'input',
  options = [],
  currency,
  inputGroupText,
  extraLabel,
  value: parentValue,
  onChange: parentOnChange,
  ...props
}) {
  const [innerValue, setInnerValue] = useState(null);

  const isControlled = typeof parentValue !== undefined;
  const value = isControlled ? parentValue : innerValue;

  const handleChange = (e) => {
    parentOnChange?.(e);
    setInnerValue(e.target.value);
  };

  const handleCurrencyInputChange = (value, name, values) => {
    const e = { target: { value, name, values } };
    parentOnChange?.(e);
    setInnerValue(value);
  };
  return (
    <Form.Group className="mb-3">
      <Stack direction="horizontal" gap={2} className="justify-content-between">
        <Form.Label className="small text-muted mb-0 w-100">{label}</Form.Label>
        {extraLabel}
      </Stack>

      {/* inputType = input */}
      {inputType === 'input' && (
        <InputGroup size="sm">
          <Form.Control type={type} className="fw-semibold" value={value} onChange={handleChange} {...props} />
          {inputGroupText && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
        </InputGroup>
      )}

      {/* inputType = select */}
      {inputType === 'select' && (
        <InputGroup size="sm">
          <Form.Select size="sm" className="fw-semibold" value={value} onChange={handleChange} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
          {inputGroupText && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
        </InputGroup>
      )}

      {/* inputType = currency */}
      {inputType === 'currency' && (
        <InputGroup size="sm">
          <CurrencyInput
            intlConfig={{ locale: LOCALE, currency: currency }}
            className="form-control fw-semibold"
            value={value}
            onValueChange={handleCurrencyInputChange}
          />
          {inputGroupText && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
        </InputGroup>
      )}
    </Form.Group>
  );
}
