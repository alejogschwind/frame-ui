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

import LNLogo from "../../assets/svgs/ln.png";
import CocaColaLogo from "../../assets/svgs/cocacola.svg";
import NationalGeographicLogo from "../../assets/svgs/nationalgeographic.svg";
import Canal13Logo from "../../assets/svgs/canal13.png";
import DiscoveryLogo from "../../assets/svgs/discovery.svg";
import DisneyLogo from "../../assets/svgs/disney.svg";
import LegoLogo from "../../assets/svgs/lego.svg";
import HaH from "../../assets/svgs/hah.png";
import NikeLogo from "../../assets/svgs/nike.svg";
import PanaLogo from "../../assets/svgs/pana.svg";
import SpaceLogo from "../../assets/svgs/space.svg";
import StarLogo from "../../assets/svgs/star.svg";
import WarnerLogo from "../../assets/svgs/warner.svg";
import YouTubeLogo2 from "../../assets/svgs/youtube.svg";

import FacebookLogo from "../../assets/svgs/face.svg";
import InstagramLogo from "../../assets/svgs/insta.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
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
        title: "National Geographic Channel",
        image: NationalGeographicLogo
      },
      {
        title: "H&H",
        image: HaH
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
        title: "Lego",
        image: LegoLogo
      },
      {
        title: "Instagram",
        image: InstagramLogo
      },
      {
        title: "Panasonic",
        image: PanaLogo
      },
      {
        title: "Space",
        image: SpaceLogo
      },
      // {
      //   title: "Lego",
      //   image: Logo15
      // },
      {
        title: "WB",
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
          <SocialMediaItem href="#">
            <img src={FacebookLogo} alt="Facebook" />
          </SocialMediaItem>
          <SocialMediaItem href="#">
            <img src={InstagramLogo} alt="Facebook" />
          </SocialMediaItem>
          <SocialMediaItem href="#">
            <img src={TwitterLogo} alt="Facebook" />
          </SocialMediaItem>
          <SocialMediaItem href="#">
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
