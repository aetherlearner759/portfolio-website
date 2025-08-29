import style from "./ProjectList.module.css";
import type { Project } from "@/data/projects/project.type";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

interface Props {
	projects: Project[];
}

const MAX_DISPLAY_MORE_COUNT = 3;

export default function ProjectList(props: Props) {
	const projects = props.projects;

	const [numToDisplay, setNumToDisplay] = useState<number>(3);
	const projectsToDisplay = projects.filter((_, index) => index < numToDisplay);

	function handleDisplayMoreClick() {
		setNumToDisplay(
			Math.min(projects.length, numToDisplay + MAX_DISPLAY_MORE_COUNT),
		);
	}

	function handleShowAllClick() {
		setNumToDisplay(projects.length);
	}

	return (
		<div className={style.container}>
			{projectsToDisplay.map((p, index) => (
				<div
					key={p.id}
					className={`${style.project} ${index % 2 == 0 ? style.left : style.right}`}
				>
					<ProjectCard
						project={p}
						variant={index % 2 == 0 ? "left" : "right"}
					/>
				</div>
			))}
			{numToDisplay < projects.length && (
				<div className={style["buttons-row"]}>
					<button onClick={handleDisplayMoreClick}>
						Display{" "}
						{Math.min(projects.length - numToDisplay, MAX_DISPLAY_MORE_COUNT)}{" "}
						More
					</button>
					<button onClick={handleShowAllClick}>Show All</button>
				</div>
			)}
		</div>
	);
}
