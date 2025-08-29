import style from "./IconSphere.module.css";
import cSharpIcon from "@assets/icons/C_sharp.svg";
import netIcon from "@assets/icons/NET.svg";
import htmlIcon from "@assets/icons/HTML5.svg";
import cssIcon from "@assets/icons/CSS3svg.svg";
import jsIcon from "@assets/icons/Javascript.svg";
import sqlIcon from "@assets/icons/SQL.svg";
import mongoIcon from "@assets/icons/MongoDB.svg";

export default function IconSphere() {
	return (
		<div className={style["icon-sphere"]}>
			<div className={style.icon}>
				<img src={cSharpIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={htmlIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={cssIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={jsIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={netIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={sqlIcon} alt="" />
			</div>
			<div className={style.icon}>
				<img src={mongoIcon} alt="" />
			</div>
		</div>
	);
}
