import styled from "styled-components";

export const Button = styled.button`
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
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 10px auto;
            display: flex;
            padding-bottom: 15px;
        }
`;