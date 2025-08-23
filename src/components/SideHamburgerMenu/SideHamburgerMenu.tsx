import { useState, type PropsWithChildren } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./SideHamburgerMenu.module.css";

export default function SideHamburgerMenu(props: PropsWithChildren) {
	const [displayed, setDisplayed] = useState<boolean>(false);

	function handleHamburgerClick() {
		setDisplayed(true);
	}

	function handleOutsideClick() {
		setDisplayed(false);
	}

	return (
		<>
			<button className={style["icon-btn"]} type="button">
				<GiHamburgerMenu
					className={style.icon}
					onClick={handleHamburgerClick}
				/>
			</button>
			<div
				className={style["click-outside-area"]}
				onClick={handleOutsideClick}
			></div>
			<div
				className={`${style["side-hamburger-menu"]} ${displayed ? style.show : ""}`}
			>
				{props.children}
			</div>
		</>
	);
}
