import React, { useContext, useLayoutEffect } from 'react';
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
  Left,
  VimeoWrapper
} from './styles';
import image from "../../assets/images/portfolioDetail.jpg";
import DarkContext from '../../context/dark';
import ReactPlayer from 'react-player';

function PortfolioDetailPage({ match, history }) {
  const { url } = match.params;
  const { data, error, loading } = useRequest(generateURL(7, url));
  const { dark } = useContext(DarkContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(data);
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <PortfolioDetailPageWrapper dark={dark}>

      <Header solid />

      <MainSection dark={dark}>
        {/* <ImageWrapper> */}
        {/* <img src={image} alt="Detail" /> */}
        {/* {
            Object.keys(data.proyecto?.videos) > 0 &&
            <iframe src={Object.values(data.proyecto?.videos)[0]} webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
          } */}

        {/* </ImageWrapper> */}

        <ProjectDetail dark={dark}>
          {
            Object.values(data.proyecto?.videos).map(video => (
              <VimeoWrapper>
                <ReactPlayer
                  controls={true}
                  allowfullscreen={false}
                  url={video}
                />
              </VimeoWrapper>
            ))
          }
          <Row>
            <Left>
              <Title>{data.proyecto?.titulo}</Title>
              <Info><span>Cliente:</span>{data.proyecto?.cliente}</Info>
              {/* <Info><span>Fecha:</span>12/03/2021</Info>
              <Info><span>Tarea:</span>Desarrollo de plataforma</Info> */}
            </Left>

            <Description>
              {data.proyecto?.descripcion}
            </Description>
          </Row>

          <LinksGroup dark={dark}>
            <Link to={data.proyecto.anterior.url}>Anterior</Link>
            <Link onClick={() => {
              history.goBack();
            }}>Volver</Link>
            <Link to={data.proyecto.siguiente.url}>Siguiente</Link>
          </LinksGroup>
        </ProjectDetail>

        <FooterContact />
      </MainSection>
    </PortfolioDetailPageWrapper>
  );
}

export default PortfolioDetailPage;
