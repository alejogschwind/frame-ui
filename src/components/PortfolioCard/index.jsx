import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../../context/dark";

import { PortfolioCardWrapper, Title, Subtitle, Overlay, ImageWapper } from "./styled";

const PortfolioCard = ({ titulo, servicios, imagen, url, overlay }) => {
  const { dark } = useContext(DarkContext);

  return (
    <Link to={`/portfolio/${url}`} style={{ textDecoration: "none", width: "100%" }}>
      <PortfolioCardWrapper>
        <ImageWapper overlay={overlay}>
          <Overlay />
          <h1>{titulo}</h1>
          <img src={imagen} alt={titulo} />
        </ImageWapper>
        <Title dark={dark}>{titulo}</Title>
        <Subtitle dark={dark}>{servicios?.length ? servicios[0] : ""}</Subtitle>
      </PortfolioCardWrapper>
    </Link>
  );
};

export default PortfolioCard;