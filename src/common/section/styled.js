import styled from "styled-components";

export const Section = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const SectionHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-flow: column;
        align-items: stretch; 
    }
`;

export const SectionTitle = styled.h2`
    margin: 0px;
    padding: 20px;
    font-size: 20px;
`;

export const SectionTasks = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.alto};
    padding: 20px;
`;