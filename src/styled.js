import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
    background-color:${({ theme }) => theme.color.teal};
    margin-top: 0px;
    padding: 15px 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;   
    width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 5px 10px;
    color: ${({ theme }) => theme.color.blackWhite};

    &.active {    
        font-weight:bold;
    }
`;

