import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import { BsTextarea } from "react-icons/bs";
const EventCreation2 = () => {
	/*-------------------*/
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() == false) {
			event.preventE;
		}

		setValidated(true);
	};
	return (
		<div>
			<Container
				fluid
				className="event3"
			>
				<Container className="vh-100 d-flex justify-content-center align-items-center">
					<Card
						className="p-3 shadow "
						style={{ maxWidth: "800px" }}
					>
						<div className="content-holder">
							<h2 className="fw-bold ">Register an Event</h2>
							<Form
								noValidate
								validated={validated}
								onSubmit={handleSubmit}
							>
								<Row className="mb-3">
									<Form.Group
										as={Col}
										xs="12"
										controlId="validation01"
										className="mt-3"
									>
										<Form.Label>
											Event Description{" "}
											<span style={{ opacity: ".3" }}> (min 200 words)</span>
										</Form.Label>

										<Form.Control
											required
											as="textarea"
											placeholder="describe the event in minimum 200 words. "
											// style={{ "--placeholder-opacity": 0.3 }}
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										xs={12}
										controlId="validation02"
										className="mt-3"
									>
										<Form.Label>Upload Event Poster</Form.Label>
										<Form.Control
											required
											type="file"
										></Form.Control>
									</Form.Group>
								</Row>

								<div className="d-flex justify-content-center">
									<Link
										to="/register2"
										className="mx-4"
									>
										<Button
											className="d-inline mx-auto px-4  fw-bold mt-4"
											style={{ backgroundColor: "#000080" }}
											type="submit"
										>
											Previous
										</Button>
									</Link>
									<Link to="/register3">
										<Button
											className="d-inline mx-auto px-4 fw-bold mt-4"
											type="submit"
											style={{ backgroundColor: "#000080" }}
										>
											Next
										</Button>
									</Link>
								</div>
							</Form>
						</div>
					</Card>
				</Container>
			</Container>
		</div>
	);
};

export default EventCreation2;
