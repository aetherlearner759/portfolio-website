import style from "./ProjectList.module.css";
import type { Project } from "@/data/projects/project.type";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface Props {
	projects: Project[];
}

function getCenterScrollPosition(
	scrollContainer: HTMLElement,
	child: HTMLElement,
) {
	const childOffsetLeft = child.offsetLeft;
	const containerWidth = scrollContainer.clientWidth;
	const childWidth = child.offsetWidth;
	return childOffsetLeft - containerWidth / 2 + childWidth / 2;
}

export default function ProjectList(props: Props) {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const selectedProjectRef = useRef<HTMLDivElement>(null);
	const projectContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (
			projectContainerRef.current === null ||
			selectedProjectRef.current === null
		) {
			throw Error("Ref unexpectedly not set");
		}
		const scrollToLeft = getCenterScrollPosition(
			projectContainerRef.current,
			selectedProjectRef.current,
		);

		projectContainerRef.current.scrollTo({
			left: scrollToLeft,
			behavior: "smooth",
		});

		function syncSelectionScrollWithResize() {
			if (
				projectContainerRef.current === null ||
				selectedProjectRef.current === null
			) {
				throw Error("Ref unexpectedly not set");
			}
			const scrollToLeft = getCenterScrollPosition(
				projectContainerRef.current,
				selectedProjectRef.current,
			);
			projectContainerRef.current.scrollTo({
				left: scrollToLeft,
				behavior: "instant",
			});
		}
		window.addEventListener("resize", syncSelectionScrollWithResize);

		return () => {
			window.removeEventListener("resize", syncSelectionScrollWithResize);
		};
	}, [selectedIndex]);

	function handleLeftNavigationClick() {
		setSelectedIndex(
			(x) => (x - 1 + props.projects.length) % props.projects.length,
		);
	}

	function handleRightNavigationClick() {
		setSelectedIndex((x) => (x + 1) % props.projects.length);
	}

	return (
		<div className={style.container}>
			<div className={style["project-container"]} ref={projectContainerRef}>
				{props.projects.map((p, index) => (
					<div
						key={p.id}
						className={`${style.project} ${selectedIndex === index ? style.active : ""}`}
						onClick={() => {
							setSelectedIndex(index);
						}}
						ref={selectedIndex == index ? selectedProjectRef : null}
					>
						<ProjectCard project={p} />
					</div>
				))}
			</div>
			<div className={style["btn-container"]}>
				<button
					className={`${style.btn} ${style["left"]}`}
					type="button"
					onClick={handleLeftNavigationClick}
				>
					<FaCaretLeft />
				</button>
				<button
					className={`${style.btn} ${style["right"]}`}
					type="button"
					onClick={handleRightNavigationClick}
				>
					<FaCaretRight />
				</button>
			</div>
		</div>
	);
}
