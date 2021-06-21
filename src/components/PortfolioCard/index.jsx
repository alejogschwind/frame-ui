import React from "react";

import { PortfolioCardWrapper, Title, Subtitle } from "./styled";

const PortfolioCard = ({ titulo, subtitle, imagen }) => {
  return (
    <PortfolioCardWrapper>
      <img src={imagen} alt={titulo} />
      <Title>{titulo}</Title>
      <Subtitle>{subtitle ? subtitle : ""}</Subtitle>
    </PortfolioCardWrapper>
  );
};

export default PortfolioCard;