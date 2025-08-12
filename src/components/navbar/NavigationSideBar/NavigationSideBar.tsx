import style from "./NavigationSideBar.module.css";
import { type NavItem } from "../NavItem.type";

interface Props {
	links: NavItem[];
}

export default function NavigationSideBar(props: Props) {
	return (
		<nav>
			<ul className={style.links}>
				{props.links.map((link) => (
					<li
						key={link.text}
						className={`${style.link} ${link.active ? style.active : ""}`}
					>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
