import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import Project from "../components/projects/project";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="projects" />
			<div className="page-content">
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="projects-hero">
							<h1 className="projects-title">
								{INFO.projects.title}
							</h1>
							<p className="projects-subtitle">
								{INFO.projects.subtitle}
							</p>
							<div className="projects-hero-blob"></div>
						</div>

						<div className="projects-list">
							{INFO.projects.projects.map((project, index) => (
								<div className="all-projects-item" key={index}>
									<Project
										logo={project.logo}
										title={project.title}
										description={project.description}
										linkText={project.linkText}
										link={project.link}
										technologies={project.technologies}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
