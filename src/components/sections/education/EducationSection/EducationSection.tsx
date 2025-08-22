import commonStyle from "../../common.module.css";
import style from "./EducationSection.module.css";
import { FaGraduationCap } from "react-icons/fa6";

export default function EducationSection() {
	return (
		<div className={commonStyle.root}>
			<h2 className={commonStyle["section-header"]}>Education</h2>

			<div className={style["education-container"]}>
				<FaGraduationCap />
				<p className={style.program}>
					Bachelor of Science with Honors - Computing Science
				</p>
				<p className={style.uni}>University of Alberta</p>
				<p className={style.description}>
					Graduated with First Class Honors <br />
					<br />
					Computer Science Course GPA: 3.9/4 out of 17 courses <br />
					Math Course GPA: 4.0/4.0 out of 12 courses <br />
					<br />
					<div>
						<p>Relevant Courses:</p>
						<ul className={style["course-list"]}>
							<li>Intro to Software Engineering</li>
							<li>File And Database Management</li>
							<li>Computer Networks</li>
							<li>Operating System Concepts</li>
							<li>Web Applications and Architecture</li>
							<li>Software Quality</li>
						</ul>
					</div>
				</p>
			</div>
		</div>
	);
}
