import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceBrandingTVWrapper, Title, Description } from './styles';

const ServiceBrandingTV = () => {
  const { data, error, loading } = useRequest(generateURL(5));
  const projects = data ? Object.values(data.proyectos) : [];
  const { dark } = useContext(DarkContext);
  const { setHeaders } = useContext(HeadersContext);
  const { t } = useTranslation();

  useEffect(() => {
    console.log(data);
    if (data) {
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceBrandingTVWrapper dark={dark}>

      <ServicesPageWrapper projects={projects} loading={loading}>

        <Title>{t("Branding TV")}</Title>
        <Description>
          {t("Frame is an audiovisual")}
        </Description>

      </ServicesPageWrapper>

    </ServiceBrandingTVWrapper>
  );
};

export default ServiceBrandingTV;
