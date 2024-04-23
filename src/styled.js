import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background-color: hsl(0, 0%, 93%);
        font-family: 'Montserrat', sans-serif;
        word-break: break-word;
    } 
`;