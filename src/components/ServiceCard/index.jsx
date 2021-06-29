import React, { useContext } from "react";
import DarkContext from "../../context/dark";

import { ServiceCardWrapper, TitleWrapper } from "./styles";

const ServiceCard = ({ text, image, position }) => {
  const { dark } = useContext(DarkContext);

  return (
    <ServiceCardWrapper position={position}>
      <img src={image} alt={text} />
      <TitleWrapper dark={dark}>
        <h2>{text}</h2>
      </TitleWrapper>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
