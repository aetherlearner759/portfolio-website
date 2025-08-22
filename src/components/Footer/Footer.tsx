import style from "./Footer.module.css";

export default function Footer() {
	function handleToTopClick() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className={style.container}>
			<p className={style["copyright-text"]}>
				© 2025 All rights reserved by Scott Hur
			</p>
			<button
				type="button"
				className={style["to-top-button"]}
				onClick={handleToTopClick}
			>
				To Top
			</button>
		</div>
	);
}
