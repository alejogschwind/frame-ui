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

export const Box = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid white;
  margin: 0 2rem;
  -moz-border-image: -moz-linear-gradient(to right, #fff 0%, #A33C8E 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #DFEFD7 0%, #A33C8E 0%, #5EBED3 49%, #68B237 100%, #E01169 100%);
  -webkit-border-image: -webkit-linear-gradient(to right, #fff 0%, #A33C8E 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #DFEFD7 0%, #A33C8E 0%, #5EBED3 49%, #68B237 100%, #E01169 100%);
  -o-border-image: -o-linear-gradient(to right, #fff 0%, #A33C8E 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #DFEFD7 0%, #A33C8E 0%, #5EBED3 49%, #68B237 100%, #E01169 100%);
  border-image: linear-gradient(to right, #fff 0%, #A33C8E 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #DFEFD7 0%, #A33C8E 0%, #5EBED3 49%, #68B237 100%, #E01169 100%);
  border-image-slice: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  & > h4 {
    font-family: "Montserrat";
    font-size: 38px;
    height: 38px;
    line-height: 38px;
    vertical-align: middle;
    font-weight: bold;
    color: #323232;
  }

  @media only screen and (max-width: 565px) {
    width: 60px;
    height: 60px;
    margin: 0;
  }
`;

export const BoxWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  ${props => props.reverse && `
    flex-direction: row-reverse;
    `
  }

  & h2 {
    ${props => props.dark && `
      color: white;
  `}
  }

  & h2 {
    margin: 0 1rem;
    font-size: 22px;
    max-width: 300px;
    text-align: center;
  }

  & h4 {
    ${props => props.dark && `
      color: white;
    `}
  }
  @media only screen and (max-width: 565px) {
    & h2 {
      font-size: 16px;
      width: 65%;
      text-align: center;
    }
  }
`;

export const Grid = styled.div`
  margin: 10rem 0 2rem 0;
  display: grid;

  @media only screen and (max-width: 565px) {
    margin: 8rem 0 0rem 0;
    width: 100%;
  }
`;