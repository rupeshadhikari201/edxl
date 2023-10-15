import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import eventImage from '../assets/Images/two.png'
import '../Styles/UlexEvents.css'
import EventCardHolder from "../Components/EventCardHolder";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import Acc from "../Components/FAQ";
import '../Styles/AccordiansStyle.css'
import { Testimonial } from "../Components/Testimonial";
const Home = () => {

	return (
		<div>
			<NavBar />
			<div className="container-fluid gx-0" >

				<Container fluid className="d-flex justify-content-center align-items-center gx-0"
					style={{
						height: '90vh', color: 'white', fontWeight: "bolder", fontSize: "1.5rem",

						backgroundImage: "url('src/assets/Images/Hero.png')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundHeight: "vh",

					}}
				>
					<Row>
						<Col className=''>
							<h1  > We Host</h1>
							<h2> Your <span>Imaginations...</span></h2>
						</Col>
					</Row>

				</Container>
				<Container fluid className="ulex-container " style={{ height: "auto" }}>
					<Container className="pt-4 pt-md-0">
						<Row className="align-items-center justify-content-center"  >

							<Col className="col-12 col-md-6 ">
								<div style={{ maxWidth: "400px" }}>
									<h1>ULEX Events</h1>
									<p>A web based hosting platform to host your upcomming events, seminars, webinars seamlessly. </p>
								</div>
							</Col>
							<Col className="col-12 col-md-6">
								<img src={eventImage} alt="Event Logo"
									style={{ width: "100%" }}></img>
							</Col>
						</Row>
					</Container>
				</Container>
				<Container fluid className="">
					<h1 className="text-center mt-4 mb-4">Explore Our Events</h1>
					<Container className="mb-3"
						style={{ background: "#5d9cec" }}
					><Row className="p-2 align-items-center px-4 justify-content-between">
							<Row className="w-auto gx-5">
								<Col className="flex-grow-0">
									<select>
										<option value={""}>Catagory</option>
									</select>
								</Col>
								<Col className="flex-grow-0">
									<select>
										<option value={""}>Type</option>
									</select>
								</Col>
								<Col className="flex-grow-0">
									<select>
										<option value={""}>Data</option>
									</select>
								</Col>
							</Row>
							<Col className="flex-grow-0">
								<div className="search-bar">
									<input type="text" placeholder="Search something" />
									<FaEnvelope color="white" />
								</div>
							</Col>
						</Row>
					</Container >

				</Container>
				<EventCardHolder title={"Upcomming Events"} />
				<EventCardHolder title={"Recommended Events"} />
				<EventCardHolder title={"Recent Events"} />

				<Testimonial title={"Testimonial"} />

				<Acc title={"FAQ"} />
				{/* Footer */}
				<Container fluid style={{ background: "#010000", color: "white" }} className="pt-4">
					<Row className="justify-content-around " >
						<Col className="flex-grow-0 flex-shrink-0 w-auto flex-basis-auto ">
							<h4>Contact Us</h4>
							<ul className="list ps-0">
								<li className="d-flex align-items-center gx-2 gap-2 ">
									<FaEnvelope />
									<p className="p-0 m-0">edx@gmail.com</p>
								</li>
								<li className="d-flex align-items-center gx-2 gap-2 ">
									<FaPhone />
									<p className="p-0 m-0">99009990</p>
								</li>
							</ul>
						</Col>
						<Col className="flex-grow-0 flex-shrink-0 flex-basis-auto w-auto">
							<h4>Quick Link</h4>
							<ul className="list ps-0" style={{
								listStyleType: "none"
							}}>
								<li><Link>Home</Link></li>
								<li><Link>About Us</Link></li>
								<li><Link>Contact Us</Link></li>
								<li><Link>Event</Link></li>
								<li><Link>Terms and Condition</Link></li>
								<li><Link>FAQ</Link></li>
							</ul>
						</Col>
						<Col className="flex-grow-0 flex-shrink-0 w-auto flex-basis-auto">
							<h4>Quick Link</h4>
							<div>
								<p style={{
									maxWidth: "200px"
								}}>Subscirbe never miss
									Subscribe to our News
									Letter to never miss any updates for your favourite events.
								</p>
							</div>
						</Col>
					</Row>

				</Container>

			</div>
		</div >
	);
};

export default Home;
