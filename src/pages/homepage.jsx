import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faJs,
	faNodeJs,
	faReact,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMailBulk } from "@fortawesome/free-solid-svg-icons";

import INFO from "../data/user";
import SEO from "../data/seo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import profile from "./../MyImages/Ibrahim's_Profile.png";
import nextJs from "../MyImages/icons8-nextjs.svg";
import cSharp from "../MyImages/icons8-c-sharp-logo.svg";
import tailwindcss from "../MyImages/icons8-tailwind-css.svg";
import raspberryPi from "../MyImages/icons8-raspberry-pi.svg";
import java from "../MyImages/icons8-java.svg"; // Update to correct Java SVG path
import "./styles/homepage.css";

const skills = [
	{ icon: faHtml5, label: "HTML5" },
	{ icon: faCss3, label: "CSS3" },
	{ icon: faJs, label: "JavaScript" },
	{ icon: faReact, label: "React" },
	{ icon: faNodeJs, label: "Node.js" },
	{ icon: faDatabase, label: "SQL" },
	{ icon: faDatabase, label: "MongoDB" },
	{ icon: raspberryPi, label: "Raspberry Pi" },
	{ icon: nextJs, label: "Next.js" },
	{ icon: tailwindcss, label: "Tailwind CSS" },
	{ icon: java, label: "Java" },
	{ icon: cSharp, label: "C#" },
];

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");
	const { title, email } = INFO.main;
	const { github, instagram } = INFO.socials;

	return (
		<React.Fragment>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						{/* Hero Section */}
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<h1
									className="title homepage-title"
									style={{ color: "cornflowerblue" }}
								>
									{INFO.homepage.title}
								</h1>
								<p className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</p>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={profile}
											alt="Profile of Ibrahim"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Skills Section */}
						<div className="homepage-skills">
							<h2 className="section-title">Skills</h2>
							<div className="skills-container">
								{skills.map((skill, index) => (
									<div className="skill-item" key={index}>
										{/* Check if the icon is from FontAwesome or an SVG */}
										{typeof skill.icon === "object" ? (
											<FontAwesomeIcon
												icon={skill.icon}
												className="skill-icon"
											/>
										) : (
											<img
												src={skill.icon}
												alt={skill.label}
												className="skill-icon"
											/>
										)}
										<span className="skill-label">
											{skill.label}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Social Media Links */}
						<div className="homepage-socials">
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub Profile"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={instagram}
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram Profile"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${email}`}
								target="_blank"
								rel="noreferrer"
								aria-label="Email Me"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
