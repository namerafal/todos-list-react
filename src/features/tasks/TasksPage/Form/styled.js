import styled from "styled-components"

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid  ${({ theme }) => theme.color.gallery};
`;

export const FormButton = styled.button`
    cursor: pointer;
    background-color:${({ theme }) => theme.color.teal};
    transition: background-color 1s, transform 0.2s;
    border: none;
    color: ${({ theme }) => theme.color.blackWhite};
    padding: 10px;

      &:hover {
        background-color: hsl(180, 100%, 29%);
        transform: scale(1.1);
          
         @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
             transform: scale(1.04);
         }
      }

      &:active {
        background-color: ${({ theme }) => theme.color.persianGreen};
        transition: none;
      }
`;
