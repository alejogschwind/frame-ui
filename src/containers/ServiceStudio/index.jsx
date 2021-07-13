import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

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
  StudioCardsWrapper,
  Info
} from './styles';

import estudio1 from "../../assets/images/estudio1.JPG";
import estudio2 from "../../assets/images/estudio2.jpg";
import generateURL from '../../urls';
import useRequest from '../../hooks/useRequest';
import HeadersContext from '../../context/headers';
import LanguagesContext from '../../context/language';

const ServiceStudio = () => {
  const { lan } = useContext(LanguagesContext);
  const { data, error, loading } = useRequest(generateURL(8, "", lan));
  const { dark } = useContext(DarkContext);
  const { setHeaders } = useContext(HeadersContext);
  const { t } = useTranslation();

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
    <ServiceStudioWrapper dark={dark}>

      <ServicesPageWrapper loading={loading}>
        <Title>{t("Studio").toUpperCase()}</Title>
        <Description>
          {t("Located in a strategic")}
        </Description>

        <StudioCardsWrapper>

          <StudioCard>
            <ImageWrapper>
              <Border />
              <img src={estudio1} alt={"Nuestras instalaciones"} />
            </ImageWrapper>
            <Info>
              <StudioTitle dark={dark}>
                {t("Our Facilities").toUpperCase()}
              </StudioTitle>
              <StudioDescription style={{
                marginBottom: "4rem"
              }}>
                <Trans components={{ br: <br /> }}>
                  530 square
              </Trans>
              </StudioDescription>
            </Info>
          </StudioCard>

          <StudioCard reverse>
            <ImageWrapper>
              <Border />
              <img src={estudio2} alt={"Estudio Tronador"} />
            </ImageWrapper>
            <Info reverse>

              <StudioTitle dark={dark} style={{
                textAlign: "right"
              }}>
                {t("Tronador Studio").toUpperCase()}
              </StudioTitle>
              <StudioDescription style={{
                textAlign: "right"
              }}>
                <Trans components={{ br: <br /> }}>
                  Technical theatre
              </Trans>
              </StudioDescription>
            </Info>
          </StudioCard>
        </StudioCardsWrapper>

      </ServicesPageWrapper>


    </ServiceStudioWrapper>
  );
};

export default ServiceStudio;
