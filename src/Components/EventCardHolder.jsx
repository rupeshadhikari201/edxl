import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCard from "./EventCard";

const EventCardHolder = ({ title, anim }) => {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		myCards();
	}, []);
	const myCards = () => {
		const cardList = [];
		for (let i = 0; i < 3; i++) cardList.push(EventCard);
		setCards(cardList);
	};
	return (
		<div className={`mb-4 anim ${anim || "fade-right"}`}>
			<h3
				className=" mb-3 p-1"
				style={{
					background: "#000080",
					display: "inline-block",
					color: "white",
					marginLeft: "100px",
				}}
			>
				{title || "Events"}
			</h3>
			<Container
				fluid
				className="event-background gx-2 "
			>
				<Container className="p-4">
					<Row>
						{cards.map((Item, index) => {
							return (
								<Col key={index}>
									<Item />
								</Col>
							);
						})}
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default EventCardHolder;
