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

const Hero = ({ image, borderColor, loadingData }) => {
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

  console.log("Loading Video", loadingData);
  console.log("Hero Video", headers);

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

        <Border dark={dark} borderColor={borderColor} onClick={() => {
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
              <Spiner dark={dark} />
            </SpinerWrapper>
          }
        </Border>
        <Overlay>

        </Overlay>

        {
          !loadingData ? (
            <VideoPlayer>
              <VimeoWrapper>
                <ReactPlayer
                  loop={true}
                  playing={playing}
                  onPlay={() => setLoading(false)}
                  onStart={() => {
                    setLoading(false);
                    setPlaying(true);
                  }}
                  url={headers[0]}
                />
              </VimeoWrapper>
            </VideoPlayer>
          ) :
            <SpinerWrapper>
              <Spiner dark={dark} />
            </SpinerWrapper>
        }

      </HeroWrapper >
    </>
  );
};

export default Hero;
