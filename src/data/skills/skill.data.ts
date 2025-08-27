import { deepFreeze } from "@/utility/javascript-utility";
import { type Skill } from "./skills.type";

const skillsDataBuilder = function () {
	const result: { [key: string]: Skill } = {};

	return {
		add(skill: Skill) {
			if (skill.id in result) {
				throw Error(`Conflicting key ${skill.id}`);
			}
			result[skill.id] = skill;
			return this;
		},
		build(): Readonly<typeof result> {
			return deepFreeze(result);
		},
	};
};

export const skills: { [key: string]: Skill } = skillsDataBuilder()
	.add({
		id: "HTML",
		name: "HTML",
		categories: ["Frontend"],
		expertisePercentage: 95,
	})
	.add({
		id: "CSS",
		name: "CSS",
		categories: ["Frontend"],
		expertisePercentage: 95,
	})
	.add({
		id: "Tailwind",
		name: "Tailwind",
		categories: ["Frontend"],
		expertisePercentage: 75,
	})
	.add({
		id: "Javascript",
		name: "Javascript",
		categories: ["Frontend"],
		expertisePercentage: 95,
	})
	.add({
		id: "Typescript",
		name: "Typescript",
		categories: ["Frontend"],
		expertisePercentage: 95,
	})
	.add({
		id: "C#",
		name: "C#",
		categories: ["Backend"],
		expertisePercentage: 95,
	})
	.add({
		id: "ASP.NET",
		name: "ASP.NET",
		categories: ["Backend"],
		expertisePercentage: 90,
	})
	.add({
		id: "SQL",
		name: "SQL",
		categories: ["Backend"],
		expertisePercentage: 95,
	})
	.add({
		id: "Microsoft SQL Server",
		name: "Microsoft SQL Server",
		categories: ["Backend"],
		expertisePercentage: 90,
	})
	.add({
		id: "EF",
		name: "Entity Framework",
		categories: ["Backend"],
		expertisePercentage: 90,
	})
	.add({
		id: "Dapper",
		name: "Dapper",
		categories: ["Backend"],
		expertisePercentage: 80,
	})
	.add({
		id: "MongoDB",
		name: "MongoDB",
		categories: ["Backend"],
		expertisePercentage: 60,
	})
	.add({
		id: ".NET",
		name: ".NET",
		categories: ["Backend"],
		expertisePercentage: 75,
	})
	.add({
		id: "PowerShell",
		name: "PowerShell",
		categories: ["Tools"],
		expertisePercentage: 60,
	})
	.add({
		id: "BASH",
		name: "BASH",
		categories: ["Tools"],
		expertisePercentage: 60,
	})
	.add({
		id: "Python",
		name: "Python",
		categories: ["Backend", "Tools"],
		expertisePercentage: 80,
	})
	.add({
		id: "Git",
		name: "Git",
		categories: ["Tools"],
		expertisePercentage: 95,
	})
	.add({
		id: "Github",
		name: "Github",
		categories: ["Tools"],
		expertisePercentage: 95,
	})
	.add({
		id: "Vite",
		name: "Vite",
		categories: ["Tools"],
		expertisePercentage: 80,
	})
	.add({
		id: "NPM",
		name: "NPM",
		categories: ["Tools"],
		expertisePercentage: 90,
	})
	.add({
		id: "Nuget",
		name: "Nuget",
		categories: ["Tools"],
		expertisePercentage: 90,
	})
	.add({
		id: "Docker",
		name: "Docker",
		categories: ["Tools"],
		expertisePercentage: 60,
	})
	.add({
		id: "ResponsiveWebDesign",
		name: "Response Web Design",
		categories: ["Conceptual"],
		expertisePercentage: 85,
	})
	.add({
		id: "AccessibleWebDesign",
		name: "Accessible Web Design",
		categories: ["Conceptual"],
		expertisePercentage: 75,
	})
	.build();
