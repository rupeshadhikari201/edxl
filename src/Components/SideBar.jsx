import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
	FaChartLine,
	FaCalendar,
	FaUsers,
	FaCog,
	FaUser,
	FaSignOutAlt,
} from "react-icons/fa";
const SideBar = () => {
	// create a arrayList
	const menuItems = [
		{ to: "/dashboard", text: "Dashboard", icon: <FaChartLine /> },
		{ to: "/events", text: "Events", icon: <FaCalendar /> },
		{ to: "/", text: "Client", icon: <FaUsers /> },
		{ to: "/settings", text: "Settings", icon: <FaCog /> },
		{ to: "/profile", text: "Profile", icon: <FaUser /> },
		{ to: "/", text: "Logout", icon: <FaSignOutAlt /> },
	];
	return (
		<Col
			xs={3}
			className="sidebar-bg"
			style={{ height: "100vh" }}
		>
			<div className="menu-div">
				{/* <span className="menu"> Menu </span> */}
				<FiMenu size={50} />
			</div>
			<ul className="sidebar-menu">
				{menuItems.map((item, index) => (
					<li
						key={index}
						className="menu-item"
					>
						<Link
							to={item.to}
							className="menu-link"
						>
							{item.icon}
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</Col>
	);
};

export default SideBar;
