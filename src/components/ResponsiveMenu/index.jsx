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
    <ResponsiveMenuWrapper dark={dark} menuOpen={menuOpen}>
      {
        subMenuOpen &&
        <BackIconStyled dark={dark} onClick={() => setSubMenuOpen(false)} />
      }
      <CloseIconStyled dark={dark} onClick={closeMenu} />

      <MenuContent>

        {
          !subMenuOpen ?
            <MenuList dark={dark}>
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
              {/* <MenuItem>
                <StyledLink to="/nosotros" onClick={closeMenu}>
                  Nosotros
          </StyledLink>
              </MenuItem> */}
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
            <MenuList dark={dark}>
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
          <SwitchWrapper dark={dark}>
            <Span>Light</Span>
            <Switch
              isToggled={dark}
              onToggle={() => setDark(!dark)}
            />
            <Span>Dark</Span>
          </SwitchWrapper>
          <SwitchWrapper dark={dark}>
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
