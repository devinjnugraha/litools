import { Form, InputGroup } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

export default function Input({
	label,
	inputType = "input",
	type = "input",
	options = [],
	currency,
	inputGroupText,
	...props
}) {
	return (
		<Form.Group className="mb-3">
			<Form.Label className="small text-muted mb-0 w-100">{label}</Form.Label>

			{/* inputType = input */}
			{inputType === "input" && (
				<InputGroup size="sm">
					<Form.Control type={type} className="fw-semibold" {...props} />
					{inputGroupText && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
				</InputGroup>
			)}

			{/* inputType = select */}
			{inputType === "select" && (
				<InputGroup size="sm">
					<Form.Select size="sm" className="fw-semibold" {...props}>
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
			{inputType === "currency" && (
				<InputGroup size="sm">
					<CurrencyInput
						intlConfig={{ locale: "id-ID", currency: currency }}
						className="form-control fw-semibold"
					/>
					{inputGroupText && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
				</InputGroup>
			)}
		</Form.Group>
	);
}
