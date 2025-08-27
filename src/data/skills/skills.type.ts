export type SkillID = string;

export const SKILL_CATEGORIES = [
	"Frontend",
	"Backend",
	"Tools",
	"Conceptual",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export interface Skill {
	id: string;
	name: string;
	categories: SkillCategory[];
	expertisePercentage: number;
}
