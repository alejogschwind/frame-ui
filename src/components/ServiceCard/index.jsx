import React from "react";

import { ServiceCardWrapper, TitleWrapper } from "./styles";

const ServiceCard = ({ text, image, position }) => {
  return (
    <ServiceCardWrapper position={position}>
      <img src={image} alt={text} />
      <TitleWrapper>
        <h2>{text}</h2>
      </TitleWrapper>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
