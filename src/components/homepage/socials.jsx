import { FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";
import INFO from "../../data/user";
import "./styles/socials.css";

export default function Socials() {
	const { email } = INFO.main;
	const { github, instagram } = INFO.socials;
	return (
		<div className="socials">
			<a
				href={github}
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub Profile"
			>
				<FaGithub className="homepage-social-icon" />
			</a>
			<a
				href={instagram}
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram Profile"
			>
				<FaInstagram className="homepage-social-icon" />
			</a>
			<a
				href={`mailto:${email}`}
				target="_blank"
				rel="noreferrer"
				aria-label="Mail Me"
			>
				<FaMailBulk className="homepage-social-icon" />
			</a>
		</div>
	);
}
