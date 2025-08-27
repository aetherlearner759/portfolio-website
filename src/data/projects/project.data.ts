import { getImageURL } from "@/utility/asset-utility";
import type { Project } from "./project.type";

export const projects: Project[] = [
	{
		id: "Project1",
		name: "My First Project",
		tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
		shortDescription:
			"By knowledge from various disciplines and by gathering each infinity stone, I was able to finally create a todo app.",
		thumbnailImportPath: getImageURL(
			"Cat Fish 2 by admiller - CC BY 2.0 License.jpg",
		),
		githubLink: new URL("https://developer.mozilla.org"),
		websiteLink: new URL("https://developer.mozilla.org"),
		serverLink: new URL("https://developer.mozilla.org"),
		demoVideoLink: new URL("https://developer.mozilla.org"),
		learnMoreLink: new URL("https://developer.mozilla.org"),
	},

	{
		id: "Project2",
		name: "My Second Project",
		tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
		shortDescription:
			"By knowledge from various disciplines and by gathering each infinity stone, I was able to finally create a todo app.",
		thumbnailImportPath: getImageURL(
			"Cat Fish 2 by admiller - CC BY 2.0 License.jpg",
		),
		githubLink: new URL("https://developer.mozilla.org"),
		websiteLink: new URL("https://developer.mozilla.org"),
		serverLink: new URL("https://developer.mozilla.org"),
		demoVideoLink: new URL("https://developer.mozilla.org"),
		learnMoreLink: new URL("https://developer.mozilla.org"),
	},

	{
		id: "Project3",
		name: "My Third Project",
		tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
		shortDescription:
			"By knowledge from various disciplines and by gathering each infinity stone, I was able to finally create a todo app.",
		thumbnailImportPath: getImageURL(
			"Cat Fish 2 by admiller - CC BY 2.0 License.jpg",
		),
		githubLink: new URL("https://developer.mozilla.org"),
		websiteLink: new URL("https://developer.mozilla.org"),
		serverLink: new URL("https://developer.mozilla.org"),
		demoVideoLink: new URL("https://developer.mozilla.org"),
		learnMoreLink: new URL("https://developer.mozilla.org"),
	},

	{
		id: "Project4",
		name: "My Fourth Project",
		tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
		shortDescription:
			"By knowledge from various disciplines and by gathering each infinity stone, I was able to finally create a todo app.",
		thumbnailImportPath: getImageURL(
			"Cat Fish 2 by admiller - CC BY 2.0 License.jpg",
		),
		githubLink: new URL("https://developer.mozilla.org"),
		websiteLink: new URL("https://developer.mozilla.org"),
		serverLink: new URL("https://developer.mozilla.org"),
		demoVideoLink: new URL("https://developer.mozilla.org"),
		learnMoreLink: new URL("https://developer.mozilla.org"),
	},

	{
		id: "Project5",
		name: "My Fifth Project",
		tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
		shortDescription:
			"By knowledge from various disciplines and by gathering each infinity stone, I was able to finally create a todo app.",
		thumbnailImportPath: getImageURL(
			"Cat Fish 2 by admiller - CC BY 2.0 License.jpg",
		),
		githubLink: new URL("https://developer.mozilla.org"),
		websiteLink: new URL("https://developer.mozilla.org"),
		serverLink: new URL("https://developer.mozilla.org"),
		demoVideoLink: new URL("https://developer.mozilla.org"),
		learnMoreLink: new URL("https://developer.mozilla.org"),
	},
];
