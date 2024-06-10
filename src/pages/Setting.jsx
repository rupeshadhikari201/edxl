import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaChartLine, FaCalendar, FaUsers, FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Avatar from "../assets/Avatar.png";
import dashboardIcon1 from "../assets/DashboardIcons/s1.png";
import dashboardIcon2 from "../assets/DashboardIcons/s2.png";
import "../Styles/Settings.css";
import "../Styles/Events.css";

const Setting = () => {
    const menuItems = [
        { to: "/dashboard", text: "Dashboard", icon: <FaChartLine /> },
        { to: "/events", text: "Events", icon: <FaCalendar /> },
        { to: "/clients", text: "Clients", icon: <FaUsers /> },
        { to: "/settings", text: "Settings", icon: <FaCog /> },
        { to: "/profile", text: "Profile", icon: <FaUser /> },
        { to: "/logout", text: "Logout", icon: <FaSignOutAlt /> },
    ];

    return (
        <Container fluid>
            <Row>
                <Col xs={3} className="sidebar-bg" style={{ height: "100vh", overflowY: "hidden" }}>
                    <div className="menu-div">
                        <FiMenu size={50} />
                    </div>
                    <ul className="sidebar-menu">
                        {menuItems.map((item, index) => (
                            <li key={index} className="menu-item">
                                <Link to={item.to} className="menu-link">
                                    {item.icon}
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col xs={9}>
                    <Row style={{ height: "70px" }} className="d-flex align-items-center">
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
                                <img src={Avatar} alt="profile" style={{ width: "30px" }} className="mx-2" />
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
                    <Row className="d-flex justify-content-center align-items-center" style={{ height: `calc(100% - 70px)`, backgroundColor: "#d3d3d3" }}>
                        <div className="setting-container">
                            <h1>Settings</h1>
                            <Card className="setting-card">
                                <div className="top">
                                    <img src={dashboardIcon1} alt="Change Password" />
                                    <h3 className="text-left">Change Password</h3>
                                    <img src={dashboardIcon2} alt="Change Password" />
                                </div>
                                <div className="bottom">
                                    <div className="d">
                                        <h4>Preferences</h4>
                                        <p>Manage your preferences for profile settings, and email notifications.</p>
                                        <hr />
                                    </div>
                                    <div className="d">
                                        <h4>Profile Picture Visibility</h4>
                                        <p>Select who can view your profile.</p>
                                    </div>
                                    <div className="d">
                                        <h4>Signin Alert</h4>
                                        <p>Receive email alerts whenever your account is signed in from a new device.</p>
                                    </div>
                                    <div className="d">
                                        <h4>Newsletter</h4>
                                        <p>Receive marketing emails regarding our services, and events.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Setting;
