import commonStyle from "../../common.module.css";
import Fox from "../Fox/Fox";
import IconSphere from "../IconSphere/IconSphere";
import style from "./AboutSection.module.css";

export default function AboutSection() {
	return (
		<div className={`${commonStyle.root} ${style.root}`}>
			<h2 className={commonStyle["section-header"]}>About Me</h2>

			<div className={style.contents}>
				<div className={style.about}>
					<p className={style["about-text"]}>
						Hello! I'm an aspiring full-stack developer with expertise in
						Javascript and .NET technologies. <br />
						<br />
						I enjoy learning new techonologies and developing expertise by
						working on self-driven projects. <br />
						<br />
						Aside from my passion for development, I like to draw, learn math,
						and watch shows. <br />
					</p>
				</div>

				<div className={style.display}>
					<IconSphere />
					<Fox />
				</div>
			</div>
		</div>
	);
}
