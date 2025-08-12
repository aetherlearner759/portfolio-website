import style from "./NavigationTopBar.module.css";
import { type NavItem } from "../NavItem.type";
import { useState } from "react";

interface Props {
	links: NavItem[];
}

export default function NavigationTopBar(props: Props) {
	const [lastClicked, setLastClicked] = useState<string | null>(null);

	return (
		<nav>
			<ul className={style.links}>
				{props.links.map((link) => (
					<li
						key={link.text}
						onClick={() => {
							setLastClicked(link.text);
						}}
						className={`${style.link} ${lastClicked === link.text ? style.active : ""}`}
					>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
