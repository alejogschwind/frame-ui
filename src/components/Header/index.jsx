import React from 'react';
import { Link } from 'react-router-dom';

import ResponsiveMenu from '../ResponsiveMenu';

import {
  HeaderWrapper,
  MenuIconStyled,
  Position
} from './styles';

import { ReactComponent as FrameLogo } from "../../assets/svgs/logo.svg";

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

      <ResponsiveMenu
        menuOpen={menuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      <Position>
        <Link to="/">
          <FrameLogo />
        </Link>

        <div>
          <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
        </div>
      </Position>
    </HeaderWrapper>
  );
};

export default Header;
