import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function AppOffcanvas({ title, children, placement = "bottom" }) {
	const [show, setShow] = useState(false);

	function handleShow() {
		setShow(true);
	}
	function handleHide() {
		setShow(false);
	}
	return (
		<>
			<FontAwesomeIcon icon={faCircleInfo} className="cursor-pointer small" onClick={handleShow} />
			<Offcanvas
				show={show}
				onHide={handleHide}
				placement={placement}
				className="rounded-bottom-0 rounded-4 h-auto pb-5 px-2"
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{title ?? "Title"}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{children ??
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestias illo quia alias. Quam reprehenderit doloribus aliquam fuga odit eos eum quis cupiditate, facilis nobis architecto praesentium voluptas consequatur voluptatem autem. Sit, tempora recusandae doloribus quisquam neque dignissimos magni laudantium omnis eius non modi, molestiae ratione dolor ullam, quam suscipit."}
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
