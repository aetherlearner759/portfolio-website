import type { Skill, SkillID } from "./skills.type";
import { skills } from "./skill.data";
import { deepFreeze } from "@/utility/javascript-utility";

export type FeatureKey = "NET Developer" | "C# Developer";

const featureGroupBuilder = function () {
	const result: { [key: string]: Skill[] } = {};

	return {
		add(featureKey: FeatureKey, skillIds: SkillID[]) {
			if (featureKey in result) {
				throw Error("Conflicting feature key");
			}
			result[featureKey] = skillIds.map((sid) => {
				if (!(sid in skills)) {
					throw Error(`Undefined skill key ${sid}`);
				}
				return skills[sid];
			});
			return this;
		},
		build() {
			return deepFreeze(result);
		},
	};
};

export const featuredSkillMap = featureGroupBuilder()
	.add("NET Developer", [
		"Typescript",
		"Javascript",
		"HTML",
		"CSS",
		"Tailwind",
		"C#",
		"ASP.NET",
		"SQL",
		"Microsoft SQL Server",
		"EF",
		"Dapper",
		"MongoDB",
		"PowerShell",
		"BASH",
		"Git",
		"Github",
		"Vite",
		"NPM",
		"Docker",
	])
	.build();
