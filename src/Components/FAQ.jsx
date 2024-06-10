import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../Styles/NavBar.css";
import "../Styles/AccordiansStyle.css";

function Acc({ title }) {
	return (
		<div className="faq-container h-auto ">
			<h1 className=" p-1 text-center mt-4 mb-4 fw-bold">{title || "FAQ"}</h1>
			<Container
				fluid
				className="faq-container faq-background"
			>
				<Container className="p-5">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header className="custom-accordion-header">
								How much does it cost to host One Event?
							</Accordion.Header>
							<Accordion.Body>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header className="custom-accordion-header">
								How much does it cost to host One Event?
							</Accordion.Header>
							<Accordion.Body>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header className="custom-accordion-header">
								How much does it cost to host One Event?
							</Accordion.Header>
							<Accordion.Body>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header className="custom-accordion-header">
								How much does it cost to host One Event?
							</Accordion.Header>
							<Accordion.Body>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Container>
			</Container>
		</div>
	);
}

export default Acc;
