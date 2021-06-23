import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceProductionWrapper, Title, Description } from './styles';

const ServiceProduction = () => {
  const { data, error, loading } = useRequest(generateURL(3));
  console.log(data);
  const projects = data ? Object.values(data.proyectos) : [];
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceProductionWrapper>

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
