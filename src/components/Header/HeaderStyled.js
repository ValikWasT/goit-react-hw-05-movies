import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderBox = styled.header`
  background-color: lightyellow;
  padding: 15px;
  border-bottom: 2px solid black;
`;
export const NavList = styled.nav`
  margin: 0 auto;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    font-weight: 700;
    color: orangered;
  }
`;
