import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import profile from "./../MyImages/Ibrahim's_Profile.png";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import thirdPlaceIcon from "../MyImages/icons8-third-place-48.png";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo"></div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div
									className="title about-title"
									style={{ color: "cornflowerblue" }}
								>
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={profile}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="about-right-side">
							<div className="subtitle about-subtitle">
								{INFO.about.description_2}
							</div>
						</div>
					</div>

					{/* Achievements Section */}
					<div className="about-achievements">
						<h2 className="achievements-title">Achievements</h2>
						<ul className="achievements-list">
							{INFO.about.achievements.map(
								(achievement, index) => (
									<li
										key={index}
										className="achievement-item"
									>
										<img
											src={thirdPlaceIcon}
											alt="Third Place Icon"
											className="achievement-icon"
										/>
										<span className="achievement-text">
											{achievement}
										</span>
									</li>
								)
							)}
						</ul>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
