import INFO from "../../data/user";
import profileImage from "../../MyImages/IbrahimsProfile.png";
import "./styles/homePageHero.css";

export default function HomePageHero({ profileRef }) {
	return (
		<div className="homepage-hero">
			<div className="homepage-hero-left-side">
				<h1 className="title homepage-title">{INFO.homepage.title}</h1>
				<p className="homepage-subtitle">{INFO.homepage.description}</p>
			</div>
			<div className="homepage-hero-right-side">
				<div className="homepage-image-container">
					<div className="homepage-image-wrapper">
						<img
							ref={profileRef}
							src={profileImage}
							alt="Profile of Ibrahim"
							className="profile-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
