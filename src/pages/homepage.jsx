import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./styles/homepage.css";

import INFO from "../data/user";
import SEO from "../data/seo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Experience from "../components/homepage/experience";
import Technologies from "../components/homepage/technologies";
import Achievements from "../components/homepage/achievements";
import HomePageHero from "../components/homepage/homePageHero";

const Homepage = () => {
	const currentSEO = SEO.find((item) => item.page === "home");
	const { title } = INFO.main;
	const [isLogo, setIsLogo] = useState(false);
	const profileRef = useRef(null);
	const techRef = useRef(null);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsLogo(!entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		const currentProfile = profileRef.current;

		if (currentProfile) observer.observe(currentProfile);

		return () => {
			if (currentProfile) observer.unobserve(currentProfile);
		};
	}, []);

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
				<NavBar active="home" isLogo={isLogo} />
				<div className="content-wrapper">
					<div className="homepage-container">
						{/* Hero Section */}
						<HomePageHero profileRef={profileRef} />
						{/* Experience section */}
						<Experience />
						{/* Technologies Section */}
						<Technologies techRef={techRef} />
						{/* Achievements Section */}
						<Achievements />
						<div>
							{/* add research paper also with link https://digitalcommons.bau.edu.lb/stjournal/vol6/iss1/4/ */}
						</div>
						<div>
							{/* Add wakaTime <a href="https://wakatime.com/@018f04fc-f95a-46b9-a411-e49c0a1581ca"><img src="https://wakatime.com/badge/user/018f04fc-f95a-46b9-a411-e49c0a1581ca.svg" alt="Total time coded since Apr 22 2024" /></a> */}
						</div>

						{/* Social Media Links */}

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
