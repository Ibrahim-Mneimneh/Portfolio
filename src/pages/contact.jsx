import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<h1 className="contact-title">Connect with Me</h1>

						<p className="contact-subtitle">
							Thank you for your interest in getting in touch. I
							welcome your feedback, questions, and suggestions.
							Please feel free to email me directly at&nbsp;
							<a
								href={`mailto:${INFO.main.email}`}
								className="contact-email"
							>
								{INFO.main.email}
							</a>
							. I strive to respond to all messages within 24
							hours, although it may take longer during busy
							periods. You can also use the contact form on my
							website or connect with me on social media. I look
							forward to hearing from you.
						</p>
					</div>

					<div className="socials-container">
						<Socials />
					</div>
					<div className="footer-container">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
