import { CardWrapper } from "./styles.js";

export function Card({ title, text, img, borderColor }) {
	return (
		<CardWrapper borderColor={borderColor}>
			<h1>{title}</h1>
			<p>{text}</p>
		</CardWrapper>
	);
}
