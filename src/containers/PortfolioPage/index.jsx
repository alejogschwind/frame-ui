import React, { useLayoutEffect } from 'react';

import Hero from '../../components/Hero';
import FooterClients from '../../components/FooterClients';
import PortfolioSection from '../../components/PortfolioSection';

import {
  PortfolioPageWrapper,
} from "./styles";

const PortfolioPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PortfolioPageWrapper>

      <Hero />

      <PortfolioSection displayFilter />

      <FooterClients />

    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;
