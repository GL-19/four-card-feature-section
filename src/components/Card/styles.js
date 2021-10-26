import styled from "styled-components";

export const CardWrapper = styled.div`
	border-top: 2px solid ${(props) => props.borderColor || "#ffffff"};
	grid-area: ${(props) => props.area};
`;
