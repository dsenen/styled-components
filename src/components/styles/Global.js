import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        color: #333;
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
        line-height: 1.1;
        font-family: 'Arial', sans-serif;
    }
`
