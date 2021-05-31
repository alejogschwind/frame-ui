import React from 'react';

import Hero from "../../components/Hero";
import PortfolioSection from "../../components/PortfolioSection";
import FooterContact from '../FooterContact';

import { ServiceWrapper, ContentWrapper } from './styles';

const Service = ({ children }) => {
  return (
    <ServiceWrapper>

      <Hero />

      <ContentWrapper>
        <h3>Servicios</h3>

        {children}
      </ContentWrapper>

      <PortfolioSection />

      <FooterContact />

    </ServiceWrapper>
  );
};

export default Service;
