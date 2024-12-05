import { Button, Container, Form, Stack } from "react-bootstrap";
import AppCard from "./AppCard";
import AppSection from "./AppSection";
import ToolWrapper from "./ToolWrapper";

export default function Main() {
	return (
		<>
			<ToolWrapper />
		</>
		// <Container className="py-4">
		// 	<Stack gap={3}>
		// 		{/* <section id="intro">
		// 			<p>
		// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis tempor mauris, eu eleifend
		// 				velit convallis at. Pellentesque ac neque ut elit venenatis mollis in ut risus. Nam quis erat
		// 				urna. Suspendisse consequat nibh pharetra nunc tincidunt pellentesque. Nulla facilisi. Nulla
		// 				facilisi. Etiam lacus justo, egestas vel tortor vitae, porta consequat dolor. Morbi pulvinar
		// 				sagittis neque eget porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
		// 				per inceptos himenaeos. Suspendisse potenti. Aliquam erat volutpat. In vitae tempor urna.
		// 			</p>
		// 			<p className="fw-semibold">Available tools:</p>
		// 			<Tabs />
		// 		</section> */}
		// 		<section id="active-tool">
		// 			<h1 className="text-center">Risk Calculator</h1>
		// 			<p className="text-center">
		// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis tempor mauris, eu eleifend
		// 				velit convallis at. Pellentesque ac neque ut elit venenatis mollis in ut risus. Nam quis erat
		// 				urna. Suspendisse consequat nibh pharetra nunc tincidunt pellentesque. Nulla facilisi. Nulla
		// 				facilisi. Etiam lacus justo, egestas vel tortor vitae, porta consequat dolor. Morbi pulvinar
		// 				sagittis neque eget porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
		// 				per inceptos himenaeos. Suspendisse potenti. Aliquam erat volutpat. In vitae tempor urna.
		// 			</p>
		// 			<Stack direction="horizontal" gap={3} className="flex-wrap flex-md-nowrap">
		// 				<AppCard title="Trade Information">
		// 					<Form>
		// 						<Form.Group className="mb-3" controlId="formBasicEmail">
		// 							<Form.Label className="text-muted mb-0">Stop Loss %</Form.Label>
		// 							<Form.Control size="sm" type="number" />
		// 						</Form.Group>
		// 						<Form.Group className="mb-3" controlId="formBasicEmail">
		// 							<Form.Label className="text-muted mb-0">Current share price</Form.Label>
		// 							<Form.Control size="sm" type="number" />
		// 						</Form.Group>
		// 						<Form.Group className="mb-3" controlId="formBasicEmail">
		// 							<Form.Label className="text-muted mb-0">Capital</Form.Label>
		// 							<Form.Control size="sm" type="number" />
		// 						</Form.Group>
		// 						<Form.Group className="mb-3" controlId="formBasicEmail">
		// 							<Form.Label className="text-muted mb-0">Risk per trade</Form.Label>
		// 							<Form.Control size="sm" type="number" />
		// 						</Form.Group>
		// 					</Form>
		// 				</AppCard>
		// 				<div>test</div>
		// 			</Stack>
		// 		</section>
		// 	</Stack>
		// </Container>
	);
}
