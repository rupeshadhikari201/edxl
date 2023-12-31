import "../Styles/SingUp.css";
import NavBar from "../Components/NavBar";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Signup = () => {
	return (
		<>
			<NavBar />
			<div
				style={{ backgroundColor: "#d3d3d3", height: "100vh" }}
				className="d-flex justify-content-center align-items-center "
			>
				<Container
					fluid
					style={{ border: "2px solid magenta" }}
				>
					<Container>
						<div
							className="d-flex  row mx-5"
							style={{ border: "2px solid green", backgroundColor: "white" }}
						>
							<div className=" left-container d-flex justify-content-center align-items-center d-none d-md-flex col-md-6 col-lg-6">
								<div className="left-card p-md-5 p-sm-2">
									<h1>
										Join us and get <br />
										Started with <br />
										hosting events <br />
										<span>seamlessly</span>
									</h1>
								</div>
							</div>
							<div className="right-container col ">
								<h2> Hey there 👋</h2>
								<Form>
									<Form.Group
										className="mb-3"
										controlId="formBasicEmail"
									>
										<Form.Label>Email </Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
										/>
									</Form.Group>

									<Form.Group
										className="mb-3"
										controlId="formBasicPassword"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="formBasiccnfPassword"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Confirm Password"
										/>
									</Form.Group>

									<Button type="submit">
										<Link to="/confirm"> Sign Up</Link>
									</Button>
								</Form>
								<p>
									Already Have an Account, <a href="./login">Login</a>
								</p>
								<div>
									<hr></hr>
								</div>
								<div className="d-flex justify-content-center align-items-center ">
									<img src="src\assets\SignUpIcons\Facebook.png"></img>
									<img src="src\assets\SignUpIcons\google.png"></img>
								</div>
							</div>
						</div>
					</Container>
				</Container>
			</div>
		</>
	);
};

export default Signup;
