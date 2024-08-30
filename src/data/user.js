import sociaLink from "./../MyImages/sociaLink.png";
import workout from "./../MyImages/workout.png";
import homeBudget from "./../MyImages/homeBudget.png";
import marketing from "./../MyImages/marketing.png";
import clock from "./../MyImages/clock.png";
import campingSite from "../MyImages/campingSite.png";
import cropSync from "../MyImages/cropSync.jpg";
import todo from "../MyImages/todo.jpg";
const INFO = {
	main: {
		title: "Ibrahim Mneimneh",
		name: "Ibrahim Mneimneh",
		email: "Ib79mneimneh@gmail.com",
		logo: "",
	},

	socials: {
		github: "https://github.com/Ibrahim-Mneimneh",
		linkedin: "https://www.linkedin.com/in/ibrahim-mneimneh-91b654235/",
		instagram:
			"https://www.instagram.com/ibrahim_mneimneh/?next=%2Freel%2FCr6Nkywgxjg%2F",
	},

	homepage: {
		title: "Welcome! I'm Ibrahim Mneimneh",
		description:
			"Welcome to my portfolio! I’m a passionate and versatile Computer Engineer specializing in AI development, software engineering, and full-stack development. My work is driven by a deep commitment to innovation and a desire to build impactful, user-centric solutions. Explore my projects and learn more about how I can contribute to your next big idea.",
	},

	about: {
		title: "Hello, lets get to know each other...",
		description:
			"I hold a Bachelor's Degree in Computer Engineering from Beirut Arab University, graduating with a GPA of 3.48/4. My academic experience has equipped me with a robust foundation in data structures, algorithms, database systems, and machine learning. I am fluent in English and Arabic, with basic proficiency in German, and thrive in diverse, fast-paced environments. In addition to my formal education, I have earned certifications in backend development, relational databases, and frontend libraries. My technical skills encompass both frontend and backend development, database management, cloud platforms, and AI tools, allowing me to tackle a wide range of projects.",
		description_2:
			"Beyond my technical skills, I have a deep passion for the outdoors. I love hiking and exploring nature, which helps me stay grounded and inspired. I also enjoy team games, as they reflect my belief in the power of collaboration and teamwork. My attention to detail is something I bring into every aspect of my life, whether I'm coding a complex application or organizing a weekend hike. Despite being a quiet and kind individual, I'm always ready to lend a hand and support those around me.",
		achievements: [
			"Place in the AI Challenge hosted by Zaka.ai.",
			"Place in the IEEE Senior Engineering Project Competition.",
		],
	},

	projects: [
		{
			title: "CropSync",
			description:
				"An agricultural surveillance platform that employs AI and sensors to detect crop diseases, offer irrigation, fertilization, and crop recommendations.",
			logo: cropSync,
			linkText: "View Github-Repo",
			link: "https://github.com/Ibrahim-Mneimneh/CropSync",
			technologies: [
				"Nodejs",
				"Mongodb",
				"Raspberry Pi",
				"Flutter",
				"AWS",
			],
		},
		{
			title: "Travel Camp Landing Page",
			description: "A single-page landing site for camping enthusiasts.",
			logo: campingSite,
			linkText: "View Project",
			link: "https://camping-landing-page.onrender.com/",
			technologies: ["Nextjs", "TypeScript", "Tailwindcss"],
		},
		{
			title: "ToDo Buddy",
			description:
				"A todo application with the focus on security, featuring 2FA and many other.",
			logo: todo,
			linkText: "View Github-Repo",
			link: "https://github.com/Ibrahim-Mneimneh/ToDoListFlutter",
			technologies: ["Flutter", "JavaScript", "Nodejs", "Mongodb"],
		},
		{
			title: "SociaLink",
			description:
				"An Instagram-like social media platform offering core user functionalities like following, posting, and commenting.",
			logo: sociaLink,
			linkText: "View Github-Repo",
			link: "",
			technologies: ["JavaScript", "React", "Mongodb", "Nodejs"],
		},

		{
			title: "Workout-Buddy",
			description:
				"A workout tracker that records your workout details, featuring user authentication.",
			logo: workout,
			linkText: "View Project",
			link: "https://workout-app-l7ae.onrender.com/",
			technologies: ["JavaScript", "React", "Mongodb", "Nodejs"],
		},

		{
			title: "Home Budget",
			description:
				"A budget management application designed to help users track expenses easily featuring user authentication.",
			logo: homeBudget,
			linkText: "View Github-Repo",
			link: "https://github.com/Ibrahim-Mneimneh/Budget-App/tree/master",
			technologies: ["JavaScript", "React"],
		},

		{
			title: "Service Marketing Site",
			description:
				"A personal project that allowed me to apply my knowledge at that time.",
			logo: marketing,
			linkText: "View Github-Repo",
			link: "https://github.com/Ibrahim-Mneimneh/React",
			technologies: ["JavaScript", "React"],
		},

		{
			title: "Many Other Projects",
			description:
				"Including a Calculator, random quote site, to-do list site, Drum app, clock site. All in my react repository in Github.",
			logo: clock,
			linkText: "View Project",
			link: "https://github.com/Ibrahim-Mneimneh/React",
			technologies: ["JavaScript", "React"],
		},
	],
};

export default INFO;
