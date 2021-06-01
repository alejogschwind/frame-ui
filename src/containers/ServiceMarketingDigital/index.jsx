import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import { ServiceMarketingDigitalWrapper, Title, Description } from './styles';

const ServiceMarketingDigital = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceMarketingDigitalWrapper>

      <ServicesPageWrapper>

        <Title>Marketing digital</Title>
        <Description>
          Diversas marcas nos buscaron para realizar acciones y desarrollar contenidos digitales para sus productos. Experiencias 360°, Shows musicales, productplacement en contenidos original, desarrollo de campañas transmedia, son algunas de los formatos que realizamos para Hewlett Packard, Movistar, Foreo, Faber Castel, entre otras.
        </Description>

      </ServicesPageWrapper>

    </ServiceMarketingDigitalWrapper>
  );
};

export default ServiceMarketingDigital;
