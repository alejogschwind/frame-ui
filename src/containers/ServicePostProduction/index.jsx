import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServicePostProductionWrapper, Title, Description } from './styles';

const ServicePostProduction = () => {
  // const { data, error, loading } = useRequest(generateURL(8));
  // console.log(data);
  // const projects = data ? Object.values(data.proyectos) : [];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
