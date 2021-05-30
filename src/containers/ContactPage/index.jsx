import React from 'react';

import Hero from "../../components/Hero";
import Title from "../../components/Title";
import ContactForm from '../../components/ContactForm';
import FooterClients from '../../components/Footer1';

import { ContactPageWrapper, ContactSection, InfoCard, WordIconStyled, MailIconStyled, PhoneIconStyled } from './styles';

import imageBackground from "../../assets/images/map.png";
import Footer from '../../components/Footer';

const ContactPage = () => {

  const borderColor = "linear-gradient(to right,#9D1A80 10%, #C13E66 20%, #DC5A53 30%, #ED6B48 40%, #F37144 50%, #EE6C46 60%, #E2604F 70%, #CD4B5E 80%, #AF2F72 90%, #9C1C80 100%)";

  return (
    <ContactPageWrapper>
      <Hero
        image={imageBackground}
        borderColor={borderColor}
      />

      <ContactSection>

        <Title type={1}>Contact Page</Title>

        <p>
          Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
        </p>

        <ContactForm />

        <InfoCard>
          <WordIconStyled />
          <h3>Nuestra Dirección</h3>
          <h5>Tronador 671 (c1427CRM) CABA, Argentina</h5>
        </InfoCard>

        <InfoCard>
          <MailIconStyled />
          <h3>Nuestro Correo</h3>
          <h5>info@frame.com.ar</h5>
        </InfoCard>

        <InfoCard>
          <PhoneIconStyled />
          <h3>Nuestro Teléfono</h3>
          <h5>011 4553-7188</h5>
        </InfoCard>

      </ContactSection>

      <Footer />

    </ContactPageWrapper>
  );
};

export default ContactPage;
