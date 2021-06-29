import React, { useContext, useEffect, useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceProductionWrapper, Title, Description } from './styles';

const ServiceProduction = () => {
  const { data, error, loading } = useRequest(generateURL(3));
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
    <ServiceProductionWrapper dark={dark}>

      <ServicesPageWrapper projects={projects}>
        <Title>Desarrollo y producción de formatos</Title>
        <Description>
          Disney Channel, El Gourmet, Netflix, Canal Encuentro, LN+, son algunos de los importantes y variados clientes que confiaron en nosotros a la hora de desarrollar y producir formatos de manera integral. Contamos con profesionales de amplia experiencia en el medio en todas las áreas para llevar adelante la creatividad, la pre-producción, realización y post-producción.
        </Description>
      </ServicesPageWrapper>


    </ServiceProductionWrapper>
  );
};

export default ServiceProduction;
