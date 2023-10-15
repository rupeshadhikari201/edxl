import "../Styles/NavBar.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function NavBar() {
	const [isToggle, setIsToggle] = useState(false);

	const handleNav = () => {
		setIsToggle(!isToggle);
		console.log("clicked");
	};
	return (
		<>
			<div className="nav-container">
				<nav>
					<div className="logo-wrapper">
						EXDL<span>Events</span>{" "}
					</div>
					<div className={`nav-link-wrapper ${isToggle ? "toggle-nav" : ""}`}>
						<div
							className="cancel-nav"
							onClick={() => handleNav()}
						>
							Cancel
						</div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/service">Services</Link>
							</li>

							<li>
								<Link to="/randomOne">randomOne</Link>
							</li>
							<li>
								<Link to="/randomTwo">randomTwo</Link>
							</li>
						</ul>
					</div>
					<div className="button-hum">
						<Link to="/hello"> <button className="button">Sing Up</button></Link>


						<div
							className="humberger"
							onClick={() => handleNav()}
						>
							<GiHamburgerMenu size={30} />
						</div>
					</div>
				</nav >
			</div >
		</>
	);
}

export default NavBar;
