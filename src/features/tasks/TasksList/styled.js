import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const TaskButton = styled.button`
   && {
     border: none;
     width: 30px;
     height: 30px;
     color: ${({ theme }) => theme.color.white};
     transition: filter 0.5s;

       ${({ $toggleDone }) => $toggleDone && css`
            background-color: ${({ theme }) => theme.color.forestGreen};
       `};

        ${({ $remove }) => $remove && css`
             background-color: ${({ theme }) => theme.color.crimson};
        `};

          &:hover {
              filter: brightness(1.3);
          }
      
          &:active {
             filter: brightness(1.4);
             transition: none;
             box-shadow: inset 0px 2px 3px 2px ${({ theme }) => theme.color.outerSpace};
          }
     }
`;