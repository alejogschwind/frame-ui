import React, { useState } from 'react';

import {
  ResponsiveMenuWrapper,
  CloseIconStyled,
  BackIconStyled,
  MenuList,
  MenuItem,
  StyledLink
} from './styles';

const ResponsiveMenu = ({ menuOpen, closeMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <ResponsiveMenuWrapper menuOpen={menuOpen}>
      {
        subMenuOpen &&
        <BackIconStyled onClick={() => setSubMenuOpen(false)} />
      }
      <CloseIconStyled onClick={closeMenu} />

      {
        !subMenuOpen ?
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
              <StyledLink onClick={() => setSubMenuOpen(true)}>
                Servicios
          </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contacto">
                Contacto
          </StyledLink>
            </MenuItem>
          </MenuList>
          :
          <MenuList>
            <MenuItem>
              <StyledLink to="/servicio/desarollo">
                Desarrollo
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/servicio/brandingTV">
                Branding TV
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/servicio/marketing">
                Marketing Digital
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/servicio/post-produccion">
                Post Producción
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/servicio/produccion">
                Producción
          </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/servicio/estudio">
                Estudio
              </StyledLink>
            </MenuItem>
          </MenuList>
      }
    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
