import { projects } from "./project.data";
import type { Project } from "./project.type";

export default function getProjects(): Project[] {
	return projects;
}
