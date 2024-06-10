import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import "../Styles/AccountVerification.css";
import { Form } from "react-bootstrap";
import "../Styles/Global.css";

const SignUpVerification = () => {
	return (
		<div className="main-container">
			<NavBar />
			<div className="d-block justify-content-center align-items-center">
				<Container
					className=" d-flex justify-content-center align-items-center border-warning gx-0
					p-4 p-md-1"
					style={{ height: "100vh" }}
				>
					<Row className="container-confirm py-5 px-5 border border-primary ">
						<Col>
							<div className="confirm text-center py-2 mb-">
								<h2 className="cnf">Confirm</h2>
								<h3 className="uracct">Your Account</h3>
							</div>
							<div className="mt-4">
								<p className="conf-p">
									Hi <span>Steve</span>,<br></br> A verification code has been
									sent to your registered email address Please enter the code to
									activate your account.
								</p>
							</div>
							<div>
								<Form className="mb-3">
									<Form.Group>
										<Form.Label>Enter Your Email</Form.Label>
										<Row>
											<Col classsName="col-8 ">
												<Form.Control
													className="input"
													required
													type="email"
													placeholder="johndoe@gmail.com"
												></Form.Control>
											</Col>
											<Col className="col-4 ">
												<Button
													primary
													className="btn-conf"
												>
													Submit
												</Button>
											</Col>
										</Row>
									</Form.Group>
								</Form>
								<Form>
									<Form.Group>
										<Form.Label>Enter Your Code</Form.Label>
										<Row>
											<Col classsName="col-8 ">
												<Form.Control
													required
													type="number"
													placeholder="742183"
													className="input"
													style={{ fontFamily: "monospace" }}
												></Form.Control>
											</Col>
											<Col className="col-4 ">
												<Button className="btn-conf">Submit</Button>
											</Col>
										</Row>
									</Form.Group>
								</Form>
							</div>
						</Col>
					</Row>
					{/* </Card> */}
				</Container>
			</div>
		</div>
	);
};

export default SignUpVerification;
