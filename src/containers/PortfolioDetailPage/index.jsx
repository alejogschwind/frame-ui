import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import FooterContact from '../../components/FooterContact';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import {
  PortfolioDetailPageWrapper,
  MainSection,
  ImageWrapper,
  ProjectDetail,
  Title,
  Info,
  Description,
  LinksGroup,
  Row,
  Left
} from './styles';
import image from "../../assets/images/portfolioDetail.jpg";


function PortfolioDetailPage({ match }) {
  const { url } = match.params;
  const { data, error, loading } = useRequest(generateURL(7, url));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(data);
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <PortfolioDetailPageWrapper>
      <Header />
      <MainSection>
        <ImageWrapper>
          {/* <img src={image} alt="Detail" /> */}
          {/* {
            Object.keys(data.proyecto?.videos) > 0 &&
            <iframe src={Object.values(data.proyecto?.videos)[0]} webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
          } */}
          {
            Object.values(data.proyecto?.videos).map(video => (
              <iframe src={video} webkitallowfullscreen mozallowfullscreen allowfullscreen>
              </iframe>
            ))
          }
        </ImageWrapper>

        <ProjectDetail>
          <Row>
            <Left>
              <Title>{data.proyecto?.titulo}</Title>
              <Info><span>Cliente:</span>{data.proyecto?.cliente}</Info>
              <Info><span>Fecha:</span>12/03/2021</Info>
              <Info><span>Tarea:</span>Desarrollo de plataforma</Info>
            </Left>

            <Description>
              {data.proyecto?.descripcion}
            </Description>
          </Row>

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
