import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: none;
    color: hsl(180, 100%, 25%);
    margin-right: 15px;
    transition: filter 0.5s;

        &:hover {
            filter: saturate(350%);
        }

        &:disabled {
            color: hsla(180, 22%, 62%, 0.603);
        }

        @media (max-width: 767px) {
            margin: 10px auto;
            display: flex;
            flex-direction: column;
            padding-bottom: 15px;
        }
`;