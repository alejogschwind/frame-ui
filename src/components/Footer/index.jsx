import React from 'react';

import { FooterWrapper, FrameLogoSquareStyled, SocialMediaItem, SocialMediaList, CopyRight } from './styles';

import FacebookLogo from "../../assets/svgs/face.svg";
import InstagramLogo from "../../assets/svgs/insta.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
import YoutubeLogo from "../../assets/svgs/youtube.png";

const Footer = () => {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
