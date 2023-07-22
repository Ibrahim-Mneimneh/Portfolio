import sociaLink from "./../MyImages/sociaLink.png";
import workout from "./../MyImages/workout.png";
import homeBudget from "./../MyImages/homeBudget.png";
import marketing from "./../MyImages/marketing.png";
import clock from "./../MyImages/clock.png";
const INFO = {
	main: {
		title: "Ibrahim's Portfolio",
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
		title: "Full-stack Web developer, and Junior Software Engineer.",
		description:
			"I am a full-stack developer with expertise in Node.js & React. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy coming up with solutions and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow both as a person and a developer.",
	},

	about: {
		title: "I'm a 21 years old Lebanese Junior Software Engineer.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Some of these projects start from as simple as a random Quote website to creating and managing an instagram-like social media. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Many of the listed projects took place months or even years before... but its never the same for me, as always getting better and better.",
	},

	articles: {
		title: "I'm passionate about technology and self & career development.",
		description:
			"I always try to improve my programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "SociaLink",
			description:
				"An instagram-like social-media site that allows you to post, view, like and comment on your followers posts. (This site is almost ready for deployment).",
			logo: sociaLink,
			linkText: "",
			link: "",
		},

		{
			title: "Workout-Buddy",
			description:
				"A Workout planner that has your workout info that you could add/delete from after logging in.This site offers user-Authentication using cookies. This site is deployed and you can use it after signing up.",
			logo: workout,
			linkText: "View Project",
			link: "https://workout-app-l7ae.onrender.com/",
		},

		{
			title: "Home Budget",
			description:
				"A budget managing site that allows its users to login/signup to manage their budgets and expenses to help manage it in a user-friendly way.This site offers user-Authentication using cookies. This project is finished yet it wasn't deployed.",
			logo: homeBudget,
			linkText: "",
			link: "",
		},

		{
			title: "Service Marketing Site",
			description:
				"One of my personal projects which helped me apply my knowledge at that time.",
			logo: marketing,
			linkText: "",
			link: "",
		},

		{
			title: "Many Other Projects",
			description:
				"Including a Calculator, random quote site, to-do list site, Drums site, clock site. All in my react repository in Github.",
			logo: clock,
			linkText: "View Project",
			link: "https://github.com/Ibrahim-Mneimneh/React",
		},
	],
};

export default INFO;
