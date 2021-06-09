import React from 'react';

import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem, Grid } from './styles';
import { Link } from 'react-router-dom';

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

      <Grid>
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
      </Grid>
      <span>
        <Link to="/portfolio">
          VER MÁS &gt;
        </Link>
      </span>
    </PortfolioSectionWrapper>
  );
};

export default PortfolioSection;
