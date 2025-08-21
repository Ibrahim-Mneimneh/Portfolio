import "./styles/project.css";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({
	logo,
	title,
	description,
	linkText,
	link,
	technologies,
}) => {
	return (
		<div className="project-card">
			<div className="project-logo">
				<img
					src={logo}
					alt={`${title} logo`}
					loading="lazy"
				/>
			</div>
			<div className="project-content">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				<div className="project-technologies">
					{technologies.map((tech, index) => {
						const IconComponent = tech.icon;
						return (
							<span key={index} className="technology-pill">
								<IconComponent className="technology-icon" />
								<span className="technology-name">
									{tech.name}
								</span>
							</span>
						);
					})}
				</div>
				<Link to={link} className="project-link">
					<span className="project-link-text">{linkText}</span>
					<FaExternalLinkAlt className="project-link-icon" />
				</Link>
			</div>
		</div>
	);
};

export default Project;
