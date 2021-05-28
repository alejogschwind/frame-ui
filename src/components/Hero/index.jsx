import React, { useState } from 'react';
import {
  HeroWrapper,
  CloseIconStyled,
  MenuList,
  MenuItem,
  VideoPlayerBlur,
  VideoPlayer,
  MenuIconStyled,
  Logo,
  Header,
  Menu
} from './styles';

import video from "../../assets/videos/test.mp4";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HeroWrapper>

      <Menu menuOpen={menuOpen}>
        <CloseIconStyled onClick={closeMenu} />

        <MenuList>
          <MenuItem>
            Home
            </MenuItem>
          <MenuItem>
            Nosotros
            </MenuItem>
          <MenuItem>
            Servicios
            </MenuItem>
          <MenuItem>
            Contacto
            </MenuItem>
        </MenuList>
      </Menu>

      <VideoPlayerBlur>
        <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo">
          {/* <source  type="video/mp4" /> */}
        </video>
      </VideoPlayerBlur>

      <VideoPlayer>
        <Header>
          <Logo>Frame</Logo>
          <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
        </Header>
        <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo">
          {/* <source  type="video/mp4" /> */}
        </video>
      </VideoPlayer>




      {/* </HeroBorder> */}
    </HeroWrapper>
  );
};

export default Hero;
