import style from "./ProjectCard.module.css";
import type { Project } from "@/data/projects/project.type";
import { FaDesktop, FaServer, FaGithub, FaYoutube } from "react-icons/fa";
import ProjectTag from "../ProjectTag/ProjectTag";

interface Props {
	project: Project;
	variant?: "left" | "right";
}

export default function ProjectCard({ variant = "left", project }: Props) {
	return (
		<div
			className={`${style.container} ${variant === "left" ? style["left-variant"] : style["right-variant"]}`}
		>
			<img
				className={style.thumbnail}
				src={project.thumbnailImportPath.href}
				alt={`${project.name} thumbnail`}
			/>
			<div className={style.contents}>
				<h3>{project.name}</h3>
				<div className={style.tags}>
					{project.tags.map((t) => (
						<ProjectTag key={t} tag={t} />
					))}
				</div>
				<p>{project.shortDescription}</p>
				<div className={style["links-row"]}>
					{project.learnMoreLink && (
						<a
							className={style["learn-more-link"]}
							href={project.learnMoreLink.href}
							target="_self"
							aria-label="Learn more about project"
						>
							Learn More
						</a>
					)}

					{project.websiteLink && (
						<a
							href={project.websiteLink.href}
							target="_blank"
							aria-label="Visit website"
							title="Visit website"
						>
							<FaDesktop />
						</a>
					)}
					{project.serverLink && (
						<a
							href={project.serverLink.href}
							target="_blank"
							aria-label="Visit backend server"
							title="Visit backend server"
						>
							<FaServer />
						</a>
					)}
					{project.demoVideoLink && (
						<a
							href={project.demoVideoLink.href}
							target="_blank"
							aria-label="View demo video"
							title="View demo video"
						>
							<FaYoutube />
						</a>
					)}
					<a
						href={project.githubLink.href}
						target="_blank"
						aria-label="View source code"
						title="View source code"
					>
						<FaGithub />
					</a>
				</div>
			</div>
		</div>
	);
}
