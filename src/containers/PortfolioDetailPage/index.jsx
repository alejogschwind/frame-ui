import React from 'react';

import Header from "../../components/Header";
import FooterContact from '../../components/FooterContact';

import {
  PortfolioDetailPageWrapper,
  MainSection,
  ImageWrapper,
  ProjectDetail,
  Title,
  Info,
  Description,
  LinksGroup
} from './styles';

import image from "../../assets/images/portfolioDetail.jpg";
import { Link } from 'react-router-dom';

function PortfolioDetailPage() {
  return (
    <PortfolioDetailPageWrapper>
      <Header />
      <MainSection>
        <ImageWrapper>
          <img src={image} alt="Detail" />
        </ImageWrapper>

        <ProjectDetail>
          <Title>Nombre del proyecto</Title>
          <Info><span>Cliente:</span>Nickelodeon</Info>
          <Info><span>Fecha:</span>12/03/2021</Info>
          <Info><span>Tarea:</span>Desarrollo de plataforma</Info>

          <Description>
            Frame es una productora de contenido audiovisual con más de 15 años en el mercado, que brinda soluciones inteas calidad en la realización de productos para cine, publicidad, televisión, video, dispositivos móviles e internet.
          </Description>

          <LinksGroup>
            <Link>Anterior</Link>
            <Link>Volver</Link>
            <Link>Siguiente</Link>
          </LinksGroup>
        </ProjectDetail>

        <FooterContact />
      </MainSection>
    </PortfolioDetailPageWrapper>
  );
}

export default PortfolioDetailPage;
