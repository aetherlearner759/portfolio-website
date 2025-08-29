export interface Project {
	id: string;
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
