import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DarkContext from '../../context/dark';

import ResponsiveMenu from '../ResponsiveMenu';
import Switch from '../Switch';

import {
  HeaderWrapper,
  MenuIconStyled,
  Position,
  ResponsiveMenuWrapper,
  HMenuWrappre,
  Menu,
  FrameLogoStyled,
  SubMenu,
  SubMenuButton,
  SwitchWrapper,
  Span
} from './styles';


const Header = ({ solid }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { dark, setDark } = useContext(DarkContext);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style.setProperty("overflow", "hidden");
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style.setProperty("overflow", "initial");
  };

  return (
    <HeaderWrapper solid={solid}>
      {/* 1024 */}
      <ResponsiveMenuWrapper>
        <ResponsiveMenu
          menuOpen={menuOpen}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
      </ResponsiveMenuWrapper>



      <Position>
        <Link to="/">
          <FrameLogoStyled />
        </Link>

        <HMenuWrappre>
          <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
        </HMenuWrappre>
        <Menu>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <SubMenuButton>
              <li>Servicios</li>
              <SubMenu>
                <Link to="/servicio/desarollo">
                  <li>
                    Desarrollo de contenido digital multiplataforma
                  </li>
                </Link>
                <Link to="/servicio/brandingTV">
                  <li>
                    Branding Tv
                  </li>
                </Link>
                <Link to="/servicio/marketing">
                  <li>
                    Marketing digital
                  </li>
                </Link>
                <Link to="/servicio/post-produccion">
                  <li>
                    Servicio de post producción
                  </li>
                </Link>
                <Link to="/servicio/produccion">
                  <li>
                    Desarrollo y producción de formatos
                  </li>
                </Link>
                <Link to="/servicio/estudio">
                  <li>
                    Estudio y técnica
                  </li>
                </Link>
              </SubMenu>
            </SubMenuButton>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>
            <SwitchWrapper>
              <Span>Light</Span>
              <Switch
                isToggled={dark}
                onToggle={() => setDark(!dark)}
              />
              <Span>Dark</Span>
            </SwitchWrapper>
          </ul>
        </Menu>
      </Position>
    </HeaderWrapper>
  );
};

export default Header;
