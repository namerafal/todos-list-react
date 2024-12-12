import { toAuthor, toTasks } from "../routes";
import { NavItem, NavList, StyledNavLink } from "./styled";

// eslint-disable-next-line
export default () => {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </NavItem>
            </NavList>
        </nav>
    )
};