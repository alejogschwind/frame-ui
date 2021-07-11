import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import {
  FooterClientsWrapper,
  TopSection,
  CarouselItem,
  LogoWrapper,
  BottomSection,
  SocialMediaList,
  SocialMediaItem,
  CopyRight,
  FrameLogoSquareStyled
} from './styled';

import DarkContext from '../../context/dark';

import LNLogo from "../../assets/images/LN.png";
import CocaColaLogo from "../../assets/images/cocacola.png";
import AnimalPlanetLogo from "../../assets/images/animalplanet.png";
import Canal13Logo from "../../assets/images/canal13.png";
import DiscoveryLogo from "../../assets/images/discovery.png";
import DisneyLogo from "../../assets/images/disney.png";
import NetflixLogo from "../../assets/images/netflix.png";
import SonyLogo from "../../assets/images/sony.png";
import NikeLogo from "../../assets/images/nike.png";
import PanasonicLogo from "../../assets/images/panasonic.png";
import SpaceLogo from "../../assets/images/space.png";
import StarLogo from "../../assets/images/start.png";
import WarnerLogo from "../../assets/images/warner.png";
import YouTubeLogo2 from "../../assets/images/youtube.png";
import ViacomLogo from "../../assets/images/viacom.png";
import Instagram from "../../assets/images/ig.png";

import LinkedinLogo from "../../assets/svgs/in.png";
import InstagramLogo from "../../assets/svgs/insta.svg";
import VimeoLogo from "../../assets/svgs/vimeo.png";
import YoutubeLogo from "../../assets/svgs/youtube.png";

const FooterClients = () => {
  const { dark } = useContext(DarkContext);
  const { t } = useTranslation();

  const logos = [
    [
      {
        title: "La Nación +",
        image: LNLogo
      },
      {
        title: "Coca Cola",
        image: CocaColaLogo
      },
      {
        title: "Animal Planet",
        image: AnimalPlanetLogo
      },
      {
        title: "Sony",
        image: SonyLogo
      },
      {
        title: "Nike",
        image: NikeLogo
      },
      {
        title: "Start Channel",
        image: StarLogo
      },
      {
        title: "You Tube",
        image: YouTubeLogo2
      },
      {
        title: "El Trece",
        image: Canal13Logo
      }
    ],
    [
      {
        title: "Discovery",
        image: DiscoveryLogo
      },
      {
        title: "Disney+",
        image: DisneyLogo
      },
      {
        title: "Netflix",
        image: NetflixLogo
      },
      {
        title: "Instagram",
        image: Instagram
      },
      {
        title: "Panasonic",
        image: PanasonicLogo
      },
      {
        title: "Space",
        image: SpaceLogo
      },
      {
        title: "Viacom",
        image: ViacomLogo
      },
      {
        title: "Warner Media",
        image: WarnerLogo
      },
    ]
  ];

  return (
    <FooterClientsWrapper dark={dark}>
      <TopSection dark={dark}>
        <h2>{t("Clients").toUpperCase()}</h2>
        <Carousel
          items
          style={{
            margin: "4rem",
          }}
          autoPlay
          infiniteLoop
          renderIndicator={() => null}
          showStatus={false}
        >
          {
            logos.map((grid, index) => (
              <CarouselItem key={index}>
                {grid.map(logo => (
                  <LogoWrapper>
                    <img src={logo.image} key={logo.title} alt={logo.title} />
                  </LogoWrapper>
                ))}
              </CarouselItem>
            ))
          }
        </Carousel>
      </TopSection>
      <BottomSection>
        <FrameLogoSquareStyled />
        <SocialMediaList>
          <SocialMediaItem href="https://www.linkedin.com/company/framezero/mycompany/" target="_blank">
            <img src={LinkedinLogo} alt="LinkedIn" />
          </SocialMediaItem>
          <SocialMediaItem href="https://www.instagram.com/frame.productora/?hl=es-la" target="_blank">
            <img src={InstagramLogo} alt="Instagram" />
          </SocialMediaItem>
          <SocialMediaItem href="https://vimeo.com/framezero" target="_blank">
            <img src={VimeoLogo} alt="Vimeo" />
          </SocialMediaItem>
          <SocialMediaItem href="https://www.youtube.com/channel/UCggmU5TfwOo-Ahk4z5WfmBQ" target="_blank">
            <img src={YoutubeLogo} alt="You Tube" />
          </SocialMediaItem>
        </SocialMediaList>
        <CopyRight>
          ©2011 – 2021 - FRAME - All Rights Reserved
          </CopyRight>
      </BottomSection>
    </FooterClientsWrapper >
  );
};

export default FooterClients;
