import { Card, CardBody, Container, Row, Col, CardText } from "react-bootstrap";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestimonialCard from "./TestimonialCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Testimonial = ({ title }) => {
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
		<section>
			<h1 className="text-center mt-4 mb-4 fw-bold">
				{title || "Testimonial"}
			</h1>
			{/* <Container fluid>
				<Container>
					{/* <Card
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
								style={{ position: "relative", top: -22, left: 30 }}
							/>
						</div>

						<CardBody>
							<CardText
								style={{ color: "rgb(42,35,32,.5" }}
								className="text-center  fw-bold "
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Delectus quam, veritatis, consequuntur earum alias pariatur
								dolore laudantium magnam id et, tempora minus.
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
							<Card.Title className="fw-bold text-white">
								Natalia Dyer
							</Card.Title>
						</div>
					</Card> */}

			{/* <Row>
						<Col className="col-12">
							{/* <Card style={{ backgroundColor: "#f0f0f0", maxWidth: 300, border: "3px solid #1ec191" }} >

                                <div>
                                    <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#1EC19A" style={{ position: "relative", top: -22, left: 30 }} />
                                </div>

                                <CardBody>
                                    <CardText style={{ color: "rgb(42,35,32,.5" }} className="text-center  fw-bold ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam, veritatis, consequuntur earum alias pariatur dolore laudantium magnam id et, tempora minus.
                                    </CardText>


                                </CardBody>
                                <div className='avatar text-center ' style={{ zIndex: 1 }}
                                >
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle img-fluid " width={100} height={160} style={{ border: "4px solid #f0f0f0" }} />
                                </div>
                                <div
                                    className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1EC19A", height: 100, marginTop: -20 }}>
                                    <Card.Title className="fw-bold text-white">Natalia Dyer</Card.Title>
                                </div>
                            </Card>
                            <Card style={{ backgroundColor: "#f0f0f0", maxWidth: 300, border: "3px solid #1ec191" }} >

                                <div>
                                    <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#1EC19A" style={{ position: "relative", top: -22, left: 30 }} />
                                </div>

                                <CardBody>
                                    <CardText style={{ color: "rgb(42,35,32,.5" }} className="text-center  fw-bold ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam, veritatis, consequuntur earum alias pariatur dolore laudantium magnam id et, tempora minus.
                                    </CardText>


                                </CardBody>
                                <div className='avatar text-center ' style={{ zIndex: 1 }}
                                >
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle img-fluid " width={100} height={160} style={{ border: "4px solid #f0f0f0" }} />
                                </div>
                                <div
                                    className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1EC19A", height: 100, marginTop: -20 }}>
                                    <Card.Title className="fw-bold text-white">Natalia Dyer</Card.Title>
                                </div>
                            </Card> }
						</Col>
					</Row> }

					<Carousel className="my-3">
						<CarouselItem>
							<TestimonialCard />
						</CarouselItem>
						<CarouselItem>
							<TestimonialCard />
						</CarouselItem>
						<CarouselItem>
							<TestimonialCard />
						</CarouselItem>
					</Carousel>
				</Container>
			</Container> */}
			<Container fluid>
				<Container>
					<Carousel responsive={responsive}>
						<div>
							<TestimonialCard />
						</div>
						<div>
							<TestimonialCard />
						</div>
						<div>
							<TestimonialCard />
						</div>
						<div>
							<TestimonialCard />
						</div>
						<div>
							<TestimonialCard />
						</div>
					</Carousel>
				</Container>
			</Container>
		</section>
	);
};
