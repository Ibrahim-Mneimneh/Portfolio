import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./styles/experience.css";
import INFO from "../../data/user";

export default function Experience() {
	return (
		<div className="experienceSection">
			<h2 className="section-title">Experience</h2>
			<div className="experienceContainer">
				{INFO.homepage.experience.map((exp, index) => (
					<div key={index} className="experienceCard">
						<div className="experienceHeader">
							<div className="experienceLeft">
								<div className="roleHeader">
									<FaBriefcase className="roleIcon" />
									<h3 className="roleTitle">{exp.role}</h3>
								</div>
								<p className="companyName">{exp.company}</p>
								<div className="experienceMeta">
									<div className="metaItem">
										<FaCalendarAlt />
										<span>
											{exp.startDate} - {exp.endDate}
										</span>
									</div>
									<div className="metaItem">
										<FaMapMarkerAlt />
										<span>{exp.location}</span>
									</div>
								</div>
							</div>
						</div>
						<p className="experienceDescription">
							{exp.description}
						</p>
						<div className="technologiesContainer">
							{exp.technologies.map((tech, techIndex) => {
								const IconComponent = tech.icon;
								return (
									<span key={techIndex} className="techBadge">
										<IconComponent className="techBadgeIcon" />
										{tech.name}
									</span>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
