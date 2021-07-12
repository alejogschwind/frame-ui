import styled from "styled-components";

export const ServiceDevelopmentPageWrapper = styled.div`
  height: 100%;
  & h1 , p {
    ${props => props.dark && `
      color: white;
    `}
  }
`;

export const Title = styled.h1`
  margin: 2rem 0;
  color: #323232;
  font-size: 32px;
  text-align: center;

  @media only screen and (max-width: 980px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  color: #323232;
  font-size: 22px;
  text-align: center;

  @media only screen and (max-width: 980px) {
    font-size: 18px;
  }
`;