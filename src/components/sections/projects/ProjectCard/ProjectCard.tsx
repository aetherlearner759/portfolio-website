import style from "./ProjectCard.module.css";
import type { Project } from "@/data/projects/project.type";
import { FaDesktop, FaServer, FaGithub, FaYoutube } from "react-icons/fa";

interface Props {
	project: Project;
}

export default function ProjectCard(props: Props) {
	const proj = props.project;
	return (
		<div className={style.container}>
			<img className={style.thumbnail} src={proj.thumbnailImportPath.href} />
			<div className={style.contents}>
				<p className={style.title}>{proj.name}</p>
				<p className={style.description}>{proj.shortDescription}</p>
				<div className={style["links-row"]}>
					{proj.learnMoreLink && (
						<a
							className={style["learn-more-link"]}
							href={proj.learnMoreLink.href}
							target="_self"
							aria-label="Learn more about project"
						>
							Learn More
						</a>
					)}

					{proj.websiteLink && (
						<a
							href={proj.websiteLink.href}
							target="_blank"
							aria-label="Visit website"
							title="Visit website"
						>
							<FaDesktop />
						</a>
					)}
					{proj.serverLink && (
						<a
							href={proj.serverLink.href}
							target="_blank"
							aria-label="Visit backend server"
							title="Visit backend server"
						>
							<FaServer />
						</a>
					)}
					{proj.demoVideoLink && (
						<a
							href={proj.demoVideoLink.href}
							target="_blank"
							aria-label="View demo video"
							title="View demo video"
						>
							<FaYoutube />
						</a>
					)}
					<a
						href={proj.githubLink.href}
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
