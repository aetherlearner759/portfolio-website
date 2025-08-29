import commonStyle from "../../common.module.css";
import style from "./ProjectSection.module.css";
import getProjects from "@/data/projects/getProjectData";
import ProjectList from "@components/sections/projects/ProjectList/ProjectList";

export default function ProjectSection() {
	const projects = getProjects();

	return (
		<div className={`${commonStyle.root} ${style.root}`}>
			<h2 className={commonStyle["section-header"]}>Projects</h2>
			<ProjectList projects={projects} />
		</div>
	);
}
