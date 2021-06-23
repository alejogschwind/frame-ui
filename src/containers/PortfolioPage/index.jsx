import React, { useContext, useEffect, useLayoutEffect } from 'react';

import Hero from '../../components/Hero';
import FooterClients from '../../components/FooterClients';
import PortfolioSection from '../../components/PortfolioSection';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import {
  PortfolioPageWrapper,
} from "./styles";

import ProjectsContext from '../../context/projects';
import HeadersContext from '../../context/headers';

const PortfolioPage = () => {
  const { data, error, loading } = useRequest(generateURL(6));

  const { projects, setProjects } = useContext(ProjectsContext);
  const { headers, setHeaders } = useContext(HeadersContext);

  useEffect(() => {
    console.log(data);
    if (data) {
      setProjects([...Object.values(data.proyectos)]);
      setHeaders([data.encabezado_vimeo]);
    }
    console.log("H", headers);
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PortfolioPageWrapper>

      <Hero />

      <PortfolioSection projects={projects} displayFilter />

      <FooterClients />

    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;
