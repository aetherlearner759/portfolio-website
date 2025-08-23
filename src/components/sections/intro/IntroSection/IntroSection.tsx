import commonStyle from "../../common.module.css";
import style from "./IntroSection.module.css";
import { FaCaretDown } from "react-icons/fa";

export default function IntroSection() {
	return (
		<div className={`${commonStyle.root} ${style.root}`}>
			<h1 className={style.title}>Scott Hur</h1>
			<p className={style.subtitle}>Aspiring Full-Stack Developer</p>

			<div className={style["scroll-indicator"]}>
				<p className={style["scroll-indicator-text"]}>Scroll down</p>
				<FaCaretDown />
			</div>
		</div>
	);
}
