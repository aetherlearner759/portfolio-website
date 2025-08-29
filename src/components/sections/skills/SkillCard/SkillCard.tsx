import { iconMap } from "@components/sections/skills/skill-icons";
import style from "./SkillCard.module.css";
import type { Skill } from "@/data/skills/skills.type";

interface Props {
	skillData: Skill;
}

export default function SkillCard(props: Props) {
	const s = props.skillData;

	return (
		<span className={style.card}>
			<div className={style.icon}>{iconMap.get(s.id)}</div>
			<div className={style["right-block"]}>
				<p className={style.name}>{s.name}</p>
				<div className={style.expertise}>
					<div className={style["expertise-bar"]}>
						<div
							className={style["expertise-inner-bar"]}
							style={{ width: `${s.expertisePercentage.toString()}%` }}
						/>
					</div>
					<p>{s.expertisePercentage}%</p>
				</div>
			</div>
		</span>
	);
}
