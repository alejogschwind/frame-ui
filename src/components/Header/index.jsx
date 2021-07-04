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


const Header = ({ solid, menuOpen, openMenu }) => {
  const { dark, setDark } = useContext(DarkContext);

  return (
    <HeaderWrapper solid={solid} dark={dark}>
      {/* 1024 */}
      <Position>
        <Link to="/">
          <FrameLogoStyled dark={dark} />
        </Link>

        <HMenuWrappre>
          <MenuIconStyled dark={dark} menuOpen={menuOpen} onClick={openMenu} />
        </HMenuWrappre>
        <Menu dark={dark}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <SubMenuButton>
              <li>Servicios</li>
              <SubMenu dark={dark}>
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
            <SwitchWrapper dark={dark}>
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
