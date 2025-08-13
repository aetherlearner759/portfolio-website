import { useEffect, useRef, type PropsWithChildren } from "react";
import style from "./TopHeader.module.css";

const SCROLL_PADDING_PROPERTY = "--scroll-padding";

export default function TopHeader(props: PropsWithChildren) {
	const headerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (headerRef.current === null) {
			throw Error("Ref unexpectedly not set");
		}
		const navigationBarHeight: number = headerRef.current.offsetHeight - 1;
		document.documentElement.style.setProperty(
			SCROLL_PADDING_PROPERTY,
			`${navigationBarHeight.toString()}px`,
		);

		return () => {
			document.documentElement.style.removeProperty(SCROLL_PADDING_PROPERTY);
		};
	}, []);

	return (
		<div className={style.header} ref={headerRef}>
			{props.children}
		</div>
	);
}
