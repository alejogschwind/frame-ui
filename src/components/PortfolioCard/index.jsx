import React from "react";

import { PortfolioCardWrapper, Title, Subtitle } from "./styled";

const PortfolioCard = ({ title, subtitle }) => {
  return (
    <PortfolioCardWrapper>
      <img src={"https://thumbs.dreamstime.com/b/smart-college-students-networking-laptop-library-doing-homework-together-smart-college-students-networking-laptop-169781950.jpg"} alt={title} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </PortfolioCardWrapper>
  );
};

export default PortfolioCard;