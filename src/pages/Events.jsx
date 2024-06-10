import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Avatar from "../assets/Avatar.png";
import { Card } from "react-bootstrap";
import "../Styles/Profile.css";
import { PiUser } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { BiTime } from "react-icons/bi";
import "../Styles/Events.css";
import SideBar from "../Components/SideBar";
const Events = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<SideBar />
					<Col xs={9}>
						<Row
							style={{ height: "70px" }}
							className="d-flex align-items-center border border-primary"
						>
							<Col sm={6}>
								<div className="search-bar">
									<input
										type="text"
										placeholder="Search something"
									/>
									<FaSearch
										color="grey"
										size={20}
										className="mx-2 "
									/>
								</div>
							</Col>
							<Col
								sm={6}
								className=" d-flex align-items-center justify-content-end border border-warning"
							>
								<Link>
									<AiOutlineMessage
										color="grey"
										size={27}
										className="mx-2 "
									/>
								</Link>
								<Link>
									<IoIosNotificationsOutline
										color="grey"
										size={35}
										className="mx-2 "
									/>
								</Link>
								<Link>
									<img
										src={Avatar}
										alt="profile image"
										style={{
											width: "30px",
										}}
										className="mx-2 "
									></img>
								</Link>
								<div className="mx-4">
									<p className="d-inline"> Steve</p>
									<br />
									<p className="d-inline fw-bold"> Admin</p>
								</div>
								<Link>
									<RiArrowDropDownLine
										color="grey"
										size={50}
										className="mx-2 "
									/>
								</Link>
							</Col>
						</Row>
						<Row
							className="border border-danger d-flex justify-content-center align-items-center "
							style={{
								height: `calc(100% - 70px)`,
								backgroundColor: "#d3d3d3",
							}}
						>
							<Card
								className="p-3 d-flex shadow"
								style={{ maxWidth: "800px", border: "none", outline: "none" }}
							>
								<div className="event-created-container mb-3">
									<div className="date">
										22 <br />
										August <br />
										2023
									</div>
									<div className="center">
										<p>Digital Marketing in the world of digitalization</p>
										<div className="icons ">
											<PiUser />{" "}
											<span style={{ paddingRight: "20px" }}>Corlis</span>
											<GrLocation />{" "}
											<span style={{ paddingRight: "20px" }}>
												Online/GoogleMeet
											</span>
											<BiTime /> <span>9:30-10:30</span>
										</div>
									</div>

									<Button
										className="evt-button"
										variant="primary"
									>
										Event Summary
									</Button>
								</div>
								<div className="event-created-container mb-3">
									<div className="date">
										22 <br />
										August <br />
										2023
									</div>
									<div className="center">
										<p>Digital Marketing in the world of digitalization</p>
										<div className="icons ">
											<PiUser />{" "}
											<span style={{ paddingRight: "20px" }}>Corlis</span>
											<GrLocation />{" "}
											<span style={{ paddingRight: "20px" }}>
												Online/GoogleMeet
											</span>
											<BiTime /> <span>9:30-10:30</span>
										</div>
									</div>

									<Button
										className="evt-button"
										variant="primary"
									>
										Event Summary
									</Button>
								</div>
								<div className="event-created-container">
									<div className="date">
										22 <br />
										August <br />
										2023
									</div>
									<div className="center">
										<p>Digital Marketing in the world of digitalization</p>
										<div className="icons ">
											<PiUser />{" "}
											<span style={{ paddingRight: "20px" }}>Corlis</span>
											<GrLocation />{" "}
											<span style={{ paddingRight: "20px" }}>
												Online/GoogleMeet
											</span>
											<BiTime /> <span>9:30-10:30</span>
										</div>
									</div>

									<Button
										className="evt-button"
										variant="primary"
									>
										Event Summary
									</Button>
								</div>
							</Card>
							<Card
								className="p-3 d-flex shadow"
								style={{ maxWidth: "800px", border: "none", outline: "none" }}
							>
								<div className="event-created-container mb-3">
									<div className="attended-date">
										22 <br />
										August <br />
										2023
									</div>
									<div className="center">
										<p>Digital Marketing in the world of digitalization</p>
										<div className="icons ">
											<PiUser />{" "}
											<span style={{ paddingRight: "20px" }}>Corlis</span>
											<GrLocation />{" "}
											<span style={{ paddingRight: "20px" }}>
												Online/GoogleMeet
											</span>
											<BiTime /> <span>9:30-10:30</span>
										</div>
									</div>

									<Button
										className="evt-attended-button"
										variant="primary"
									>
										Event Summary
									</Button>
								</div>
								<div className="event-created-container mb-3">
									<div className="attended-date">
										22 <br />
										August <br />
										2023
									</div>
									<div className="center">
										<p>Digital Marketing in the world of digitalization</p>
										<div className="icons ">
											<PiUser />{" "}
											<span style={{ paddingRight: "20px" }}>Corlis</span>
											<GrLocation />{" "}
											<span style={{ paddingRight: "20px" }}>
												Online/GoogleMeet
											</span>
											<BiTime /> <span>9:30-10:30</span>
										</div>
									</div>

									<Button
										className="evt-attended-button"
										variant="primary"
									>
										Event Summary
									</Button>
								</div>
							</Card>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Events;
