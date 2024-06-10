import EventCard from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";

const UpCommingEvent = ({ title }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 770 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div>
			<h2
				className=" mt-5 mb-2 p-1"
				style={{
					background: "#000080",
					display: "inline-block",
					color: "white",
					marginLeft: "100px",
				}}
			>
				{title || "Events"}
			</h2>
			<Container
				fluid
				className="event-background gx-2 py-4 "
			>
				<Container>
					<Carousel responsive={responsive}>
						<div>
							<EventCard />
						</div>
						<div>
							<EventCard />
						</div>
						<div>
							<EventCard />
						</div>
						<div>
							<EventCard />
						</div>
						<div>
							<EventCard />
						</div>
						<div>
							<EventCard />
						</div>
					</Carousel>
				</Container>
			</Container>
		</div>
	);
};

export default UpCommingEvent;
