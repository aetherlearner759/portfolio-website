import { useState } from "react";
import commonStyle from "../../common.module.css";
import style from "./ContactSection.module.css";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MY_EMAIL = "scottish759@gmail.com";

export default function ContactSection() {
	const [subject, setSubject] = useState<string>("");
	const [body, setBody] = useState<string>("");

	function handleSubjectChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSubject(e.target.value);
	}

	function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setBody(e.target.value);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		window.location.href = `mailto:${encodeURIComponent(MY_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}

	return (
		<div className={`${commonStyle.root} ${style.root}`}>
			<h2
				className={`${commonStyle["section-header"]} ${style["section-header"]}`}
			>
				Contact Me
			</h2>

			<div className={`${style.block} ${style.left}`}>
				<p className={style["contact-text"]}>
					Have a question or looking to hire? <br />
					<br />
					Leave your details and I'll get back to you as soon as possible.
				</p>
				<ul className={style.links}>
					<li>
						<MdEmail /> <p>Email:</p>{" "}
						<p>
							<a href="mailto:scottish759@gmail.com">scottish759@gmail.com</a>
						</p>
					</li>
					<li>
						<FaPhoneAlt /> <p>Phone Number:</p> <p>1) 780-777-6809</p>
					</li>
					<li>
						<FaGithub /> <p>Github:</p>{" "}
						<p>
							<a href="https://github.com/aetherlearner759">
								github.com/aetherlearner759
							</a>
						</p>
					</li>
				</ul>
			</div>

			<div className={`${style.block} ${style.right}`}>
				<form className={style.form} onSubmit={handleSubmit}>
					<input
						className={style["subject-input"]}
						type="text"
						value={subject}
						onChange={handleSubjectChange}
						placeholder="Subject"
						aria-label="subject"
					/>

					<textarea
						className={style["body-input"]}
						value={body}
						onChange={handleBodyChange}
						placeholder="Message"
						aria-label="message"
					/>

					<button type="submit" className={style["submit-button"]}>
						Send Email
					</button>
				</form>
			</div>
		</div>
	);
}
