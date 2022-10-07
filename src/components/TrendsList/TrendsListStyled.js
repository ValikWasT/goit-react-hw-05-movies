import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  margin-bottom: 10px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;
`;
