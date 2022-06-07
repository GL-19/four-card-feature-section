import styled from "styled-components";

interface CardWrapperProps {
	area: string;
	borderColor: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
	width: 300px;
	height: 200px;
	padding: 35px;

	grid-area: ${(props) => props.area};

	display: flex;
	flex-direction: column;

	background: #ffffff;
	border-radius: 7px;
	border-top: 4px solid ${(props) => props.borderColor || "#ffffff"};
	box-shadow: 0px 5px 20px hsl(229, 6%, 66%);

	font-family: "Poppins", sans-serif;
	font-size: 12px;

	h2 {
		color: hsl(234, 12%, 34%);
	}

	p {
		color: hsl(229, 6%, 66%);
		font-weight: 200;
	}

	img {
		width: 50px;
		height: 50px;
		margin-top: 30px;

		align-self: flex-end;
	}
`;
