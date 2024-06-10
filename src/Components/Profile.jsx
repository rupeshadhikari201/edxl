import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Avatar from "../assets/Avatar.png";
import AvatarBig from "../assets/AvatarBig.png";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "../Styles/Profile.css";
import SideBar from "../Components/SideBar.jsx";
const Profile = () => {
	// editable form elements
	const [isEditing, setIsEditing] = useState(false);
	const [fullName, setFullName] = useState("John Doe");
	const [gender, setGender] = useState("Male");
	const [country, setCountry] = useState("USA");
	const [state, setState] = useState("New York");
	const [phone, setPhone] = useState("123-456-7890");
	const [language, setLanguage] = useState("English");

	const handleEditClick = () => {
		setIsEditing(!isEditing);
	};

	return (
		<div>
			<Container fluid>
				<Row>
					<SideBar />
					{/* SideBarCode */}
					{/* <Col
						xs={3}
						className="sidebar-bg"
						style={{ height: "100vh" }}
					>
						<div className="menu-div">
							{/* <span className="menu"> Menu </span> }
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
					</Col> */}
					<Col
						xs={9}
						// className="d-flex justify-content-center align-items-center border border-primary "
					>
						<Row
							style={{ height: "70px" }}
							className="d-flex align-items-center "
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
								className=" d-flex align-items-center justify-content-end  "
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
						</Row>
						<Row
							className=" justify-content-center align-items-center "
							style={{
								height: `calc(100% - 70px)`,
								backgroundColor: "#d3d3d3",
							}}
						>
							<Card
								className="p-3 d-flex shadow"
								style={{ maxWidth: "800px", border: "none", outline: "none" }}
							>
								<div className="d-flex align-items-center justify-content-between ">
									<img
										src={AvatarBig}
										alt="profile"
										style={{ width: "200px" }}
									></img>
									<div className="">
										<p className="fw-bold  text-center">Steve Harrington</p>
										<p
											className="fw-bold"
											style={{ opacity: 0.5 }}
										>
											steveharrington@gmail.com
										</p>
									</div>
									<Button
										onClick={handleEditClick}
										className="px-4"
										style={{ backgroundColor: "#000080" }}
									>
										{isEditing ? "Save" : "Edit"}
									</Button>
								</div>
								<div className="mt-3">
									{isEditing ? (
										<Form>
											<Row>
												<Col md={4}>
													<Form.Group className="mb-3">
														<Form.Label>Full Name</Form.Label>
														<Form.Control
															type="text"
															// className=" border"
															value={fullName}
															onChange={e => setFullName(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
												<Col md={4}>
													<Form.Group className="mb-3">
														<Form.Label>Gender</Form.Label>
														<Form.Control
															type="text"
															// className="form-control border"
															value={gender}
															onChange={e => setGender(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
											</Row>
											<Row>
												<Col
													sm={6}
													md={4}
													xs={12}
												>
													<Form.Group className="mb-3">
														<Form.Label>Country</Form.Label>
														<Form.Control
															type="text"
															value={country}
															onChange={e => setCountry(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
												<Col sm={6}>
													<Form.Group className="mb-3">
														<Form.Label>State</Form.Label>
														<Form.Control
															type="text"
															value={state}
															onChange={e => setState(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
											</Row>
											<Row>
												<Col md={4}>
													<Form.Group className="mb-3">
														<Form.Label>Phone</Form.Label>
														<Form.Control
															type="phone"
															value={phone}
															onChange={e => setPhone(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
												<Col md={4}>
													<Form.Group className="mb-3">
														<Form.Label>Language</Form.Label>
														<Form.Control
															type="text"
															value={language}
															onChange={e => setLanguage(e.target.value)}
															disabled={!isEditing}
														/>
													</Form.Group>
												</Col>
											</Row>

											{/* <div className="form-group">
														<label>Gender:</label>
														<input
															type="text"
															className="form-control border"
															value={gender}
															onChange={e => setGender(e.target.value)}
															disabled={!isEditing}
														/>
													</div>
													<div className="form-group">
														<label>Country:</label>
														<input
															type="text"
															className="form-control border"
															value={country}
															onChange={e => setCountry(e.target.value)}
															disabled={!isEditing}
														/>
													</div>
												</Col>
												<div className="col-md-3">
													<div className="form-group">
														<label>State:</label>
														<input
															type="text"
															className="form-control border"
															value={state}
															onChange={e => setState(e.target.value)}
															disabled={!isEditing}
														/>
													</div>
													<div className="form-group">
														<label>Phone:</label>
														<input
															type="text"
															className="form-control border"
															value={phone}
															onChange={e => setPhone(e.target.value)}
															disabled={!isEditing}
														/>
													</div>
													<div className="form-group">
														<label>Language:</label>
														<input
															type="text"
															className="form-control border"
															value={language}
															onChange={e => setLanguage(e.target.value)}
															disabled={!isEditing}
														/>
													</div>
												</div> */}
										</Form>
									) : (
										<div className="px-5`">
											<Form className="  d-flex flex-column mx-auto ">
												<Row>
													<Col md={4}>
														<Form.Group>
															<Form.Label>First Name</Form.Label>
															<Form.Control
																type="text"
																value={fullName}
																onChange={e => setFullName(e.target.value)}
															/>
														</Form.Group>
													</Col>
													<Col md={4}>
														<Form.Group className="mb-3">
															<Form.Label>Gender</Form.Label>
															<Form.Control
																type="text"
																value={gender}
																onChange={e => setGender(e.target.value)}
															/>
														</Form.Group>
													</Col>
												</Row>
												<Row>
													<Col md={4}>
														<Form.Group className="mb-3">
															<Form.Label>Country</Form.Label>
															<Form.Control
																type="text"
																value={fullName}
																onChange={e => setFullName(e.target.value)}
															/>
														</Form.Group>
													</Col>
													<Col md={4}>
														<Form.Group className="mb-3">
															<Form.Label>State </Form.Label>
															<Form.Control
																type="text"
																value={country}
																onChange={e => setGender(e.target.value)}
															/>
														</Form.Group>
													</Col>
												</Row>
												<Row>
													<Col md={4}>
														<Form.Group className="mb-3">
															<Form.Label>Phone</Form.Label>
															<Form.Control
																type="phone"
																value={phone}
																onChange={e => setPhone(e.target.value)}
															/>
														</Form.Group>
													</Col>
													<Col md={4}>
														<Form.Group className="mb-3">
															<Form.Label>Language </Form.Label>
															<Form.Control
																type="text"
																value={language}
																onChange={e => setLanguage(e.target.value)}
															/>
														</Form.Group>
													</Col>
												</Row>
											</Form>
											{/* <h3>{fullName}</h3> */}
											{/* <p>Gender: {gender}</p>/ */}
											{/* <p>Country: {country}</p>
											<p>State: {state}</p>
											<p>Phone: {phone}</p>
											<p>Language: {language}</p> */}
										</div>
									)}
								</div>
							</Card>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Profile;
