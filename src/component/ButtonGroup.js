import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ButtonGroup({ options }) {
	const [selected, setSelected] = useState(null);

	function handleSelect() {}
	return (
		<>
			{options.map((option) => (
				<Button key={option.value} variant="outline-success" size="sm" className="py-0 fw-semibold">
					{option.label}
				</Button>
			))}
		</>
	);
}
