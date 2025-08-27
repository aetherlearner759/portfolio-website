export type ProjectID =
	| "Project1"
	| "Project2"
	| "Project3"
	| "Project4"
	| "Project5";

export interface Project {
	id: ProjectID;
	thumbnailImportPath: URL;
	name: string;
	tags: string[];
	shortDescription: string;
	githubLink: URL;
	websiteLink?: URL;
	serverLink?: URL;
	demoVideoLink?: URL;
	learnMoreLink?: URL;
}
