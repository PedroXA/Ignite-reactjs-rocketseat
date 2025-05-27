import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --navbar-background: #238662;
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

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
