import { useEffect, useRef, type PropsWithChildren } from "react";

interface Props {
	toTrack: React.RefObject<HTMLElement | null>[];
	onActiveIndexChanged: (newIndex: number) => void;
}

export default function NavigationTracker(props: PropsWithChildren<Props>) {
	const observers = useRef<IntersectionObserver[]>([]);
	const { toTrack, onActiveIndexChanged } = props;

	useEffect(() => {
		function hookObserver(element: HTMLElement, index: number) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						onActiveIndexChanged(index);
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
			observers.current.forEach((o) => {
				o.disconnect();
			});
			observers.current = [];
		}

		toTrack.forEach((t, index) => {
			if (t.current !== null) {
				hookObserver(t.current, index);
			}
		});

		return () => {
			cleanUp();
		};
	}, [toTrack, onActiveIndexChanged]);

	return <>{props.children}</>;
}
