import { HeaderBox, NavList, StyledLink } from './HeaderStyled';
export const Header = () => {
  return (
    <HeaderBox>
      <NavList>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavList>
    </HeaderBox>
  );
};
