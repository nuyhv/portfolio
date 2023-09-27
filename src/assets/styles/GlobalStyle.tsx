import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: #d7dae1;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    `;
export default GlobalStyle;
