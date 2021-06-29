import React, { useEffect, useContext } from "react";
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

const HomePage = () => {
  const { data, error, loading } = useRequest(generateURL(1));

  const { projects, setProjects } = useContext(ProjectsContext);
  const { headers, setHeaders } = useContext(HeadersContext);
  const { dark } = useContext(DarkContext);

  useEffect(() => {
    console.log(data);
    if (data) {
      setProjects([...Object.values(data.proyectos)]);
      setHeaders([data.encabezado_vimeo]);
    }
    console.log("H", headers);
  }, [data]);

  return (
    <HomePageWrapper dark={dark}>

      <Hero />

      <AboutUsSection dark={dark}>
        <p>
          <strong>Frame</strong> es una productora de contenido audiovisual con más
         de <strong>15 años</strong> en el mercado, que brinda soluciones integrales de alta calidad
        </p>
        <span>
          CONOCENOS &gt;
        </span>
      </AboutUsSection>

      <ServiceSection dark={dark}>
        <h1>SERVICIOS</h1>

        <Grid>
          <Link to="/servicio/desarollo">
            <ServiceCard
              text={"Desarrollo de contenido digital multiplataforma"}
              image={imagePosition1}
              position={1}
            />
          </Link>

          <Link
            to="/servicio/produccion"
            className={"pos1"}
          >
            <ServiceCard
              text={"Desarrollo y producción de formatos"}
              image={imagePosition2}
              position={2}
            />
          </Link>

          <Link to="/servicio/brandingTV">
            <ServiceCard
              text={"Branding TV"}
              image={imagePosition4}
              position={4}
            />
          </Link>

          <Link to="/servicio/marketing">
            <ServiceCard
              text={"Marketing digital"}
              image={imagePosition3}
              position={3}
            />
          </Link>

          <Link to="/servicio/post-produccion">
            <ServiceCard
              text={"Post producción"}
              image={imagePosition6}
              position={6}
            />
          </Link>

          <Link
            to="/servicio/estudio"
            className={"pos2"}
          >
            <ServiceCard
              text={"Estudio Técnica"}
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