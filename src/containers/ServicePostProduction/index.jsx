import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import LanguagesContext from '../../context/language';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServicePostProductionWrapper, Title, Description, Box, BoxWrapper, Grid } from './styles';

const ServicePostProduction = () => {
  const { lan } = useContext(LanguagesContext);
  const { data, error, loading } = useRequest(generateURL(9, "", lan));
  const { dark } = useContext(DarkContext);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { setHeaders } = useContext(HeadersContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      setProjects([...Object.values(data.proyectos)]);
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServicePostProductionWrapper dark={dark}>

      <ServicesPageWrapper projects={projects} loading={loading}>
        <Title>{t("PostProduction").toUpperCase()}</Title>
        <Description>
          {t("We provide")}
        </Description>

        <Grid>

          <BoxWrapper dark={dark}>
            <Box>
              <h4>
                9
              </h4>
            </Box>
            <h2>
              {t('4K-HD edit islands')}
            </h2>
          </BoxWrapper>

          <BoxWrapper reverse dark={dark}>
            <Box>
              <h4>
                4
              </h4>
            </Box>
            <h2>
              {t('On Line with color correction broadcast / Render Farm')}
            </h2>
          </BoxWrapper>

          <BoxWrapper dark={dark}>
            <Box>
              <h4>
                1
              </h4>
            </Box>
            <h2>
              {t('Recording studio')}
            </h2>
          </BoxWrapper>

          <BoxWrapper reverse dark={dark}>
            <Box>
              <h4>
                2
              </h4>
            </Box>
            <h2>
              Protools
            </h2>
          </BoxWrapper>
        </Grid>

      </ServicesPageWrapper>


    </ServicePostProductionWrapper >
  );
};

export default ServicePostProduction;
