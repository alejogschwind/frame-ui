import React, { useEffect, useContext, useLayoutEffect, useRef } from "react";
import { useTranslation, Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useRequest from "../../hooks/useRequest";

import ServiceCard from "../../components/ServiceCard";
import FooterClients from "../../components/FooterClients";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PortfolioSection from "../../components/PortfolioSection";

import {
  HomePageWrapper,
  AboutUsSection,
  ServiceSection,
  Grid
} from "./styles";

import imagePosition1 from "../../assets/images/desarollo.jpg";
import imagePosition2 from "../../assets/images/LN.jpg";
import imagePosition3 from "../../assets/images/toy.jpg";
import imagePosition4 from "../../assets/images/afa.png";
import imagePosition5 from "../../assets/images/estudio.JPG";
import imagePosition6 from "../../assets/images/post.jpg";

import ProjectsContext from "../../context/projects";

import generateURL from "../../urls";
import HeadersContext from "../../context/headers";
import DarkContext from "../../context/dark";
import LanguagesContext from "../../context/language";

const HomePage = () => {
  const { lan } = useContext(LanguagesContext);
  const { data, error, loading, reRequest } = useRequest(generateURL(1, "", lan));

  const { projects, setProjects } = useContext(ProjectsContext);
  const { headers, setHeaders } = useContext(HeadersContext);
  const { dark } = useContext(DarkContext);

  const { t } = useTranslation();

  const firstUpdate = useRef(true);

  useEffect(() => {
    console.log(data);
    if (data) {
      setProjects([...Object.values(data.proyectos)]);
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      reRequest();
    }
  }, [lan]);

  return (
    <HomePageWrapper dark={dark}>

      <Hero loadingData={loading} />

      <AboutUsSection dark={dark}>
        <p>
          <Trans components={{ bold: <strong />, break: <br /> }}>What it is Frame?</Trans>
        </p>
        <span>
          {t("KnowUs").toUpperCase()} &gt;
        </span>
      </AboutUsSection>

      <ServiceSection dark={dark}>
        <h1>{t("Servicies")}</h1>

        <Grid>
          <Link to="/servicio/desarollo">
            <ServiceCard
              text={t("Development")}
              image={imagePosition1}
              position={1}
            />
          </Link>

          <Link
            to="/servicio/produccion"
            className={"pos1"}
          >
            <ServiceCard
              text={t("Production")}
              image={imagePosition2}
              position={2}
            />
          </Link>

          <Link to="/servicio/brandingTV">
            <ServiceCard
              text={t("Branding")}
              image={imagePosition4}
              position={4}
            />
          </Link>

          <Link to="/servicio/marketing">
            <ServiceCard
              text={t("Marketing")}
              image={imagePosition3}
              position={3}
            />
          </Link>

          <Link to="/servicio/post-produccion">
            <ServiceCard
              text={t("PostProduction")}
              image={imagePosition6}
              position={6}
            />
          </Link>

          <Link
            to="/servicio/estudio"
            className={"pos2"}
          >
            <ServiceCard
              text={t("Studio")}
              image={imagePosition5}
              position={5}
            />
          </Link>
        </Grid>
      </ServiceSection>

      <PortfolioSection projects={projects} displayAll={false} />

      <FooterClients />

    </HomePageWrapper >
  );
};

export default HomePage;