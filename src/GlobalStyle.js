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
        background-color: ${({ theme }) => theme.color.gallery};
        font-family: 'Montserrat', sans-serif;
        word-break: break-word;
    } 
`;

export const MainContainer = styled.div`
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
    line-height: 1.5;
`;

export const MainHeader = styled.header`
    margin-top:40px;
`;