import styled from "styled-components";

export const Main = styled.main`
	min-width: 100vw;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TextWrapper = styled.section`
	max-width: 550px;
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	h1 {
		color: hsl(234, 12%, 34%);
		font-weight: 200;
		text-align: center;
	}
	span {
		font-weight: 600;
		text-align: center;
	}
	p {
		color: hsl(229, 6%, 66%);
		text-align: center;
	}
`;

export const Grid = styled.section`
	max-width: 900px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		" . teamBuilder . "
		" supervisor teamBuilder calculator "
		" supervisor karma calculator "
		" . karma . ";
	gap: 30px;

	@media screen and (max-width: 750px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			" supervisor "
			" teamBuilder "
			" karma "
			" calculator ";
	}
`;
