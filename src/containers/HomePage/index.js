import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ServiceCard from "../../components/ServiceCard";
import FooterClients from "../../components/FooterClients";
import Hero from "../../components/Hero";
import PortfolioSection from "../../components/PortfolioSection";

import {
  HomePageWrapper,
  AboutUsSection,
  ServiceSection
} from "./styles";

import imagePosition1 from "../../assets/images/desarollo.jpg";
import imagePosition2 from "../../assets/images/LN.jpg";
import imagePosition3 from "../../assets/images/toy.jpg";
import imagePosition4 from "../../assets/images/afa.png";
import imagePosition5 from "../../assets/images/estudio.JPG";
import imagePosition6 from "../../assets/images/post.jpg";

const HomePage = () => {
  return (
    <HomePageWrapper>

      <Hero />

      <AboutUsSection>
        <p>
          <strong>Frame</strong> es una productora de contenido audiovisual con más
         de <strong>15 años</strong> en el mercado, que brinda soluciones integrales de alta calidad
        </p>
        <span>
          CONOCENOS &gt;
        </span>
      </AboutUsSection>

      <ServiceSection>
        <h1>SERVICIOS</h1>
        <Link to="/servicio/desarollo">
          <ServiceCard
            text={"Desarrollo de contenido digital multiplataforma"}
            image={imagePosition1}
            position={1}
          />
        </Link>
        <Link to="/servicio/produccion">
          <ServiceCard
            text={"Desarrollo y producción de formatos"}
            image={imagePosition2}
            position={2}
          />
        </Link>
        <Link to="/servicio/marketing">
          <ServiceCard
            text={"Marketing digital"}
            image={imagePosition3}
            position={3}
          />
        </Link>
        <Link to="/servicio/brandingTV">
          <ServiceCard
            text={"Branding TV"}
            image={imagePosition4}
            position={4}
          />
        </Link>
        <Link to="/servicio/estudio">
          <ServiceCard
            text={"Estudio Técnica"}
            image={imagePosition5}
            position={5}
          />
        </Link>
        <Link to="/servicio/post-produccion">
          <ServiceCard
            text={"Post producción"}
            image={imagePosition6}
            position={6}
          />
        </Link>
      </ServiceSection>

      <PortfolioSection />

      <FooterClients />

    </HomePageWrapper >

  );
};

export default HomePage;