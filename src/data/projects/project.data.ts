import { getImageURL } from "@/utility/asset-utility";
import type { Project } from "./project.type";

export const projects: Project[] = [
	{
		id: "QuickCanvas",
		name: "Quick Canvas",
		tags: ["C#", ".NET", "WPF", "MVC", "MSTest"],
		shortDescription:
			"Windows desktop canvas application! With ease of use in mind, draw quick notes and save the result as png.",
		thumbnailImportPath: getImageURL("Quick Canvas Thumbnail.png"),
		githubLink: new URL("https://github.com/aetherlearner759/Quick-Canvas"),
	},

	{
		id: "DailyVocab",
		name: "Daily Vocab",
		tags: ["Kotlin", "Android SDK", "SQL", "Room", "Gradle", "JUnit"],
		shortDescription:
			"An vocabulary android app. Learn new words everyday and expand your vocabulary",
		thumbnailImportPath: getImageURL("Daily Vocab Thumbnail.png"),
		githubLink: new URL("https://github.com/aetherlearner759/DailyVocab"),
	},

	{
		id: "PortfolioWebsite",
		name: "Portfolio Website",
		tags: ["React", "Javascript", "HTML", "CSS", "Vite"],
		shortDescription: "My portfolio website you are currently seeing",
		thumbnailImportPath: getImageURL("Portfolio Website Thumbnail.png"),
		githubLink: new URL(
			"https://github.com/aetherlearner759/portfolio-website",
		),
	},
];
