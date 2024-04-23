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
    border-bottom: 1px solid hsl(0, 0%, 87%);
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
     color: hsl(0, 0%, 100%);
     transition: filter 0.5s;

       ${({ $toggleDone }) => $toggleDone && css`
            background-color: hsl(122, 65%, 29%);
       `};

        ${({ $remove }) => $remove && css`
             background-color: hsl(348, 83%, 47%);
        `};

          &:hover {
              filter: brightness(1.3);
          }
      
          &:active {
             filter: brightness(1.4);
             transition: none;
             box-shadow: inset 0px 2px 3px 2px hsla(180, 14%, 20%, 0.451);
          }
     }
`;