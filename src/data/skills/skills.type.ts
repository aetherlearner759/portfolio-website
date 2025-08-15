export type SkillID =
	| "C#"
	| "HTML"
	| "CSS"
	| "JavascriptClient"
	| "JavascriptServer"
	| "Rust";
export type SkillCategory = "Backend" | "Frontend" | "Tools";
export type SkillExpertise =
	| "Beginner"
	| "Intermediate"
	| "Advanced"
	| "Expert";

export interface Skill {
	id: SkillID;
	name: string;
	category: SkillCategory;
	expertise: SkillExpertise;
}
