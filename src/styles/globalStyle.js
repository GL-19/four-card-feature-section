import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;
    background: hsl(0, 0%, 98%);
    font-family: "Poppins", sans-serif;
  }
`;

export default GlobalStyle;
