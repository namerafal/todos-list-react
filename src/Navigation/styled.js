import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
    background-color:${({ theme }) => theme.color.teal};    
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;   
    justify-content: center;
    position: fixed;   
    width: 100%;
`;

export const NavItem = styled.li`
    margin: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;    
    color: ${({ theme }) => theme.color.blackWhite};
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s ease;        
    
    &:hover {        
        border-bottom-color: currentColor; 
    }

    &.active {    
        font-weight:bold;
    }
`;


