import sociaLink from "./../MyImages/sociaLink.png";
import workout from "./../MyImages/workout.png";
import homeBudget from "./../MyImages/homeBudget.png";
import marketing from "./../MyImages/marketing.png";
import clock from "./../MyImages/clock.png";
import campingSite from "../MyImages/campingSite.png";
import cropSync from "../MyImages/cropsync.png";
import todo from "../MyImages/todo.png";
import shopCo from "../MyImages/shop_co.png";

import {
	SiAmazonec2,
	SiAngular,
	SiExpress,
	SiFastapi,
	SiFlutter,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiRaspberrypi,
	SiReact,
	SiRedis,
	SiSwagger,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { FaCss3, FaDatabase, FaDigitalOcean, FaDocker, FaHtml5, FaJava, FaJs, FaLinux, FaNodeJs, FaReact, FaRobot } from "react-icons/fa";

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
		greeting: "Welcome to my Portfolio!",
		lockedgreeting: "Welcome to my Portfolio!",
		title: "AI & Backend Developer",
		description:
			"My work is driven by a deep commitment to innovation and a desire to build impactful, user-centric solutions. Explore my projects and learn more about how I can contribute to your next big idea.",
		studies: [
			{
				type: "Bachelor's",
				major: "Computer Engineering",
				startDate: "Sep. 2020",
				endDate: "Jul. 2024",
				gpa: 3.48,
				gpaOver: 4,
			},
		],
		experience: [
			{
				role: "Backend & AI Engineering Intern",
				company: "U-Glow GmbH",
				startDate: "Apr. 2025",
				endDate: "Jul. 2025",
				location: "Germany",
				description:
					"Fully developed an automation tool for tree & building extraction from satellite imagery to improve construction planning.",
				technologies: [
					{ name: "FastAPI", icon: SiFastapi },
					{ name: "Redis", icon: SiRedis },
					{ name: "SAM", icon: FaRobot },
					{ name: "Docker", icon: FaDocker },
					{ name: "Swagger", icon: SiSwagger },
				],
			},
			{
				role: "Backend Engineer | Freelance",
				company: "",
				description:
					"Built a backend for a multi-location restaurant food ordering mobile app with real-time order tracking.",
				startDate: "Dec. 2024",
				endDate: "Feb. 2025",
				location: "Lebanon",
				technologies: [
					{ name: "TypeScript", icon: SiTypescript },
					{ name: "Express.js", icon: SiExpress },
					{ name: "Redis", icon: SiRedis },
					{ name: "MongoDB", icon: SiMongodb },
					{ name: "Docker", icon: FaDocker },
					{ name: "Swagger", icon: SiSwagger },
					{ name: "Digital Ocean", icon: FaDigitalOcean },
				],
			},
		],
		achievements: [
			"Place in the AI Challenge hosted by Zaka.ai.",
			"Place in the IEEE Senior Engineering Project Competition.",
		],
		technologies: [
			{ icon: FaHtml5, label: "HTML5" },
			{ icon: FaCss3, label: "CSS3" },
			{ icon: SiTailwindcss, label: "Tailwind CSS" },
			{ icon: FaJs, label: "JavaScript" },
			{ icon: SiTypescript, label: "TypeScript" },
			{ icon: FaReact, label: "React" },
			{ icon: SiNextdotjs, label: "Next.js" },
			{ icon: FaNodeJs, label: "Node.js" },
			{ icon: FaJava, label: "Java" },
			{ icon: FaDatabase, label: "SQL" },
			{ icon: SiMongodb, label: "MongoDB" },
			{ icon: FaDocker, label: "Docker" },
			{ icon: FaLinux, label: "Linux" },
			{ icon: SiRaspberrypi, label: "Raspberry Pi" },
		]
	},

	contact: {
		title: "Connect with Me!",
		description1:
			"Thank you for your interest in getting in touch. I welcome your feedback, questions, and suggestions. Please feel free to email me directly at",
		description2:
			". I strive to respond to all messages within 24 hours, although it may take longer during busy periods. You can also use the contact form on my website or connect with me on social media. I look forward to hearing from you.",
	},

	projects: {
		title: "Welcome to my Project Section!",
		subtitle:
			"Explore some of the projects I worked on. Each project shows a bit of my journey and passion for learning and building software through out my career.",
		projects: [
			{
				title: "Shop.Co",
				description:
					"An E-commerce retail site.The backend is almost done. The frontend is still pending :)",
				logo: shopCo,
				linkText: "View Github-Repo",
				link: "https://github.com/Ibrahim-Mneimneh/Shop.Co",
				technologies: [
					{ name: "Angular", icon: SiAngular },
					{ name: "TailwindCSS", icon: SiTailwindcss },
					{ name: "Node.js", icon: SiNodedotjs },
					{ name: "TypeScript", icon: SiTypescript },
					{ name: "MongoDB", icon: SiMongodb },
					{ name: "Redis", icon: SiRedis },
				],
				inDevelopment: true,
			},
			{
				title: "CropSync",
				description:
					"An agricultural surveillance platform that employs AI (U-Net, ResNet50, & Random Forest) and sensors to detect crop diseases, offer irrigation, fertilization, and crop recommendations.",
				logo: cropSync,
				linkText: "View Github-Repo",
				link: "https://github.com/Ibrahim-Mneimneh/CropSync",
				technologies: [
					{ name: "Node.js", icon: SiNodedotjs },
					{ name: "MongoDB", icon: SiMongodb },
					{ name: "Raspberry Pi", icon: SiRaspberrypi },
					{ name: "Flutter", icon: SiFlutter },
					{ name: "AWS", icon: SiAmazonec2 },
				],
				inDevelopment: false,
			},
			{
				title: "ToDo Buddy",
				description:
					"A todo application with the focus on security, featuring 2FA and many other.",
				logo: todo,
				linkText: "View Github-Repo",
				link: "https://github.com/Ibrahim-Mneimneh/ToDoListFlutter",
				technologies: [
					{ name: "Flutter", icon: SiFlutter },
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "Node.js", icon: SiNodedotjs },
					{ name: "MongoDB", icon: SiMongodb },
				],
				inDevelopment: false,
			},
			{
				title: "Travel Camp Landing Page",
				description:
					"A single-page landing site for camping enthusiasts.",
				logo: campingSite,
				linkText: "View Project",
				link: "https://camping-landing-page.onrender.com/",
				technologies: [
					{ name: "Next.js", icon: SiNextdotjs },
					{ name: "TypeScript", icon: SiTypescript },
					{ name: "TailwindCSS", icon: SiTailwindcss },
				],
				inDevelopment: false,
			},
			{
				title: "SociaLink",
				description:
					"An Instagram-like social media platform offering core user functionalities like following, posting, and commenting.",
				logo: sociaLink,
				linkText: "View Github-Repo",
				link: "",
				technologies: [
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "React", icon: SiReact },
					{ name: "MongoDB", icon: SiMongodb },
					{ name: "Node.js", icon: SiNodedotjs },
				],
				inDevelopment: false,
			},

			{
				title: "Workout-Buddy",
				description:
					"A workout tracker that records your workout details, featuring user authentication.",
				logo: workout,
				linkText: "View Project",
				link: "https://workout-app-l7ae.onrender.com/",
				technologies: [
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "React", icon: SiReact },
					{ name: "MongoDB", icon: SiMongodb },
					{ name: "Node.js", icon: SiNodedotjs },
				],
				inDevelopment: false,
			},

			{
				title: "Home Budget",
				description:
					"A budget management application designed to help users track expenses easily featuring user authentication.",
				logo: homeBudget,
				linkText: "View Github-Repo",
				link: "https://github.com/Ibrahim-Mneimneh/Budget-App/tree/master",
				technologies: [
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "React", icon: SiReact },
				],
				inDevelopment: false,
			},

			{
				title: "Service Marketing Site",
				description:
					"A personal project that allowed me to apply my knowledge at that time.",
				logo: marketing,
				linkText: "View Github-Repo",
				link: "https://github.com/Ibrahim-Mneimneh/React",
				technologies: [
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "React", icon: SiReact },
				],
				inDevelopment: false,
			},

			{
				title: "Many Other Projects",
				description:
					"Including a Calculator, random quote site, to-do list site, Drum app, clock site. All in my react repository in Github.",
				logo: clock,
				linkText: "View Project",
				link: "https://github.com/Ibrahim-Mneimneh/React",
				technologies: [
					{ name: "JavaScript", icon: SiJavascript },
					{ name: "React", icon: SiReact },
				],
				inDevelopment: false,
			},
		],
	},
};

export default INFO;
