import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: #eceef3;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    `;
export default GlobalStyle;
