import React from 'react';

import ResponsiveMenu from '../ResponsiveMenu';

import {
  HeaderWrapper,
  MenuIconStyled
} from './styles';

import { ReactComponent as FrameLogo } from "../../assets/svgs/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderWrapper>

      <ResponsiveMenu
        menuOpen={menuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      <FrameLogo />

      <div>
        <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
