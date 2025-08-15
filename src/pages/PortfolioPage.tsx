import style from "./PortfolioPage.module.css";
import NavigationTopBar from "@components/navbar/NavigationTopBar/NavigationTopBar";
import DarkModeSliderToggle from "@components/darkmode/DarkModeSliderToggle/DarkModeSliderToggle";
import { useMediaQuery } from "@hooks/mediaquery/useMediaQuery";
import NavigationSideBar from "@components/navbar/NavigationSideBar/NavigationSideBar";
import DarkModeToggle from "@components/darkmode/DarkModeToggle/DarkModeToggle";
import SideHamburgerMenu from "@components/SideHamburgerMenu/SideHamburgerMenu";
import TopHeader from "@components/TopHeader/TopHeader";
import SkillSection from "@components/sections/skills/SkillSection/SkillSection";
import ProjectSection from "@components/sections/projects/ProjectSection/ProjectSection";
import AboutSection from "@components/sections/about/AboutSection/AboutSection";
import EducationSection from "@components/sections/education/EducationSection/EducationSection";
import ContactSection from "@components/sections/contact/ContactSection/ContactSection";
import IntroSection from "@/components/sections/intro/IntroSection/IntroSection";
import Footer from "@/components/Footer/Footer";

export default function PortfolioPage() {
	const isDeviceSmall = useMediaQuery("(max-width: 700px)");

	const links = [
		{ text: "Home", href: "#intro", active: true },
		{ text: "About", href: "#about" },
		{ text: "Skills", href: "#skills" },
		{ text: "Projects & Exp", href: "#projects" },
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

			<main>
				<section
					id="intro"
					className={`${style.section} ${style["home-section"]}`}
				>
					<IntroSection />
				</section>
				<section
					id="about"
					className={`${style.section} ${style["about-section"]}`}
				>
					<AboutSection />
				</section>
				<section
					id="skills"
					className={`${style.section} ${style["skills-section"]}`}
				>
					<SkillSection />
				</section>
				<section
					id="projects"
					className={`${style.section} ${style["projects-section"]}`}
				>
					<ProjectSection />
				</section>
				<section
					id="education"
					className={`${style.section} ${style["education-section"]}`}
				>
					<EducationSection />
				</section>
				<section
					id="contact"
					className={`${style.section} ${style["contact-section"]}`}
				>
					<ContactSection />
				</section>
			</main>

			<footer className={style.footer}>
				<Footer />
			</footer>
		</div>
	);
}
