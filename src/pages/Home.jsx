import { Col, Container, Row, Form } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import eventImage from "../assets/Images/two.png";
import heroImage from "../assets/Images/Hero.png"; // Import the Hero image
import "../Styles/UlexEvents.css";
import EventCardHolder from "../Components/EventCardHolder";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaSearch } from "react-icons/fa";
import Acc from "../Components/FAQ";
import { Testimonial } from "../Components/Testimonial";
import { BsFillArrowRightSquareFill, BsFacebook } from "react-icons/bs";
import UpCommingEvent from "../Components/UpCommingEvent";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillTwitterSquare,
	AiFillYoutube,
} from "react-icons/ai";
// CSS Style
import "../Styles/AccordiansStyle.css";

const Home = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<NavBar />
			<div className="container-fluid gx-0">
				<Container
					fluid
					className="d-flex justify-content-center align-items-center gx-0"
					style={{
						height: "90vh",
						color: "white",
						fontWeight: "bolder",
						fontSize: "1.5rem",
						backgroundImage: `url(${heroImage})`, // Use the imported image here
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundHeight: "vh",
					}}
				>
					<Row>
						<Col>
							<h1 className="text-center"> We Host</h1>
							<h2>
								Your <span className="fw-bold">Imaginations...</span>
							</h2>
						</Col>
					</Row>
				</Container>
				<Container fluid className="ulex-container " style={{ height: "auto" }}>
					<Container className="pt-4 pt-md-0">
						<Row className="align-items-center justify-content-center">
							<Col className="col-12 col-md-6 anim fade-left">
								<div style={{ maxWidth: "400px" }}>
									<h1>ULEX Events</h1>
									<p>
										A web based hosting platform to host your upcomming events,
										seminars, webinars seamlessly.
									</p>
								</div>
							</Col>
							<Col className="col-12 col-md-6 anim fade-right">
								<img src={eventImage} alt="Event Logo" style={{ width: "100%" }} />
							</Col>
						</Row>
					</Container>
				</Container>
				<Container fluid className="anim fade-in">
					<h1 className="text-center mt-4 mb-4">Explore Our Events</h1>
					<Container className="mb-3" style={{ background: "#5d9cec" }}>
						<Row className="p-2 align-items-center px-4 justify-content-between">
							<Row className="gx-5 mb-2">
								<Col className="flex-grow-1">
									<Form.Select>
										<option>Category</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</Col>
								<Col className="flex-grow-1">
									<Form.Select>
										<option>Type</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</Col>
								<Col className="flex-grow-1">
									<Form.Select>
										<option>Date</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</Col>
							</Row>
							<Col className="d-flex justify-content-center">
								<div className="search-bar">
									<input type="text" placeholder="Search something" />
									<FaSearch color="grey" size={20} className="mx-2" />
								</div>
							</Col>
						</Row>
					</Container>
				</Container>
				<UpCommingEvent title={"Recommended Events"} />
				<UpCommingEvent title={"Upcomming Events"} />
				<UpCommingEvent title={"Recent Events"} />
				<Testimonial title={"Testimonial"} />
				<Acc title={"FAQ"} />
				{/* Footer */}
				<Container fluid style={{ background: "#010000", color: "white" }} className="pt-4">
					<Row className="justify-content-around">
						<Col className="flex-grow-0 flex-shrink-0 w-auto flex-basis-auto">
							<h4>Contact Us</h4>
							<ul className="list ps-0">
								<li className="d-flex align-items-center gx-2 gap-2">
									<FaEnvelope />
									<p className="p-0 m-0">edx@gmail.com</p>
								</li>
								<li className="d-flex align-items-center gx-2 gap-2">
									<FaPhone />
									<p className="p-0 m-0">99009990</p>
								</li>
							</ul>
							<h4>
								Brand<span>Logo</span>
							</h4>
							<p>
								100, Lakeview Estate, <br />
								Kundrathur Main Road, <br />
								Porur, Chennai, <br />
								Tamil Nadu-600116
							</p>
						</Col>
						<Col className="flex-grow-0 flex-shrink-0 flex-basis-auto w-auto">
							<h4>Quick Link</h4>
							<ul className="list ps-0" style={{ listStyleType: "none" }}>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About Us</Link>
								</li>
								<li>
									<Link to="/contact">Contact Us</Link>
								</li>
								<li>
									<Link to="/events">Event</Link>
								</li>
								<li>
									<Link to="/terms">Terms and Condition</Link>
								</li>
								<li>
									<Link to="/faq">FAQ</Link>
								</li>
							</ul>
						</Col>
						<Col className="flex-grow-0 flex-shrink-0 w-auto flex-basis-auto">
							<h4>Quick Link</h4>
							<div>
								<p style={{ maxWidth: "200px" }}>
									Subscribe to our Newsletter to never miss any updates for your
									favorite events.
								</p>
								<h4>Enter Your Email</h4>
								<input
									type="text"
									placeholder="Subscribe"
									style={{ outline: "2px solid white", border: "2px solid white" }}
								/>
								<BsFillArrowRightSquareFill
									size={30}
									style={{
										color: "white",
										borderRadius: "1px",
										outline: "2px solid white",
										marginTop: "-3px",
									}}
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="d-flex justify-content-center align-items-center pb-3 icons">
								<Link to="https://facebook.com">
									<BsFacebook size={25} color="#d3d3d3" />
								</Link>
								<Link to="https://instagram.com">
									<AiFillInstagram size={30} color="#d3d3d3" />
								</Link>
								<Link to="https://youtube.com">
									<AiFillYoutube size={35} color="#d3d3d3" />
								</Link>
								<Link to="https://twitter.com">
									<AiFillTwitterCircle size={30} color="#d3d3d3" />
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Home;
