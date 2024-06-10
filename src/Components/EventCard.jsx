import { Button, Card } from "react-bootstrap";
import Image1 from "../assets/1.png";
import icon1 from "../assets/CardIcons/1.png";
import icon2 from "../assets/CardIcons/2.png";
import icon3 from "../assets/CardIcons/3.png";
import icon4 from "../assets/CardIcons/4.png";
import { Link } from "react-router-dom";
const EventCard = ({ title }) => {
	return (
		<Card
			style={{
				width: "18rem",
				borderRadius: "20px",
				overflow: "hidden",
				border: "none",
			}}
		>
			<Card.Img
				variant="top"
				src={Image1}
				style={{ width: "100%" }}
			/>
			<Card.Body>
				<Card.Title>International Webinar on Digital Marketing.</Card.Title>
				<Card.Text
					className="font-weight-bold"
					style={{ fontWeight: "bold", fontSize: ".9rem" }}
				>
					Institue of Digital Marketing, L17 High StreetLondonSE81 0LA.
				</Card.Text>
				<div className="d-flex flex-column align-items-left mb-3">
					<div className="icon-section mb-1">
						{/* <FaMapMarkerAlt className="icon" /> */}
						<img
							src={icon1}
							alt="Location"
							className="icon "
						/>
						<span className="icon-text ">Institute of Digital Marketing</span>
					</div>

					<div className="icon-section mb-1">
						{/* <FaCalendarAlt className="icon" /> */}
						<img
							src={icon2}
							alt="Location"
							className="icon"
						/>
						<span className="icon-text  ">October 15, 2023</span>
					</div>

					<div className="icon-section mb-1">
						{/* <FaClock className="icon" /> */}
						<img
							src={icon3}
							alt="Location"
							className="icon"
						/>
						<span className="icon-text">10:00 AM</span>
					</div>

					<div className="icon-section mb-1">
						{/* <FaExclamationCircle className="icon" /> */}
						<img
							src={icon4}
							alt="Location"
							className="icon"
						/>
						<span className="icon-text">Free</span>
					</div>
				</div>
				<Link to="/register">
					<Button
						variant="primary"
						className="btn-md"
						style={{
							borderRadius: 4,
							backgroundColor: "#000080",
							width: "100%",

							fontSize: "1.2rem",
						}}
					>
						Register Now
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default EventCard;
