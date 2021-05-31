import React from 'react';

import Hero from '../../components/Hero';
import FooterClients from '../../components/FooterClients';
import PortfolioSection from '../../components/PortfolioSection';

import {
  PortfolioPageWrapper,
} from "./styles";

const PortfolioPage = () => {
  return (
    <PortfolioPageWrapper>

      <Hero />

      <PortfolioSection displayFilter />

      <FooterClients />

    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;
