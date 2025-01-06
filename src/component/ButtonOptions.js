import { forwardRef, useImperativeHandle, useState } from 'react';
import { Stack, ToggleButton } from 'react-bootstrap';

export default forwardRef(function ButtonOptions({ options, value: parentValue, onChange: parentOnChange }, ref) {
  const [selected, setSelected] = useState('');

  const isControlled = typeof parentValue !== 'undefined';
  const value = isControlled ? parentValue : selected;

  function handleChange(e) {
    const newValue = e.target.value;
    if (value === newValue) return; // Prevent unnecessary updates
    parentOnChange?.(e);
    setSelected(newValue);
  }

  function getValue() {
    return value;
  }

  useImperativeHandle(ref, () => ({
    getValue,
  }));

  return (
    <Stack gap={2} direction="horizontal">
      {options.map((option) => (
        <ToggleButton
          name={option.value}
          key={option.value}
          value={option.value}
          id={option.value}
          type="radio"
          variant="outline-success"
          size="sm"
          className="py-0 fw-semibold"
          style={{ fontSize: '0.8rem' }}
          onChange={handleChange}
          checked={value === option.value} // Tie checked to controlled value
        >
          {option.label}
        </ToggleButton>
      ))}
    </Stack>
  );
});
