import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Title from "../../components/Title";
import ContactForm from '../ContactForm';

import {
  FooterContactWrapper,
  TopSection,
  BottomSection,
  Gradient,
  FrameLogoSquareStyled,
  SocialMediaItem,
  SocialMediaList,
  CopyRight,
  MiddleSection
} from './styles';

import LinkedinLogo from "../../assets/svgs/in.png";
import InstagramLogo from "../../assets/svgs/insta.svg";
import VimeoLogo from "../../assets/svgs/vimeo.png";
import YoutubeLogo from "../../assets/svgs/youtube.png";
import DarkContext from '../../context/dark';

const FooterContact = () => {
  const { dark } = useContext(DarkContext);
  const { t } = useTranslation();

  return (
    <FooterContactWrapper>

      <TopSection>
        <Title type={1}>{t("Contact").toUpperCase()}</Title>
        <p>{t("Our team is")}</p>
      </TopSection>

      <Gradient>
        <MiddleSection dark={dark}>

          <ContactForm />

        </MiddleSection>

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
      </Gradient>


    </FooterContactWrapper >
  );
};

export default FooterContact;
