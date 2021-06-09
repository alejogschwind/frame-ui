import React, { useState } from 'react';
import {
  HeroWrapper,
  VideoPlayerBlur,
  VideoPlayer,
  MenuIconStyled,
  Logo,
  Header,
  ImageBackgroundWrapper,
  Overlay,
  StyledLink
} from './styles';

import video from "../../assets/videos/test.mp4";
import ResponsiveMenu from '../ResponsiveMenu';

const Hero = ({ image, borderColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HeroWrapper>
      {/* <img src={marco} alt="marco" /> */}

      <ResponsiveMenu
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />

      {
        image ?
          <ImageBackgroundWrapper>
            <Overlay />
            <img src={image} alt="background" />
          </ImageBackgroundWrapper>
          :
          <VideoPlayerBlur>
            <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo">
              {/* <source  type="video/mp4" /> */}
            </video>
          </VideoPlayerBlur>
      }


      <VideoPlayer borderColor={borderColor}>
        <Header>
          <Logo>
            <StyledLink to="/">
              Frame
            </StyledLink>
          </Logo>
          <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
        </Header>
        {/* <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo"> */}

        {/* </video> */}
      </VideoPlayer>




      {/* </HeroBorder> */}
    </HeroWrapper >
  );
};

export default Hero;
