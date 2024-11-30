import styled from "styled-components";

export const Wrapper = styled.div``;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${({ theme }) => theme.color.teal};
    margin-right: 15px;
    transition: filter 0.5s;

        &:hover {
            filter: saturate(350%);
        }

        &:active {
            filter: brightness(110%);
        }

        &:disabled {
            color: ${({ theme }) => theme.color.alto};
            filter: none;
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 10px auto;
            display: flex;
            padding-bottom: 15px;
        }
`;