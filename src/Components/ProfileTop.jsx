import { Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Avatar from "../assets/Avatar.png";
import { Link } from "react-router-dom";
const ProfileTop = () => {
	return (
		<Row
			style={{ height: "70px" }}
			className="d-flex align-items-center
                            "
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
				className=" d-flex align-items-center justify-content-end 
                                "
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
	);
};

export default ProfileTop;
