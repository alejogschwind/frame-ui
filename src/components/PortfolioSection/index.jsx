import React, { useContext } from 'react';

import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem, Grid } from './styles';
import { Link } from 'react-router-dom';
import DarkContext from '../../context/dark';

const PortfolioSection = ({ projects = [], displayFilter, displayAll }) => {
  const { dark } = useContext(DarkContext);

  return (
    <PortfolioSectionWrapper dark={dark}>
      <h1>PORTFOLIO</h1>

      {
        displayFilter &&
        <Filters dark={dark}>
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
            <PortfolioCard {...project} key={project.url} />
          ))
        }
        {/* <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" /> */}
      </Grid>
      {!displayAll ?
        <span style={{
          marginTop: "2rem"
        }}>
          <Link to="/portfolio">
            VER MÁS &gt;
        </Link>
        </span > : null
      }
    </PortfolioSectionWrapper >
  );
};

export default PortfolioSection;
