import styled from "styled-components";

export const ServicePostProductionWrapper = styled.div`
  height: 100%;
  & h1 , p {
    ${props => props.dark && `
      color: white;
    `}
  }
`;

export const Title = styled.h1`
  margin: 1rem 0;
  color: #323232;
  font-size: 22px;
  text-align: center;
`;

export const Description = styled.p`
  color: #323232;
  font-size: 18px;
  text-align: center;
`;