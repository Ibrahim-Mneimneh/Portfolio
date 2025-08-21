import INFO from "../../data/user";
import thirdPlaceIcon from "../../MyImages/icons8-third-place-48.png";
import "./styles/achievements.css";
export default function Achievements() {
	return (
		<div className="achievements">
			<h2 className="section-title">Achievements</h2>
			<ul className="achievements-list">
				{INFO.homepage.achievements.map((achievement, index) => (
					<li key={index} className="achievement-item">
						<img
							src={thirdPlaceIcon}
							alt="Third Place Icon"
							className="achievement-icon"
						/>
						<span className="achievement-text">{achievement}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
