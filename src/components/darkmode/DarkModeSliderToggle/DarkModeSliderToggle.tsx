import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import commonStyle from "../common.module.css";
import style from "./DarkModeSliderToggle.module.css";
import useDarkMode from "@hooks/darkmode/useDarkMode";

export default function DarkModeSliderToggle() {
	const [inDarkMode, setInDarkMode] = useDarkMode();

	function handleChange() {
		setInDarkMode((x) => !x);
	}

	return (
		<label
			className={`${style.slider} ${commonStyle.root}`}
			aria-label="Dark mode toggle"
		>
			<input
				className={style.checkbox}
				type="checkbox"
				checked={inDarkMode}
				onChange={handleChange}
			/>
			<span className={style.thumb}>
				<FaMoon className={`${style.icon} ${style.moon}`} />
				<IoMdSunny className={`${style.icon} ${style.sun}`} />
			</span>
		</label>
	);
}
