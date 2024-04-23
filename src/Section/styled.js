import styled from "styled-components";

export const Section = styled.section`
    margin: 10px 0;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 0 5px hsl(0, 0%, 87%);
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-flow: column;
        align-items: stretch; 
    }
`;

export const SectionTitle = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0px;
`;

export const SectionTasks = styled.div`
    border-top: 1px solid hsl(0, 0%, 87%);
    padding: 20px;
`;