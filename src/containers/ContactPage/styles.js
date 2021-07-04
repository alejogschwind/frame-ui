import styled from "styled-components";

import { ReactComponent as WordIcon } from "../../assets/svgs/wordLight.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mailLight.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phoneLight.svg";


export const ContactPageWrapper = styled.div`
  height: 100%;
  ${props => props.dark && `
    background: #000;
    color: white;
  `}
  /* background: transparent linear-gradient(180deg, #000000 80%, #80808000 150%) 0% 0% no-repeat padding-box; */
`;

export const ContactSection = styled.div`
  /* width: 100%; */
  padding: 2rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.dark && `
    background: #000;
    color: white;
  `}
  background: transparent;

  & > p {
    margin-top: 1.5rem;
    font-size: 22px;
    text-align: center;
  }

  @media only screen and (min-width: 767px) {
    margin: 0 10%;
  }
`;

export const InfoCard = styled.div`
  margin: 2rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #323232;

  & > h3 {
    margin: 1rem 0;
    font-size: 24px;
    font-weight: bold;
  }
  & > h5 {
    font-weight: normal;
    margin: 0.2rem 0;
  }
  @media only screen and (min-width: 767px) {
    align-items: flex-start;
  }
`;

export const WordIconStyled = styled(WordIcon)`
  width: 3rem;
  height: 3rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const MailIconStyled = styled(MailIcon)`
  width: 3rem;
  height: 3rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const PhoneIconStyled = styled(PhoneIcon)`
  width: 3rem;
  height: 3rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const ContactFormWrapper = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  width: 100%;
  min-height: 150px;
  background: transparent linear-gradient(218deg, #F27044 0%, #A11E7D 100%) 0% 0% no-repeat padding-box;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 36px;
  }
  & > h4 {
    margin: 0.5rem 0;
    font-size: 18px;
    font-weight: normal;
  }
  @media only screen and (min-width: 767px) {
    margin: 0;
    width: 50%;
  }
`;

export const Row = styled.div`
  width: 100%;
  @media only screen and (min-width: 767px) {
    margin: 2rem 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  & div {
    ${props => props.dark && `
      color: white;
    `}
  }
  & .a {
    ${props => props.dark && `
      fill: white;
      stroke: none;
    `}
  }
  @media only screen and (min-width: 767px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;