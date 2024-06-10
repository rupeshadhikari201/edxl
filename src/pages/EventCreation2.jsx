import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from "react-bootstrap-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const EventCreation2 = () => {
	/*-------------------*/
	const [validated, setValidated] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());

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
				className="event2"
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
										<Form.Label>Event Name</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Name of the Event"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										xs="12"
										controlId="validation02"
										className="mt-3"
									>
										<Form.Label>Speaker Names</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Speakers"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										xs="6"
										controlId="validation03"
										className="mt-3"
									>
										<Form.Label>Date</Form.Label>

										<Form.Control
											required
											type="date"
											as={DatePicker}
											selected={selectedDate}
											onChange={date => setSelectedDate(date)}
										/>
									</Form.Group>
									<Form.Group
										as={Col}
										xs="6"
										controlId="validation04"
										className="mt-3"
									>
										<Form.Label>Time</Form.Label>
										<Form.Control
											required
											type="time"
											as={TimePicker}
											selected={selectedTime}
											onChange={time => setSelectedTime(time)}
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										xs="6"
										controlId="validation05"
										className="mt-3"
									>
										<Form.Label>Event Type</Form.Label>
										<Form.Control
											required
											type="numeber"
											placeholder="Event Type"
											// defaultValue="Mark"
										></Form.Control>
									</Form.Group>
									<Form.Group
										as={Col}
										xs="6"
										controlId="validation06"
										className="mt-3"
									>
										<Form.Label>Event Category</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Category"
										></Form.Control>
									</Form.Group>
								</Row>

								<div className="d-flex justify-content-center">
									<Link
										to="/register"
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
											style={{ backgroundColor: "#000080" }}
											type="submit"
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
