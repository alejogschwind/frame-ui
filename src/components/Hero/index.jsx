import React, { useState, useContext } from 'react';
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
import HeadersContext from '../../context/headers';
import ReactPlayer from 'react-player';

const Hero = ({ image, borderColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { headers } = useContext(HeadersContext);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style = "overflow: hidden;";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style = "overflow: inital;";
  };

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
          : null
      }
      {
        headers.length ?
          <VideoPlayerBlur>
            <iframe src="https://player.vimeo.com/video/361095455?autoplay=1&mute=1&loop=1" webkitallowfullscreen mozallowfullscreen allowfullscreen controls={false}>
            </iframe>
          </VideoPlayerBlur>
          : null
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
