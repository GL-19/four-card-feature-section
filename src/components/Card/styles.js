import styled from "styled-components";

export const CardWrapper = styled.div`
	width: 400px;
	height: 250px;
	margin: 20px;
	padding: 35px;

	grid-area: ${(props) => props.area};

	display: flex;
	flex-direction: column;

	background: #ffffff;
	border-radius: 7px;
	border-top: 4px solid ${(props) => props.borderColor || "#ffffff"};

	font-family: "Poppins", sans-serif;
	font-size: 15px;

	h2 {
		color: hsl(234, 12%, 34%);
	}

	p {
		color: hsl(229, 6%, 66%);
		font-weight: 200;
	}

	img {
		width: 75px;
		height: 75px;
		margin-top: 30px;

		align-self: flex-end;
	}
`;
