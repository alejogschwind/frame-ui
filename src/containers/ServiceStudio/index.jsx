import React, { useContext, useEffect, useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';

import {
  ServiceStudioWrapper,
  Title,
  Description,
  StudioCard,
  ImageWrapper,
  StudioTitle,
  StudioDescription,
  Border,
  StudioCardsWrapper
} from './styles';

import estudio1 from "../../assets/images/estudio1.JPG";
import estudio2 from "../../assets/images/estudio2.jpg";
import generateURL from '../../urls';
import useRequest from '../../hooks/useRequest';
import HeadersContext from '../../context/headers';

const ServiceStudio = () => {
  const { data, error, loading } = useRequest(generateURL(8));
  const { dark } = useContext(DarkContext);
  const { setHeaders } = useContext(HeadersContext);

  useEffect(() => {
    if (data) {
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceStudioWrapper dark={dark}>

      <ServicesPageWrapper>
        <Title>Estudio y técnica</Title>
        <Description>
          En los últimos años hemos enfocado nuestra creatividad y estrategia de producción en la creación de contenidos short forms para medios digitales. Nuestro contenido original en YouTube alcanzó + de 11M de suscriptores y + de 200M de vistas en 3 años. Somos 1 de las 10 Youtube Network que existen en Argentina y service provider de Google en la región.
        </Description>

        <StudioCardsWrapper>
          <StudioCard>
            <Border />
            <ImageWrapper>
              <img src={estudio1} alt={"Nuestras instalaciones"} />
            </ImageWrapper>
            <StudioTitle dark={dark}>
              Nuestras instalaciones
            </StudioTitle>
            <StudioDescription style={{
              marginBottom: "4rem"
            }}>
              Estudio de 480M2 <br />
              (400M2 con parrilla) <br />
              Sala de make up/vestuario <br />
              3 camarines <br />
              Oficina de producción<br />
              Baño Hombres <br />
              Baño Mujeres <br />
              Cocina <br />
              Espacio para Catering
            </StudioDescription>
          </StudioCard>

          <StudioCard>
            <Border />
            <ImageWrapper>
              <img src={estudio2} alt={"Estudio Tronador"} />
            </ImageWrapper>
            <StudioTitle dark={dark} style={{
              textAlign: "right"
            }}>
              Estudio Tronador
            </StudioTitle>
            <StudioDescription style={{
              textAlign: "right"
            }}>
              480M2 (400M2 CON PARRILLA)<br />
              Parrilla: pasarela - cabreadas cada 2mts <br />
              Altura a parrilla: 5,5mts<br />
              Carga eléctrica hasta 40kilos<br />
              Aire acondicionado / Calefacción central <br />
              Tableros - 60 circuitos de doble boca vinculados a 60 dimmers. <br />
              Dimmer y consola de 36 canales <br />
              Entrada directa de camiones <br />
              Depósito de 200m2 <br />
              Generador de 100KVA <br />
            </StudioDescription>
          </StudioCard>
        </StudioCardsWrapper>

      </ServicesPageWrapper>


    </ServiceStudioWrapper>
  );
};

export default ServiceStudio;
