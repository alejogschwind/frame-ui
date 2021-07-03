import React, { useContext, useEffect, useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceBrandingTVWrapper, Title, Description } from './styles';

const ServiceBrandingTV = () => {
  const { data, error, loading } = useRequest(generateURL(5));
  const projects = data ? Object.values(data.proyectos) : [];
  const { dark } = useContext(DarkContext);
  const { setHeaders } = useContext(HeadersContext);

  useEffect(() => {
    console.log(data);
    if (data) {
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceBrandingTVWrapper dark={dark}>

      <ServicesPageWrapper projects={projects} loading={loading}>

        <Title>Branding TV</Title>
        <Description>
          Desarrollamos contenido y producimos piezas promocionales, especiales, intersticiales, institucionales, trailers, teasers, video clips, campañas integrales. Contamos con la infraestructura profesional y técnica para llevar adelante producciones promocionales de gran volumen, optimizando tiempos y superando objetivos. Nuestros pilares se centran en la coordinación de equipo, selección de profesionales y recursos técnicos propios, para alcanzar con éxito las necesidades del cliente.
        </Description>

      </ServicesPageWrapper>

    </ServiceBrandingTVWrapper>
  );
};

export default ServiceBrandingTV;
