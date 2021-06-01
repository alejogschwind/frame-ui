import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import { ServiceProductionWrapper, Title, Description } from './styles';

const ServiceProduction = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, window.innerHeight);
  });

  return (
    <ServiceProductionWrapper>

      <ServicesPageWrapper>
        <Title>Desarrollo y producción de formatos</Title>
        <Description>
          Disney Channel, El Gourmet, Netflix, Canal Encuentro, LN+, son algunos de los importantes y variados clientes que confiaron en nosotros a la hora de desarrollar y producir formatos de manera integral. Contamos con profesionales de amplia experiencia en el medio en todas las áreas para llevar adelante la creatividad, la pre-producción, realización y post-producción.
        </Description>
      </ServicesPageWrapper>


    </ServiceProductionWrapper>
  );
};

export default ServiceProduction;
