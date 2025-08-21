import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../MyImages/IbrahimsProfileLogo.png";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active, isLogo } = props;
	return (
		<React.Fragment>
			<nav className="navbar">
				<div className="nav-background">
					<img
						src={profileImage}
						alt="profile-logo"
						className={
							isLogo ? "logo-profile" : "logo-profile hidden"
						}
						onClick={() => window.scrollTo(0, 0)}
					/>
					<ul className="nav-list">
						<li
							className={
								active === "home"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={
								active === "projects"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/projects">Projects</Link>
						</li>
						<li
							className={
								active === "contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;
