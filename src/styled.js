import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

export const MainContainer = styled.div`
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
`;