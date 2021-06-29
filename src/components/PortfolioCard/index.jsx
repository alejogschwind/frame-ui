import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../../context/dark";

import { PortfolioCardWrapper, Title, Subtitle } from "./styled";

const PortfolioCard = ({ titulo, servicios, imagen, url }) => {
  const { dark } = useContext(DarkContext);

  return (
    <Link to={`/portfolio/${url}`} style={{ textDecoration: "none" }}>
      <PortfolioCardWrapper>
        <img src={imagen} alt={titulo} />
        <Title dark={dark}>{titulo}</Title>
        <Subtitle dark={dark}>{servicios?.length ? servicios[0] : ""}</Subtitle>
      </PortfolioCardWrapper>
    </Link>
  );
};

export default PortfolioCard;