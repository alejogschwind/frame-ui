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
  MiddleSection,
  InfoCard,
  WordIconStyled,
  MailIconStyled,
  PhoneIconStyled,
  Left,
  ContactFormWrapper,
  P
} from './styles';

import LinkedinLogo from "../../assets/svgs/in.png";
import InstagramLogo from "../../assets/svgs/insta.svg";
import VimeoLogo from "../../assets/svgs/vimeo.png";
import YoutubeLogo from "../../assets/svgs/youtube.png";
import DarkContext from '../../context/dark';
// import { InfoCard, Left, MailIconStyled, PhoneIconStyled, WordIconStyled } from '../../containers/ContactPage/styles';

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

          <Left dark={dark}>

            <P>
              Nuestro equipo está a tu disposición para cualquier duda. Completá el formulario y nos pondremos en contacto contigo lo antes posible.
            </P>

            <InfoCard>
              <WordIconStyled />
              {/* <h3>{t("Our Addresses")}</h3> */}
              <div>
                <h5>Tronador 671, Buenos Aires.</h5>
                <h5>Ruiz Huidobro 4365, Buenos Aires.</h5>
                <h5>18459, Pines Blvd, Pembroke Pines, Miami.</h5>
              </div>
            </InfoCard>

            <InfoCard>
              <MailIconStyled />
              {/* <h3>{t("Our Email")}</h3> */}
              <h5>info@frame.com.ar</h5>
            </InfoCard>

            <InfoCard>
              <PhoneIconStyled />
              {/* <h3>{t("Our Phone Number")}</h3> */}
              <h5>011 4553-7188</h5>
            </InfoCard>
          </Left>

          <ContactFormWrapper>
            <ContactForm />
          </ContactFormWrapper>

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
