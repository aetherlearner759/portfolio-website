import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import useDarkMode from "@hooks/darkmode/useDarkMode";
import commonStyle from "../common.module.css";
import style from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
	const [inDarkMode, setInDarkMode] = useDarkMode();

	function handleChange() {
		setInDarkMode((x) => !x);
	}

	return (
		<label
			className={`${style.toggle} ${commonStyle.root}`}
			aria-label="Dark mode toggle"
		>
			<input
				className={style.checkbox}
				type="checkbox"
				checked={inDarkMode}
				onChange={handleChange}
			/>
			<IoMdSunny className={`${style.icon} ${style.sun}`} />
			<FaMoon className={`${style.icon} ${style.moon}`} />
		</label>
	);
}
