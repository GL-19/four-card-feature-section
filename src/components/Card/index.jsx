import { CardWrapper } from "./styles.js";

export function Card({ title, text, img, borderColor, gridArea }) {
	return (
		<CardWrapper borderColor={borderColor} area={gridArea}>
			<h2>{title}</h2>
			<p>{text}</p>
			{img && <img src={img} alt="" />}
		</CardWrapper>
	);
}
