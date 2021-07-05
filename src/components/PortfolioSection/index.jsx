import React, { useContext, useState } from 'react';

import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem, Grid } from './styles';
import { Link } from 'react-router-dom';
import DarkContext from '../../context/dark';

const PortfolioSection = ({ projects = [], displayFilter, displayAll }) => {
  const { dark } = useContext(DarkContext);
  const [filterBy, setFilterBy] = useState(null);

  const toggleFilter = (service) => {
    if (service === filterBy) {
      setFilterBy(null);
    } else {
      setFilterBy(service);
    }
  };

  const services = new Set(projects.map(service => service.servicios).flat());
  return (
    <PortfolioSectionWrapper dark={dark}>
      <h1>PORTFOLIO</h1>

      {
        displayFilter &&
        <Filters dark={dark}>
          {[...services].map(service => (
            <FilterItem selected={(filterBy === service)} onClick={() => toggleFilter(service)}>{service}</FilterItem>
          ))}
        </Filters>
      }

      <Grid>
        {
          !filterBy ? (
            projects.map((project) => (
              <PortfolioCard {...project} key={project.url} />
            ))) : (
            projects.filter(project => project.servicios.includes(filterBy)).map(project => (
              <PortfolioCard {...project} key={project.url} />
            )))
        }
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
