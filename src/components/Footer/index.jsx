import React from 'react';

import { FooterWrapper, FrameLogoSquareStyled, SocialMediaItem, SocialMediaList, CopyRight } from './styles';

import LinkedinLogo from "../../assets/svgs/in.png";
import InstagramLogo from "../../assets/svgs/insta.svg";
import VimeoLogo from "../../assets/svgs/vimeo.png";
import YoutubeLogo from "../../assets/svgs/youtube.png";

const Footer = () => {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
