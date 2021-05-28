import React from 'react';

import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem } from './styles';

const PortfolioSection = ({ displayFilter }) => {
  return (
    <PortfolioSectionWrapper>
      <h1>PORTFOLIO</h1>

      {
        displayFilter &&
        <Filters>
          <FilterItem>Multiplataforma</FilterItem>
          <FilterItem>Formatos</FilterItem>
          <FilterItem>Marketing</FilterItem>
          <FilterItem>Branding TV</FilterItem>
          <FilterItem>Post Producción</FilterItem>
        </Filters>
      }

      <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      <span>
        VER MÁS &gt;
      </span>
    </PortfolioSectionWrapper>
  );
};

export default PortfolioSection;
