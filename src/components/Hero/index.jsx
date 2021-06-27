import React, { useState, useContext } from 'react';
import {
  HeroWrapper,
  VideoPlayerBlur,
  VideoPlayer,
  MenuIconStyled,
  Logo,
  ImageBackgroundWrapper,
  Overlay,
  StyledLink,
  Border,
  VimeoWrapper,
  PlayButton,
  PauseButton
} from './styles';

import video from "../../assets/videos/test.mp4";
import ResponsiveMenu from '../ResponsiveMenu';
import HeadersContext from '../../context/headers';
import ReactPlayer from 'react-player';
import Header from '../Header';

const Hero = ({ image, borderColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
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
    <>
      <Header />
      <HeroWrapper>
        {/* <img src={marco} alt="marco" /> */}


        {
          image ?
            <ImageBackgroundWrapper>
              <Overlay />
              <img src={image} alt="background" />
            </ImageBackgroundWrapper>
            : null
        }

        <Border borderColor={borderColor}>
          {
            playing ?
              <PauseButton onClick={() => setPlaying(false)} />
              :
              <PlayButton onClick={() => { setPlaying(true); setLoading(true); }} />
          }
          {
            loading && <h1>Loading ...</h1>
          }
        </Border>
        <Overlay>

        </Overlay>

        <VideoPlayer>
          {/* {
            headers.length ? */}
          <VimeoWrapper>

            <ReactPlayer
              loop={true}
              playing={playing}
              onPlay={() => setLoading(false)}
              // onReady={() => setLoading(false)}
              url="https://player.vimeo.com/video/361095455"
            />
            {/* <iframe
                frameborder="0"
                loop
                play={playing}
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
              </iframe> */}
          </VimeoWrapper>
          {/* : null
          } */}
        </VideoPlayer>
      </HeroWrapper >
    </>
  );
};

export default Hero;
