import commonStyle from "../../common.module.css";
import style from "./SkillSection.module.css";
import getSkills from "@data/skills/getSkillData";
import { type Skill, type SkillCategory } from "@data/skills/skills.type";
import SkillList from "../SkillList/SkillList";
import { useMemo, useState, type ReactNode } from "react";
import { IoServer } from "react-icons/io5";
import { FaDesktop } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";

type Category = SkillCategory | "All";
const tabIcons: { [key: string]: ReactNode } = {
	Backend: <IoServer />,
	Frontend: <FaDesktop />,
	Tools: <FaWrench />,
	All: <IoEarth />,
};

export default function SkillSection() {
	const [selectedCategory, setSelectedCategory] = useState<Category>("All");

	const skills: Skill[] = getSkills("NET Developer");
	const skillsToDisplay: Skill[] = useMemo(() => {
		return selectedCategory === "All"
			? skills
			: skills.filter((s) => s.category === selectedCategory);
	}, [skills, selectedCategory]);

	return (
		<div className={`${commonStyle.root} ${style.root}`}>
			<h2 className={commonStyle["section-header"]}>Skills</h2>

			<div className={style["tabs-header"]}>
				{(["All", "Frontend", "Backend", "Tools"] as Category[]).map((c) => {
					return (
						<button
							key={c}
							type="button"
							className={`${style["tab-btn"]} ${selectedCategory === c ? style.active : ""}`}
							onClick={() => {
								setSelectedCategory(c);
							}}
						>
							{tabIcons[c]}
							<span>{c}</span>
						</button>
					);
				})}
			</div>

			<SkillList skills={skillsToDisplay} />
		</div>
	);
}
