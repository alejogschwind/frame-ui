import React from 'react';

import {
  ResponsiveMenuWrapper,
  CloseIconStyled,
  MenuList,
  MenuItem,
  StyledLink
} from './styles';

const ResponsiveMenu = ({ menuOpen, closeMenu }) => {
  return (
    <ResponsiveMenuWrapper menuOpen={menuOpen}>
      <CloseIconStyled onClick={closeMenu} />

      <MenuList>
        <MenuItem>
          <StyledLink to="/">
            Home
            </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/portfolio">
            Portfolio
            </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/nosotros">
            Nosotros
            </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/servicios">
            Servicios
            </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contacto">
            Contacto
            </StyledLink>
        </MenuItem>
      </MenuList>
    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
