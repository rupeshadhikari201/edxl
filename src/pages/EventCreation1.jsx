import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const EventCreation1 = () => {
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
				className="event1"
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
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation01"
										className="mt-3"
									>
										<Form.Label>First Name</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="FirstName"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation02"
										className="mt-3"
									>
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="LastName"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="12"
										controlId="validation03"
										className="mt-3"
									>
										<Form.Label>Organization Name</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="FirstName"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation04"
										className="mt-3"
									>
										<Form.Label>Email</Form.Label>
										<Form.Control
											required
											type="email"
											placeholder="Email"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation05"
										className="mt-3"
									>
										<Form.Label>Phone</Form.Label>
										<Form.Control
											required
											type="numeber"
											placeholder="phone"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation06"
										className="mt-3"
									>
										<Form.Label>State</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="State"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										// md="4"
										// sm="6"
										xs="6"
										controlId="validation07"
										className="mt-3"
									>
										<Form.Label>Country</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Country"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
								</Row>
								<Link to="/register2">
									<Button
										className="d-block mx-auto px-4 fw-bold mt-4"
										style={{ backgroundColor: "#000080" }}
										type="submit"
									>
										Next
									</Button>
								</Link>
							</Form>
						</div>
					</Card>
				</Container>
			</Container>
		</div>
	);
};

export default EventCreation1;
