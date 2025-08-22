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
import type { NavItem } from "@/components/navbar/NavItem.type";
import { useRef } from "react";

export default function PortfolioPage() {
	const isDeviceSmall = useMediaQuery("(max-width: 700px)");
	const homeSectionRef = useRef<HTMLElement | null>(null);
	const aboutSectionRef = useRef<HTMLElement | null>(null);
	const skillsSectionRef = useRef<HTMLElement | null>(null);
	const projectsSectionRef = useRef<HTMLElement | null>(null);
	const educationSectionRef = useRef<HTMLElement | null>(null);
	const contactSectionRef = useRef<HTMLElement | null>(null);

	const links: NavItem[] = [
		{ text: "Home", href: "#intro", domRef: homeSectionRef },
		{ text: "About", href: "#about", domRef: aboutSectionRef },
		{ text: "Skills", href: "#skills", domRef: skillsSectionRef },
		{ text: "Projects & Exp", href: "#projects", domRef: projectsSectionRef },
		{ text: "Education", href: "#education", domRef: educationSectionRef },
		{ text: "Contact Me", href: "#contact", domRef: contactSectionRef },
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
					ref={homeSectionRef}
				>
					<IntroSection />
				</section>
				<section
					id="about"
					className={`${style.section} ${style["about-section"]}`}
					ref={aboutSectionRef}
				>
					<AboutSection />
				</section>
				<section
					id="skills"
					className={`${style.section} ${style["skills-section"]}`}
					ref={skillsSectionRef}
				>
					<SkillSection />
				</section>
				<section
					id="projects"
					className={`${style.section} ${style["projects-section"]}`}
					ref={projectsSectionRef}
				>
					<ProjectSection />
				</section>
				<section
					id="education"
					className={`${style.section} ${style["education-section"]}`}
					ref={educationSectionRef}
				>
					<EducationSection />
				</section>
				<section
					id="contact"
					className={`${style.section} ${style["contact-section"]}`}
					ref={contactSectionRef}
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
