import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --header-background: #238662;
        --secundary-green: #10c76e;
        --page-background: #efefef;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Font size padrão é 16px
    // REM - 1rem = 16px -> REM é igual ao tamanho da minha font size

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 15px
        }
    }

    body {
        background-color: (--page-background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
