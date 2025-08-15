import { iconMap } from "@components/sections/skills/skill-icons";
import style from "./SkillCard.module.css";
import type { Skill, SkillExpertise } from "@/data/skills/skills.type";

interface Props {
	skillData: Skill;
}

export default function SkillCard(props: Props) {
	const s = props.skillData;

	const expertiseRank = toInt(s.expertise);

	return (
		<span className={style.card}>
			<div className={style.icon}>{iconMap.get(s.id)}</div>
			<p className={style.name}>{s.name}</p>
			<div className={style.expertise}>
				<div className={style["expertise-bar"]}>
					{[1, 2, 3, 4].map((index) => {
						return (
							<span
								key={index}
								className={index <= expertiseRank ? style.active : ""}
							></span>
						);
					})}
				</div>
				<p>{s.expertise}</p>
			</div>
		</span>
	);
}

function toInt(exp: SkillExpertise): number {
	switch (exp) {
		case "Beginner":
			return 1;
		case "Intermediate":
			return 2;
		case "Advanced":
			return 3;
		case "Expert":
			return 4;
		default:
			throw Error("unaccounted case");
	}
}
