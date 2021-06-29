import React, { useState, useContext } from 'react';
import DarkContext from '../../context/dark';

import Switch from "../Switch";

import {
  ResponsiveMenuWrapper,
  CloseIconStyled,
  BackIconStyled,
  MenuList,
  MenuItem,
  StyledLink,
  TogglesGroup,
  MenuContent,
  Span,
  SwitchWrapper
} from './styles';

const ResponsiveMenu = ({ menuOpen, closeMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const { dark, setDark } = useContext(DarkContext);

  return (
    <ResponsiveMenuWrapper menuOpen={menuOpen}>
      {
        subMenuOpen &&
        <BackIconStyled onClick={() => setSubMenuOpen(false)} />
      }
      <CloseIconStyled onClick={closeMenu} />

      <MenuContent>

        {
          !subMenuOpen ?
            <MenuList>
              <MenuItem>
                <StyledLink to="/" onClick={closeMenu}>
                  Home
          </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/portfolio" onClick={closeMenu}>
                  Portfolio
          </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/nosotros" onClick={closeMenu}>
                  Nosotros
          </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink onClick={() => setSubMenuOpen(true)}>
                  Servicios
          </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/contacto" onClick={closeMenu}>
                  Contacto
          </StyledLink>
              </MenuItem>
            </MenuList>
            :
            <MenuList>
              <MenuItem>
                <StyledLink to="/servicio/desarollo" onClick={closeMenu}>
                  Desarrollo
              </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/brandingTV" onClick={closeMenu}>
                  Branding TV
              </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/marketing" onClick={closeMenu}>
                  Marketing Digital
              </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/post-produccion" onClick={closeMenu}>
                  Post Producción
              </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/produccion" onClick={closeMenu}>
                  Producción
          </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/estudio" onClick={closeMenu}>
                  Estudio
              </StyledLink>
              </MenuItem>
            </MenuList>
        }

        <TogglesGroup>
          <SwitchWrapper>
            <Span>Light</Span>
            <Switch
              isToggled={dark}
              onToggle={() => setDark(!dark)}
            />
            <Span>Dark</Span>
          </SwitchWrapper>
          <SwitchWrapper>
            <Span>ES</Span>
            <Switch />
            <Span>EN</Span>
          </SwitchWrapper>
        </TogglesGroup>
      </MenuContent>

    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
