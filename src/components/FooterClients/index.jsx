import React from 'react';
import { Carousel } from 'react-responsive-carousel';
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

// import Logo1 from "../../assets/images/logo1.png";
// import Logo2 from "../../assets/images/logo2.png";
// import Logo3 from "../../assets/images/logo3.png";
// import Logo4 from "../../assets/images/logo4.png";
// import Logo5 from "../../assets/images/logo5.png";
// import Logo6 from "../../assets/images/logo6.png";
// import Logo7 from "../../assets/images/logo7.png";
// import Logo8 from "../../assets/images/logo8.png";
// import Logo9 from "../../assets/images/logo9.png";
// import Logo10 from "../../assets/images/logo10.png";
// import Logo11 from "../../assets/images/logo11.png";
// import Logo12 from "../../assets/images/logo12.png";
// // import Logo13 from "../../assets/images/logo13.png";
// import Logo14 from "../../assets/images/logo14.png";
// import Logo15 from "../../assets/images/logo15.png";
// import Logo16 from "../../assets/images/logo16.png";

import LNLogo from "../../assets/svgs/ln.png";
import CocaColaLogo from "../../assets/svgs/cocacola.svg";
import NationalGeographicLogo from "../../assets/svgs/nationalgeographic.svg";
import Canal13Logo from "../../assets/svgs/canal13.png";
import DiscoveryLogo from "../../assets/svgs/discovery.svg";
import DisneyLogo from "../../assets/svgs/disney.svg";
import LegoLogo from "../../assets/svgs/lego.svg";

import FacebookLogo from "../../assets/svgs/face.svg";
import InstagramLogo from "../../assets/svgs/insta.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
import YoutubeLogo from "../../assets/svgs/youtube.svg";

const FooterClients = () => {

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
      // {
      //   title: "H&H",
      //   image: Logo4
      // },
      // {
      //   title: "Nike",
      //   image: Logo5
      // },
      // {
      //   title: "Netflix",
      //   image: Logo6
      // },
      // {
      //   title: "Nickelodeon",
      //   image: Logo7
      // },
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
      // // {
      // //   title: "Marriott",
      // //   image: Logo13
      // // },
      // {
      //   title: "You Tube",
      //   image: Logo14
      // },
      // {
      //   title: "Lego",
      //   image: Logo15
      // },
      // {
      //   title: "WB",
      //   image: Logo16
      // },
    ]
  ];

  return (
    <FooterClientsWrapper>
      <TopSection>
        <h2>CLIENTES</h2>
        <Carousel
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
            <img src={YoutubeLogo} alt="Facebook" />
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
