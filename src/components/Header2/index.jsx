import React from 'react';
import ResponsiveMenu from '../ResponsiveMenu';
import { Header2Wrapper, Logo, StyledLink, MenuIconStyled } from './styles';

const Header2 = ({ menuOpen, closeMenu, openMenu }) => {
  return (
    <Header2Wrapper>
      <ResponsiveMenu
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />

      <Logo>
        <StyledLink to="/">
          Frame
            </StyledLink>
      </Logo>
      <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />

    </Header2Wrapper>
  );
};

export default Header2;
