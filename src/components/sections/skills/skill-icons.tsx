import type { SkillID } from "@/data/skills/skills.type";
import type { ReactNode } from "react";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

export const iconMap: Map<SkillID, ReactNode> = new Map();

iconMap.set(
	"C#",
	<>
		<IoArrowRedoCircleSharp />
	</>,
);
