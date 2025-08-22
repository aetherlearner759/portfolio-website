import { useEffect, useRef, type PropsWithChildren } from "react";

interface Props {
	toTrack: React.RefObject<HTMLElement | null>[];
	onActiveIndexChanged: (newIndex: number) => void;
}

export default function NavigationTracker(props: PropsWithChildren<Props>) {
	const observers = useRef<IntersectionObserver[]>([]);

	useEffect(() => {
		function hookObserver(element: HTMLElement, index: number) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						props.onActiveIndexChanged(index);
					}
				},
				{
					threshold: 0.7,
				},
			);
			observer.observe(element);
			observers.current.push(observer);
		}

		function cleanUp() {
			observers.current.forEach((o) => { o.disconnect(); });
			observers.current = [];
		}

		props.toTrack.forEach((t, index) => {
			if (t.current !== null) {
				hookObserver(t.current, index);
			}
		});

		return () => {
			cleanUp();
		};
	}, [props.toTrack, props.onActiveIndexChanged]);

	return <>{props.children}</>;
}
