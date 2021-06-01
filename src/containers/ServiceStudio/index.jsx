import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import { ServiceStudioWrapper, Title, Description } from './styles';

const ServiceStudio = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceStudioWrapper>

      <ServicesPageWrapper>
        <Title>Estudio y técnica</Title>
        <Description>
          En los últimos años hemos enfocado nuestra creatividad y estrategia de producción en la creación de contenidos short forms para medios digitales. Nuestro contenido original en YouTube alcanzó + de 11M de suscriptores y + de 200M de vistas en 3 años. Somos 1 de las 10 Youtube Network que existen en Argentina y service provider de Google en la región.
        </Description>
      </ServicesPageWrapper>


    </ServiceStudioWrapper>
  );
};

export default ServiceStudio;
