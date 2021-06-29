import styled from "styled-components";

export const ServicePostProductionWrapper = styled.div`
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