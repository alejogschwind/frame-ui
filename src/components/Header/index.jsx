import React from 'react';
import { Link } from 'react-router-dom';

import ResponsiveMenu from '../ResponsiveMenu';

import {
  HeaderWrapper,
  MenuIconStyled,
  Position,
  ResponsiveMenuWrapper,
  HMenuWrappre,
  Menu,
  FrameLogoStyled,
  SubMenu,
  SubMenuButton
} from './styles';


const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style = "overflow: hidden;";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style = "overflow: inital;";
  };

  return (
    <HeaderWrapper>
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
          </ul>
        </Menu>
      </Position>
    </HeaderWrapper>
  );
};

export default Header;
