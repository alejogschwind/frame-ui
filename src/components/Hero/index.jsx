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
  PauseButton,
  SpinerWrapper
} from './styles';

import video from "../../assets/videos/test.mp4";
import ResponsiveMenu from '../ResponsiveMenu';
import HeadersContext from '../../context/headers';
import ReactPlayer from 'react-player';
import Header from '../Header';
import DarkContext from '../../context/dark';
import Spiner from '../Spiner';

const Hero = ({ image, borderColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const { headers } = useContext(HeadersContext);
  const { dark } = useContext(DarkContext);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style += "overflow: hidden;";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style += "overflow: inital;";
  };

  return (
    <>
      <Header solid={false} />
      <HeroWrapper dark={dark}>
        {/* <img src={marco} alt="marco" /> */}


        {
          image ?
            <ImageBackgroundWrapper>
              <Overlay />
              <img src={image} alt="background" />
            </ImageBackgroundWrapper>
            : null
        }

        <Border borderColor={borderColor} onClick={() => {
          if (!playing) {
            setLoading(true);
          }
          setPlaying(!playing);
        }}>
          {
            playing ?
              <PauseButton onClick={() => setPlaying(false)} />
              :
              <PlayButton onClick={() => {
                setPlaying(true);
                setLoading(true);
              }} />
          }
          {
            loading && <SpinerWrapper>
              <Spiner />
            </SpinerWrapper>
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
              onReady={() => {
                // setLoading(true);
              }}
              url={headers[0]}
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
