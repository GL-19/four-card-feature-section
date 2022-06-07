import { CardWrapper } from "./styles";

interface CardProps {
	title: string;
	text: string;
	img: string;
	borderColor: string;
	gridArea: string;
}

export function Card({ title, text, img, borderColor, gridArea }: CardProps) {
	return (
		<CardWrapper borderColor={borderColor} area={gridArea}>
			<h2>{title}</h2>
			<p>{text}</p>
			{img && <img src={img} alt="" />}
		</CardWrapper>
	);
}
