import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import ProfileTop from "../Components/ProfileTop";
import "../Styles/DashBoard.css";
import "../Styles/Events.css";

// Import the images
import dashboardIcon1 from "../assets/DashboardIcons/1.png";
import dashboardIcon2 from "../assets/DashboardIcons/2.png";
import dashboardIcon3 from "../assets/DashboardIcons/3.png";
import dashboardIcon4 from "../assets/DashboardIcons/4.png";

const Events = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <SideBar />
                    <Col xs={9}>
                        <ProfileTop />
                        <Row className="dashboard-header">
                            <Col sm={6}>
                                <div className="search-bar">
                                    <input type="text" placeholder="Search something" />
                                    <FaSearch color="grey" size={20} className="mx-2" />
                                </div>
                            </Col>
                            <Col sm={6} className="d-flex align-items-center justify-content-end">
                                <Link>
                                    <AiOutlineMessage color="grey" size={27} className="mx-2" />
                                </Link>
                                <Link>
                                    <IoIosNotificationsOutline color="grey" size={35} className="mx-2" />
                                </Link>
                                <Link>
                                    <img
                                        src={Avatar}
                                        alt="profile"
                                        style={{ width: "30px" }}
                                        className="mx-2"
                                    />
                                </Link>
                                <div className="mx-4">
                                    <p className="d-inline">Steve</p>
                                    <br />
                                    <p className="d-inline fw-bold">Admin</p>
                                </div>
                                <Link>
                                    <RiArrowDropDownLine color="grey" size={50} className="mx-2" />
                                </Link>
                            </Col>
                        </Row>
                        <Row className="dashboard-content" style={{ height: `calc(100% - 70px)`, backgroundColor: "#d3d3d3" }}>
                            <div className="dashboard-container">
                                <Link className="btn-create">
                                    <Button className="btn-create">Create a new Event</Button>
                                </Link>
                                <div className="cards mt-3">
                                    <Row className="mb-5">
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon1} alt="Events" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>5</h3>
                                                        <p className="fw-bold">Events</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon2} alt="Tickets Sold" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>100</h3>
                                                        <p className="fw-bold">Tickets Sold</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon3} alt="Registrations" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>1500</h3>
                                                        <p className="fw-bold">Registrations</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon4} alt="Revenue" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>500$</h3>
                                                        <p className="fw-bold">Revenue</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon1} alt="Events" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>5</h3>
                                                        <p className="fw-bold">Events</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="shadow p-2" style={{ height: "140px", width: "270px" }}>
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="img" style={{ marginLeft: "5px", marginRight: "10px", paddingRight: "1.4rem", borderRight: "3px solid #d3d3d3" }}>
                                                        <img src={dashboardIcon2} alt="Tickets Sold" />
                                                    </div>
                                                    <div className="px-2 d-flex flex-column">
                                                        <h3 className="d-inline fw-bold" style={{ color: "#000000" }}>100</h3>
                                                        <p className="fw-bold">Tickets Sold</p>
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
