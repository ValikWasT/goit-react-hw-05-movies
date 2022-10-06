import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderBox = styled.header`
  padding: 15px;
  border-bottom: 1px solid black;
`;
export const NavList = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orangered;
  }
`;
