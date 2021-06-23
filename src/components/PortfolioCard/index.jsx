import React from "react";
import { Link } from "react-router-dom";

import { PortfolioCardWrapper, Title, Subtitle } from "./styled";

const PortfolioCard = ({ titulo, subtitle, imagen, url }) => {
  return (
    <Link to={`/portfolio/${url}`}>
      <PortfolioCardWrapper>
        <img src={imagen} alt={titulo} />
        <Title>{titulo}</Title>
        <Subtitle>{subtitle ? subtitle : ""}</Subtitle>
      </PortfolioCardWrapper>
    </Link>
  );
};

export default PortfolioCard;