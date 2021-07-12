import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioCard from '../PortfolioCard';
import { PortfolioSectionWrapper, Filters, FilterItem, Grid } from './styles';
import { Link } from 'react-router-dom';
import DarkContext from '../../context/dark';

const PortfolioSection = ({ projects = [], displayFilter, displayAll }) => {
  const { dark } = useContext(DarkContext);
  const [filterBy, setFilterBy] = useState(null);
  const { t } = useTranslation();

  const toggleFilter = (service) => {
    if (service === filterBy) {
      setFilterBy(null);
    } else {
      setFilterBy(service);
    }
  };

  const overlays = [
    `background: transparent linear-gradient(241deg, #DD1B3D 0%, #A43D8F 50%, #1D4194 100%) 0% 0% no-repeat padding-box;`,
    `background: transparent linear-gradient(241deg, #6F2B8C 0%, #75C482 50%, #723F94 100%) 0% 0% no-repeat padding-box;`,
    `background: transparent linear-gradient(241deg, #DD1B3D 0%, #A43D8F 50%, #1D4194 100%) 0% 0% no-repeat padding-box;`,
    `background: transparent linear-gradient(241deg, #69C6C5 0%, #FCE504 52%, #A94787 100%) 0% 0% no-repeat padding-box;`,
  ];

  const services = new Set(projects.map(service => service.servicios).flat());
  return (
    <PortfolioSectionWrapper dark={dark}>
      <h1>{t("Portfolio").toUpperCase()}</h1>

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
            projects.map((project, index) => (
              <PortfolioCard {...project} key={project.url} overlay={overlays[index % 4]} />
            ))) : (
            projects.filter(project => project.servicios.includes(filterBy)).map((project, index) => (
              <PortfolioCard {...project} key={project.url} overlay={overlays[index % 4]} />
            )))
        }
      </Grid>
      {!displayAll ?
        <span style={{
          marginTop: "2rem",
          fontWeight: "bold",
          fontSize: "16px",
        }}>
          <Link to="/portfolio">
            {t("See More").toUpperCase()} &gt;
        </Link>
        </span > : null
      }
    </PortfolioSectionWrapper >
  );
};

export default PortfolioSection;
