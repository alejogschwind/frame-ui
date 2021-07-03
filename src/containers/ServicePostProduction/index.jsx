import React, { useContext, useEffect, useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServicePostProductionWrapper, Title, Description } from './styles';

const ServicePostProduction = () => {
  const { data, error, loading } = useRequest(generateURL(9));
  const { dark } = useContext(DarkContext);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { setHeaders } = useContext(HeadersContext);

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
        <Title>Post producción</Title>
        <Description>
          Brindamos servicio de post-producción integral contando con una gran infraestructura. Diseñamos el workflow necesario para cada cliente, pensándolo en conjunto y utilizando herramientas de gestión online como Trello y Sony Ci para agilizar tiempos y lograr los objetivos de una manera clara y sencilla.
        </Description>
      </ServicesPageWrapper>


    </ServicePostProductionWrapper>
  );
};

export default ServicePostProduction;
