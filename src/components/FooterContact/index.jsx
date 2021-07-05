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

import FacebookLogo from "../../assets/svgs/face.svg";
import InstagramLogo from "../../assets/svgs/insta.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
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
      </Gradient>


    </FooterContactWrapper >
  );
};

export default FooterContact;
