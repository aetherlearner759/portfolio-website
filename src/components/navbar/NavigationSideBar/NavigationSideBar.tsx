import commonStyle from "../common.module.css";
import style from "./NavigationSideBar.module.css";
import { type NavItem } from "../NavItem.type";
import NavigationTracker from "../NavigationTracker/NavigationTracker";
import { useState } from "react";

interface Props {
	links: NavItem[];
}

export default function NavigationSideBar(props: Props) {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const linkRefs = props.links.map((l) => l.domRef);

	function handleActiveIndexChanged(newIndex: number) {
		setSelectedIndex(newIndex);
	}

	return (
		<nav className={commonStyle.root}>
			<NavigationTracker
				toTrack={linkRefs}
				onActiveIndexChanged={handleActiveIndexChanged}
			>
				<ul className={style.links}>
					{props.links.map((link, index) => (
						<li
							key={link.text}
							className={`${commonStyle["link-reset"]} ${style.link} ${selectedIndex === index ? style.active : ""}`}
						>
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>
			</NavigationTracker>
		</nav>
	);
}
