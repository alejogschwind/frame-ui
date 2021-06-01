import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import { ServicePostProductionWrapper, Title, Description } from './styles';

const ServicePostProduction = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, window.innerHeight);
  });

  return (
    <ServicePostProductionWrapper>

      <ServicesPageWrapper>
        <Title>Post producción</Title>
        <Description>
          Brindamos servicio de post-producción integral contando con una gran infraestructura. Diseñamos el workflow necesario para cada cliente, pensándolo en conjunto y utilizando herramientas de gestión online como Trello y Sony Ci para agilizar tiempos y lograr los objetivos de una manera clara y sencilla.
        </Description>
      </ServicesPageWrapper>


    </ServicePostProductionWrapper>
  );
};

export default ServicePostProduction;
