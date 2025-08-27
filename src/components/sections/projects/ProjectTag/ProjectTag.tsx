import style from "./ProjectTag.module.css";

interface Props {
	tag: string;
}

export default function ProjectTag(props: Props) {
	return <span className={style.tag}>{props.tag}</span>;
}
