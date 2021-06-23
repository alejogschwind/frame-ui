import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceDevelopmentPageWrapper, Description, Title } from "./styles";

const ServiceDevelopmentPage = () => {
  const { data, error, loading } = useRequest(generateURL(3));
  const projects = data ? Object.values(data.proyectos) : [];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceDevelopmentPageWrapper >

      <ServicesPageWrapper projects={projects}>

        <Title>Desarrollo de contenido digital multiplataforma</Title>
        <Description>
          En los últimos años hemos enfocado nuestra creatividad y estrategia de producción en la creación de contenidos short forms para medios digitales. Nuestro contenido original en YouTube alcanzó + de 11M de suscriptores y + de 200M de vistas en 3 años. Somos 1 de las 10 Youtube Network que existen en Argentina y service provider de Google en la región.
        </Description>

      </ServicesPageWrapper>

    </ServiceDevelopmentPageWrapper>
  );
};

export default ServiceDevelopmentPage;
