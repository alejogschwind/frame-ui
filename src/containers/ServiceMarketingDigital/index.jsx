import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import LanguagesContext from '../../context/language';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceMarketingDigitalWrapper, Title, Description } from './styles';

const ServiceMarketingDigital = () => {
  const { lan } = useContext(LanguagesContext);
  const { data, error, loading } = useRequest(generateURL(4, "", lan));
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
    <ServiceMarketingDigitalWrapper dark={dark}>

      <ServicesPageWrapper projects={projects} loading={loading}>

        <Title>{t("Marketing").toUpperCase()}</Title>
        <Description>
          {t("Various brands")}
        </Description>

      </ServicesPageWrapper>

    </ServiceMarketingDigitalWrapper>
  );
};

export default ServiceMarketingDigital;
