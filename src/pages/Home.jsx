import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import eventImage from '../assets/Images/two.png'
import { IoSearchOutline } from 'react-icons/io5'
import '../Styles/UlexEvents.css'
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
						<Col className='bg-primary'>
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
				<Container fluid>
					<h1 className="text-center mt-4 mb-4">Explore Our Events</h1>
					<Container
						style={{ background: "blue" }}
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
									<IoSearchOutline />
								</div>
							</Col>
						</Row>
					</Container>
					<h1>Upcoming Events</h1>
					<Container>

					</Container>
				</Container>

			</div>
		</div >
	);
};

export default Home;
