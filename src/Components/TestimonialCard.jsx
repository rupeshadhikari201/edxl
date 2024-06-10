import { Card, CardBody, CardText } from "react-bootstrap";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = () => {
	const color = [{ one: "#8A60B9" }, { two: "#1EC19A" }, { three: "#5AA3F3" }];
	return (
		<div>
			<Card
				style={{
					backgroundColor: "#f0f0f0",
					maxWidth: 300,
					border: "3px solid #1ec191",
				}}
			>
				<div>
					<FontAwesomeIcon
						icon={faQuoteLeft}
						size="2x"
						color="#1EC19A"
						style={{ position: "relative", top: 10, left: 30 }}
					/>
				</div>

				<CardBody>
					<CardText
						style={{ color: "rgb(42,35,32,.5" }}
						className="text-center  fw-bold "
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
						quam, veritatis, consequuntur earum alias pariatur dolore laudantium
						magnam id et, tempora minus.
					</CardText>
				</CardBody>
				<div
					className="avatar text-center "
					style={{ zIndex: 1 }}
				>
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
						className="rounded-circle img-fluid "
						width={100}
						height={160}
						style={{ border: "4px solid #f0f0f0" }}
					/>
				</div>
				<div
					className="d-flex justify-content-center align-items-center"
					style={{
						backgroundColor: "#1EC19A",
						height: 100,
						marginTop: -20,
					}}
				>
					<Card.Title className="fw-bold text-white">Natalia Dyer</Card.Title>
				</div>
			</Card>
		</div>
	);
};

export default TestimonialCard;
