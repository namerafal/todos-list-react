import styled from "styled-components"

export const SearchWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;
export const SearchInput = styled.input`
    padding: 10px;
    border: 1px solid  ${({ theme }) => theme.color.gallery};
`;