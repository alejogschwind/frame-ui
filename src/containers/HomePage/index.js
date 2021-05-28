import React, { useState } from "react";

import ServiceCard from "../../components/ServiceCard";
import {
  HomePageWrapper,
  HeroWrapper,
  Header,
  Logo,
  AboutUsSection,
  VideoPlayer,
  VideoPlayerBlur,
  ServiceSection,
  PortfolioSection,
  MenuIconStyled,
  Menu,
  CloseIconStyled,
  MenuList,
  MenuItem
} from "./styles";
import PortfolioCard from "../../components/PortfolioCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import video from "../../assets/videos/test.mp4";

import imagePosition1 from "../../assets/images/desarollo.jpg";
import imagePosition2 from "../../assets/images/LN.jpg";
import imagePosition3 from "../../assets/images/toy.jpg";
import imagePosition4 from "../../assets/images/afa.png";
import imagePosition5 from "../../assets/images/estudio.JPG";
import imagePosition6 from "../../assets/images/post.jpg";
import FooterClients from "../../components/Footer1";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HomePageWrapper>

      <HeroWrapper>

        <Menu menuOpen={menuOpen}>
          <CloseIconStyled onClick={closeMenu} />

          <MenuList>
            <MenuItem>
              Home
            </MenuItem>
            <MenuItem>
              Nosotros
            </MenuItem>
            <MenuItem>
              Servicios
            </MenuItem>
            <MenuItem>
              Contacto
            </MenuItem>
          </MenuList>
        </Menu>

        <VideoPlayerBlur>
          <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo">
            {/* <source  type="video/mp4" /> */}
          </video>
        </VideoPlayerBlur>

        <VideoPlayer>
          <Header>
            <Logo>Frame</Logo>
            <MenuIconStyled menuOpen={menuOpen} onClick={openMenu} />
          </Header>
          <video src={video} autoPlay="autoPlay" loop="loop" muted id="heroVideo">
            {/* <source  type="video/mp4" /> */}
          </video>
        </VideoPlayer>




        {/* </HeroBorder> */}
      </HeroWrapper>
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
        <ServiceCard
          text={"Desarrollo de contenido digital multiplataforma"}
          image={imagePosition1}
          position={1}
        />
        <ServiceCard
          text={"Desarrollo y producción de formatos"}
          image={imagePosition2}
          position={2}
        />
        <ServiceCard
          text={"Marketing digital"}
          image={imagePosition3}
          position={3}
        />
        <ServiceCard
          text={"Branding TV"}
          image={imagePosition4}
          position={4}
        />
        <ServiceCard
          text={"Estudio Técnica"}
          image={imagePosition5}
          position={5}
        />
        <ServiceCard
          text={"Post producción"}
          image={imagePosition6}
          position={6}
        />
      </ServiceSection>
      <PortfolioSection>
        <h1>PORTFOLIO</h1>
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <PortfolioCard title="La Nacion +" subtitle="Desarrollo y produccion de formatos" />
        <span>
          VER MÁS &gt;
        </span>
      </PortfolioSection>

      <FooterClients />
    </HomePageWrapper >

  );
};

export default HomePage;