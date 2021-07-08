import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import DarkContext from '../../context/dark';
import LanguagesContext from '../../context/language';

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
  const { t } = useTranslation();

  const { dark, setDark } = useContext(DarkContext);
  const { languages, lan, setLan } = useContext(LanguagesContext);

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
                  {t("Home")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/portfolio" onClick={closeMenu}>
                  {t("Portfolio")}
                </StyledLink>
              </MenuItem>
              {/* <MenuItem>
                <StyledLink to="/nosotros" onClick={closeMenu}>
                  Nosotros
          </StyledLink>
              </MenuItem> */}
              <MenuItem>
                <StyledLink onClick={() => setSubMenuOpen(true)}>
                  {t("Servicies")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/contacto" onClick={closeMenu}>
                  {t("Contact")}
                </StyledLink>
              </MenuItem>
            </MenuList>
            :
            <MenuList dark={dark}>
              <MenuItem>
                <StyledLink to="/servicio/desarollo" onClick={closeMenu}>
                  {t("Dev")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/brandingTV" onClick={closeMenu}>
                  {t("Branding")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/marketing" onClick={closeMenu}>
                  {t("Marketing")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/post-produccion" onClick={closeMenu}>
                  {t("Pos")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/produccion" onClick={closeMenu}>
                  {t("Prod")}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/servicio/estudio" onClick={closeMenu}>
                  {t("Stu")}
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
            <Switch
              isToggled={(lan === languages[1])}
              onToggle={() => setLan(lan === languages[1] ? languages[0] : languages[1])}
            />
            <Span>EN</Span>
          </SwitchWrapper>
        </TogglesGroup>
      </MenuContent>

    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
