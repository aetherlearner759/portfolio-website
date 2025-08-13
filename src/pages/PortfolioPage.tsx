import style from "./PortfolioPage.module.css";
import NavigationTopBar from "@components/navbar/NavigationTopBar/NavigationTopBar";
import DarkModeSliderToggle from "@components/darkmode/DarkModeSliderToggle/DarkModeSliderToggle";
import { useMediaQuery } from "@hooks/mediaquery/useMediaQuery";
import NavigationSideBar from "@components/navbar/NavigationSideBar/NavigationSideBar";
import DarkModeToggle from "@components/darkmode/DarkModeToggle/DarkModeToggle";
import SideHamburgerMenu from "@components/SideHamburgerMenu/SideHamburgerMenu";
import TopHeader from "@components/TopHeader/TopHeader";

export default function PortfolioPage() {
	const isDeviceSmall = useMediaQuery("(max-width: 700px)");

	const links = [
		{ text: "About Me", href: "#hero", active: true },
		{ text: "Projects & Exp", href: "#projects" },
		{ text: "Skills", href: "#skills" },
		{ text: "Education", href: "#education" },
		{ text: "Contact Me", href: "#contact" },
	];
	return (
		<div className={style.page}>
			{isDeviceSmall ? (
				<SideHamburgerMenu>
					<div className={style["side-menu-content"]}>
						<NavigationSideBar links={links} />
						<div className={style["dark-mode-toggle"]}>
							<DarkModeToggle />
						</div>
					</div>
				</SideHamburgerMenu>
			) : (
				<TopHeader>
					<header className={style["top-header-content"]}>
						<NavigationTopBar links={links} />
						<div className={style["dark-mode-slider"]}>
							<DarkModeSliderToggle />
						</div>
					</header>
				</TopHeader>
			)}

			<div id="hero"></div>
			<div id="projects"></div>
			<div id="skills"></div>
			<div id="education"></div>
			<div id="contact"></div>
		</div>
	);
}
