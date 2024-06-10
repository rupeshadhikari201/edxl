import "../Styles/NavBar.css";
import "../Styles/anim.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
function NavBar() {
	const [isToggle, setIsToggle] = useState(false);
	useEffect(() => {
		navShow();
	}, []);
	const navShow = () => {
		const navContainer = document.querySelector(".nav-container");
		let ss = 200;
		window.onscroll = function () {
			if (this.scrollY > ss) {
				navContainer.style.top = "-200px";
				ss = this.scrollY;
			} else {
				navContainer.style.top = "0px";
				ss = this.scrollY;
			}
			animate();
		};
	};
	const animate = () => {
		var reveals = document.querySelectorAll(".anim");
		console.log("anim");
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;
			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	};

	const handleNav = () => {
		setIsToggle(!isToggle);
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
								<Link to="/">About</Link>
							</li>
							<li>
								<Link to="/">Contact</Link>
							</li>
							<li>
								<Link to="/">Services</Link>
							</li>

							<li>
								<Link to="/events">Events</Link>
							</li>
							<li>
								<Link to="/">Blogs</Link>
							</li>
						</ul>
					</div>
					<div className="button-hum">
						<Link to="/sp">
							{" "}
							<button className="button">Sing Up</button>
						</Link>

						<div
							className="humberger"
							onClick={() => handleNav()}
						>
							<GiHamburgerMenu size={30} />
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default NavBar;
