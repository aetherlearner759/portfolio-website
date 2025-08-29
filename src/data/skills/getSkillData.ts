import { featuredSkillMap, type FeatureKey } from "./feature.data";
import { type Skill } from "./skills.type";

export default function getSkills(feature: FeatureKey): Skill[] {
	return featuredSkillMap[feature];
}
