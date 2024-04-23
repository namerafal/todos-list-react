import styled from "styled-components"

export const Form = styled.form`
display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid hsl(0, 0%, 93%);
`;

export const FormButton = styled.button`
    background-color: hsl(180, 100%, 25%);
    transition: background-color 1s, transform 0.2s;
    border: none;
    color: hsla(0, 0%, 100%, 0.993);
    padding: 10px;

      &:hover {
        background-color: hsl(180, 100%, 29%);
        transform: scale(1.1);
          
         @media (max-width: 767px) {
             transform: scale(1.04);
         }
      }

      &:active {
        background-color: hsl(180, 100%, 34%);
        transition: none;
      }
`;
