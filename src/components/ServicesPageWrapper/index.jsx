import React, { useContext } from 'react';

import Hero from "../../components/Hero";
import PortfolioSection from "../../components/PortfolioSection";
import DarkContext from '../../context/dark';
import FooterContact from '../FooterContact';

import { ServiceWrapper, ContentWrapper } from './styles';

const Service = ({ projects = [], children }) => {
  const { dark } = useContext(DarkContext);

  return (
    <ServiceWrapper dark={dark}>

      <Hero />

      <ContentWrapper>
        <h3>Servicios</h3>

        {children}
      </ContentWrapper>

      {
        projects.length ?
          <PortfolioSection projects={projects} displayAll={false} /> : null
      }

      <FooterContact />

    </ServiceWrapper>
  );
};

export default Service;
