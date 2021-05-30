import React from 'react';
import { TitleWrapper } from './styles';

const Title = ({ children, type }) => {

  const linearGradients = {
    1: "linear-gradient(90deg, #9D1A80 0%, #C13E66 10%, #DC5A53 20%, #ED6B48 30%, #F37144 50%, #EE6C46 60%, #E2604F 70%, #CD4B5E 80%, #AF2F72 90%, #9C1C80 100%) 0% 0% no-repeat padding-box",
  };

  return (
    <TitleWrapper linearGradient={type ? linearGradients[type] : linearGradients[1]}>
      {children}
    </TitleWrapper>
  );
};

export default Title;
