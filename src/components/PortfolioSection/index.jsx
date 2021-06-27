import React from 'react';

import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem, Grid } from './styles';
import { Link } from 'react-router-dom';

const PortfolioSection = ({ projects = [], displayFilter, displayAll }) => {

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
        {
          projects.map((project) => (
            <PortfolioCard {...project} />
          ))
        }
        {/* <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" /> */}
      </Grid>
      {!displayAll ?
        <span>
          <Link to="/portfolio">
            VER MÁS &gt;
        </Link>
        </span> : null
      }
    </PortfolioSectionWrapper>
  );
};

export default PortfolioSection;
