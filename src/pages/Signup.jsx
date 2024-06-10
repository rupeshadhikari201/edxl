import "../Styles/SingUp.css";
import NavBar from "../Components/NavBar";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Signup = () => {
	const initialvalues = {
		email: "",
		password: "",
		cnf_password: "",
	};
	const [formvalues, setFormValues] = useState(initialvalues);
	// forErros function is initially an empty object
	const [formErrors, setFormErrors] = useState({});
	const [isSubmited, setIsSubmited] = useState(false);

	const handleChange = e => {
		// console.log(e.target)
		// console.log(e.target.value);
		// destructure
		const { name, value } = e.target;
		setFormValues({ ...formvalues, [name]: value });
		// console.log(name, value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let error = validate(formvalues);
		setFormErrors(error);
		// after submit update the isSubmited function
		setIsSubmited(true);
	};

	// use the useEffect to check if all the fields are filled and there is no errors to submit the form
	useEffect(() => {
		// console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmited == true) {
			console.log(formvalues);
		}
		// console.log(formvalues);
	}, [formErrors]);
	const validate = value => {
		const errors = {};
		const emailregx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
		const pswregx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

		if (!value.email) {
			errors.email = "Username is required";
		} else if (!emailregx.test(value.email)) {
			errors.email = "Invalid Email Format";
		}

		if (!value.password) {
			errors.password = "Password is required";
		} else if (!pswregx.test(value.password)) {
			errors.password =
				"Must be at least 8 characters long with one uppercase letter,one lowercase letter,one number";
		}
		if (!value.cnf_password) {
			errors.cnf_password = "Password Should match";
		} else if (value.cnf_password !== value.password) {
			errors.cnf_password = "Password must match";
		}

		// return the error object to setFormErrors method
		return errors;
	};

	return (
		<>
			<NavBar />
			<div
				style={{ backgroundColor: "#d3d3d3", height: "100vh" }}
				className="d-flex justify-content-center align-items-center "
			>
				<Container fluid>
					<Container>
						<pre className="center">
							{JSON.stringify(formvalues, null, "\n")}
						</pre>
						<div
							className="d-flex  row mx-5"
							style={{ backgroundColor: "white" }}
						>
							<div className=" left-container d-flex justify-content-center align-items-center d-none d-md-flex col-md-6 col-lg-6">
								<div className="left-card p-100 p-md-5 ">
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
								<Form onSubmit={handleSubmit}>
									<Form.Group
										className="mb-3"
										controlId="formBasicEmail"
									>
										<Form.Label>Email </Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											value={formvalues.email}
											onChange={handleChange}
										/>
										<p>{formErrors.email}</p>
									</Form.Group>

									<Form.Group
										className="mb-3"
										controlId="formBasicPassword"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											name="password"
											value={formvalues.password}
											onChange={handleChange}
										/>
										<p>{formErrors.password}</p>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="formBasiccnfPassword"
									>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Confirm Password"
											name="cnf_password"
											value={formvalues.cnf_password}
											onChange={handleChange}
										/>
										<p>{formErrors.cnf_password}</p>
									</Form.Group>

									<Button
										type="submit"
										className="singupbutton custom-button"
									>
										<Link
											className="link link-w-un"
											to="/confirm"
										>
											Sign Up
										</Link>
									</Button>
								</Form>
								<p>
									Already Have an Account, <a href="./login">Login</a>
								</p>
								<div>
									<p className="hr-or">Or</p>
								</div>
								<div className="d-flex justify-content-center align-items-center gx-4 gap-4">
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
