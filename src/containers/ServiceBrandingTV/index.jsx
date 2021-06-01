import React, { useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";

import { ServiceBrandingTVWrapper, Title, Description } from './styles';

const ServiceBrandingTV = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceBrandingTVWrapper>

      <ServicesPageWrapper>

        <Title>Branding TV</Title>
        <Description>
          Desarrollamos contenido y producimos piezas promocionales, especiales, intersticiales, institucionales, trailers, teasers, video clips, campañas integrales. Contamos con la infraestructura profesional y técnica para llevar adelante producciones promocionales de gran volumen, optimizando tiempos y superando objetivos. Nuestros pilares se centran en la coordinación de equipo, selección de profesionales y recursos técnicos propios, para alcanzar con éxito las necesidades del cliente.
        </Description>

      </ServicesPageWrapper>

    </ServiceBrandingTVWrapper>
  );
};

export default ServiceBrandingTV;
