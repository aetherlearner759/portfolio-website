import { useEffect, useRef } from "react";
import style from "./Fox.module.css";

export default function Fox() {
	const foxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (foxRef.current === null) {
			return;
		}
		const foxDOM = foxRef.current;

		let timeoutID: NodeJS.Timeout | null = null;
		let eyeState: "closing" | "opening" | "open" = "open";

		function startBlink() {
			foxDOM.classList.add(style.startBlinking);
			eyeState = "closing";
		}

		const animationEndHandler = (e: AnimationEvent) => {
			if (foxRef.current === null) return;
			if (e.animationName !== style.blinking) return;

			eyeState = eyeState === "closing" ? "opening" : "open";
			if (eyeState === "open") {
				foxDOM.classList.remove(style.startBlinking);

				timeoutID = setTimeout(() => {
					startBlink();
				}, Math.random() * 2500);
			}
		};

		foxDOM.addEventListener("animationend", animationEndHandler);
		startBlink();

		return () => {
			if (timeoutID !== null) clearTimeout(timeoutID);
			foxDOM.removeEventListener("animationend", animationEndHandler);
		};
	}, []);

	return (
		<div className={style.fox} ref={foxRef}>
			<div className={style.leftEar} />
			<div className={style.rightEar} />
			<div className={style.cranium} />
			<div className={style.midFace} />
			<div className={style.leftEyeFur} />
			<div className={style.rightEyeFur} />
			<div className={style.leftCheekFur} />
			<div className={style.rightCheekFur} />
			<div className={style.jawFur} />

			<div className={style.leftEye} />
			<div className={style.rightEye} />
			<div className={style.nose} />
		</div>
	);
}
