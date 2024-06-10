import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../Styles/DashBoard.css";
import "../Styles/Events.css";
import SideBar from "../Components/SideBar";
import ProfileTop from "../Components/ProfileTop";
const Events = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<SideBar />
					<Col xs={9}>
						<ProfileTop />
						{/* <Row
							style={{ height: "70px" }}
							className="d-flex align-items-center
                            "
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
								className=" d-flex align-items-center justify-content-end 
                                "
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
						</Row> */}
						<Row
							className=" 
                             d-flex  "
							style={{
								height: `calc(100% - 70px)`,
								backgroundColor: "#d3d3d3",
							}}
						>
							<div className="dashboard-container">
								<Link className="btn-create">
									<Button className="btn-create">Create a new Event</Button>
								</Link>
								<div className="cards mt-3  ">
									<Row className="mb-5">
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\1.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															5
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Events
														</p>
													</div>
												</div>
											</Card>
										</Col>
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\2.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															100
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Tickets Sold
														</p>
													</div>
												</div>
											</Card>
										</Col>
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\3.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															1500
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Registrations
														</p>
													</div>
												</div>
											</Card>
										</Col>
									</Row>
									<Row>
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\4.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															500$
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Revenue
														</p>
													</div>
												</div>
											</Card>
										</Col>
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\4.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															5
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Events
														</p>
													</div>
												</div>
											</Card>
										</Col>
										<Col md={4}>
											<Card
												className="shadow p-2"
												style={{ height: "140px", width: "270px" }}
											>
												<div className="d-flex align-items-center justify-content-center h-100">
													<div
														className="img "
														style={{
															marginLeft: "5px",
															marginRight: "10px",
															paddingRight: "1.4rem",
															borderRight: "3px solid #d3d3d3",
														}}
													>
														<img src="src\assets\DashboardIcons\4.png" />
													</div>
													<div className="px-2 d-flex flex-column ">
														<h3
															className="d-inline fw-bold"
															style={{ color: "#000000" }}
														>
															5
														</h3>

														<p
															className="fw-bold"
															// style={{ color: "#333333" }}
														>
															Events
														</p>
													</div>
												</div>
											</Card>
										</Col>
									</Row>
								</div>
							</div>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Events;
