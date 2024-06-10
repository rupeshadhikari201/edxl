import "../Styles/SingUp.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
	return (
		<>
			<NavBar />
			<div
				style={{ backgroundColor: "#d3d3d3", height: "100vh" }}
				className="d-flex justify-content-center align-items-center "
			>
				<Container fluid>
					<Container>
						<div
							className="d-flex  row mx-5"
							style={{ backgroundColor: "white" }}
						>
							<div className=" left-container d-flex justify-content-center align-items-center d-none d-md-flex col-md-6 col-lg-6">
								<div className="left-card p-md-5 p-sm-2">
									<h1>
										Login and Start <br />
										Creating Events <br />
										<span>instantly</span>
									</h1>
								</div>
							</div>
							<div className="right-container col ">
								<h2> Welcome Back, 👋</h2>
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
										className="mb-0"
										controlId="formBasicPassword"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
									<div
										className="mb-3  text-end "
										// style={{ border: "2px solid blue" }}
									>
										<Link className="text-center">Forget Password</Link>
									</div>
									<Button
										className="mb-3 custom-button"
										type="submit"
									>
										<Link
											to="/profile"
											className="link-w-un"
										>
											Login
										</Link>
									</Button>
								</Form>
								<p>
									Don&rsquo;t have an account?
									<Link
										className="p-1"
										to="/sp"
									>
										Sign Up
									</Link>
								</p>
							</div>
						</div>
					</Container>
				</Container>
			</div>
		</>
	);
};

export default Login;
