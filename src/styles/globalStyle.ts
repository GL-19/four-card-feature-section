import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
	font-size: 16px;

	@media (max-width: 1080px) {
		font-size: 93.75%;
	}

	@media (max-width: 420px) {
		font-size: 87.5%;
	}
}

  body {
    min-width: 100vw;
    min-height: 100vh;
    background: hsl(0, 0%, 98%);
    font-family: "Poppins", sans-serif;
  }
`;

export default GlobalStyle;
