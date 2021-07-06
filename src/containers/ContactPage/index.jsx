import React, { useContext, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import Hero from "../../components/Hero";
import Title from "../../components/Title";
import ContactForm from '../../components/ContactForm';
import FooterClients from '../../components/FooterClients';

import { ContactPageWrapper, ContactSection, InfoCard, WordIconStyled, MailIconStyled, PhoneIconStyled, ContactFormWrapper, Left, Row } from './styles';

import imageBackground from "../../assets/images/map.png";
import Footer from '../../components/Footer';
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';

const ContactPage = () => {
  const { dark } = useContext(DarkContext);
  const { setHeaders } = useContext(HeadersContext);
  const { t } = useTranslation();

  const borderColor = "linear-gradient(to right,#9D1A80 10%, #C13E66 20%, #DC5A53 30%, #ED6B48 40%, #F37144 50%, #EE6C46 60%, #E2604F 70%, #CD4B5E 80%, #AF2F72 90%, #9C1C80 100%)";

  useEffect(() => {
    setHeaders([]);
  }, []);

  return (
    <ContactPageWrapper dark={dark}>
      <Hero
        image={imageBackground}
        borderColor={borderColor}
        loadingData={false}
        contact={true}
      />

      <ContactSection dark={dark}>

        <Title type={1}>{t("Contact").toUpperCase()}</Title>

        <p>
          {t("Give us a call")}
        </p>

        <Row>

          <ContactFormWrapper>
            <h2>{t("Let's work together")}</h2>
            <h4><Trans components={{ br: <br /> }}>Your email is kept private</Trans></h4>
            <ContactForm />
          </ContactFormWrapper>

          <Left dark={dark}>
            <InfoCard>
              <WordIconStyled />
              <h3>{t("Our Addresses")}</h3>
              <h5>Tronador 671, Buenos Aires.</h5>
              <h5>Ruiz Huidobro 4365, Buenos Aires.</h5>
              <h5>18459, Pines Blvd, Pembroke Pines, Miami.</h5>
            </InfoCard>

            <InfoCard>
              <MailIconStyled />
              <h3>{t("Our Email")}</h3>
              <h5>info@frame.com.ar</h5>
            </InfoCard>

            <InfoCard>
              <PhoneIconStyled />
              <h3>{t("Our Phone Number")}</h3>
              <h5>011 4553-7188</h5>
            </InfoCard>
          </Left>
        </Row>


      </ContactSection>

      <Footer />

    </ContactPageWrapper >
  );
};

export default ContactPage;
