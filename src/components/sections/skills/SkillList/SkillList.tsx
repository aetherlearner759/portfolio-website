import style from "./SkillList.module.css";
import type { Skill } from "@/data/skills/skills.type";
import SkillCard from "../SkillCard/SkillCard";

interface Props {
	skills: Skill[];
}

export default function SkillList(props: Props) {
	return (
		<ul className={style.container}>
			{props.skills.map((s) => (
				<li key={s.id}>
					<SkillCard skillData={s} />
				</li>
			))}
		</ul>
	);
}
