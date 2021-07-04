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
  SpinerWrapper,
  ResponsiveMenuWrapper
} from './styles';

import video from "../../assets/videos/test.mp4";
import ResponsiveMenu from '../ResponsiveMenu';
import HeadersContext from '../../context/headers';
import ReactPlayer from 'react-player';
import Header from '../Header';
import DarkContext from '../../context/dark';
import Spiner from '../Spiner';

const Hero = ({ image, borderColor, loadingData = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const { headers } = useContext(HeadersContext);
  const { dark } = useContext(DarkContext);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style.setProperty("overflow", "hidden");
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style.setProperty("overflow", "initial");
  };


  console.log("Loading Video", loadingData);
  console.log("Hero Video", headers);

  return (
    <div style={{ height: "100%" }}>
      <Header solid={false} menuOpen={menuOpen} openMenu={openMenu} />

      {/* <ResponsiveMenuWrapper> */}

      {/* </ResponsiveMenuWrapper> */}

      <HeroWrapper dark={dark}>
        <ResponsiveMenu
          menuOpen={menuOpen}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
        {/* <img src={marco} alt="marco" /> */}
        {
          image ?
            <Overlay />
            : null
        }
        {
          image ?
            <Border dark={dark} borderColor={borderColor}>
              <ImageBackgroundWrapper image={image}>
                <img src={image} alt="background" />
              </ImageBackgroundWrapper>
            </Border>
            : null
        }

        {
          !image ? (

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
          ) : null
        }

        {/* <Overlay /> */}

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
    </div>
  );
};

export default Hero;
