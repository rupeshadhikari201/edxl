import { Card, CardBody, CardImg, CardImgOverlay, Carousel, CarouselItem, Container, Row, Col, CardHeader, CardTitle, CardText, } from "react-bootstrap"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
export const Testimonial = ({ title }) => {
    return (
        <section>
            <h1 className="text-center ">{title || "Testimonial"}</h1>
            <Container fluid>
                <Container>
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
                    </Card>

                    <Row >
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
                            </Card> */}
                        </Col>
                    </Row>
                </Container>
            </Container>

        </section >
    )
}
