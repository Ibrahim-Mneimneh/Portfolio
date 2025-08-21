import { useEffect, useState } from "react";
import "./styles/technologies.css";
import INFO from "../../data/user";

export default function Technologies({ techRef }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (techRef.current) {
			observer.observe(techRef.current);
		}

		return () => observer.disconnect();
	}, [techRef]);
	return (
		<div className="technologies" ref={techRef}>
			<h2 className="section-title">Technologies</h2>
			<div className="technologies-container">
				{INFO.homepage.technologies.map((skill, index) => {
					const IconComponent = skill.icon;
					return (
						<div
							key={index}
							style={{ animationDelay: `${0.1 * (index + 1)}s` }}
							className={`technology-item ${
								isVisible ? "animate" : ""
							}`}
						>
							<IconComponent className="technology-icon" />
							<span className="technology-label">
								{skill.label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
