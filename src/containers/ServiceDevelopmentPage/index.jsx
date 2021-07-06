import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import LanguagesContext from '../../context/language';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceDevelopmentPageWrapper, Description, Title } from "./styles";

const ServiceDevelopmentPage = () => {
  const { lan } = useContext(LanguagesContext);
  const { data, error, loading } = useRequest(generateURL(2, "", lan));
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
    <ServiceDevelopmentPageWrapper dark={dark}>

      <ServicesPageWrapper projects={projects} loading={loading}>

        <Title>{t("Development")}</Title>
        <Description>
          <Trans components={{ br: <br /> }}>In Recents Years</Trans>
        </Description>

      </ServicesPageWrapper>

    </ServiceDevelopmentPageWrapper>
  );
};

export default ServiceDevelopmentPage;
