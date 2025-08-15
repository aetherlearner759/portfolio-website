import { deepFreeze } from "@/utility/javascript-utility";
import { type Skill } from "./skills.type";

const skillsDataBuilder = function () {
	const result: { [key: string]: Skill } = {};

	return {
		add(skill: Skill) {
			if (skill.id in result) {
				throw Error("Conflicting key");
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
		id: "C#",
		name: "C#",
		category: "Backend",
		expertise: "Expert",
	})
	.add({
		id: "HTML",
		name: "HTML",
		category: "Frontend",
		expertise: "Expert",
	})
	.add({
		id: "CSS",
		name: "CSS",
		category: "Frontend",
		expertise: "Expert",
	})
	.add({
		id: "Rust",
		name: "Rust",
		category: "Backend",
		expertise: "Beginner",
	})
	.add({
		id: "JavascriptClient",
		name: "Javascript",
		category: "Frontend",
		expertise: "Advanced",
	})
	.add({
		id: "JavascriptServer",
		name: "Javascript",
		category: "Backend",
		expertise: "Intermediate",
	})
	.build();
