import styled from "styled-components";

import { ReactComponent as WordIcon } from "../../assets/svgs/wordLight.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mailLight.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phoneLight.svg";


export const ContactPageWrapper = styled.div`
  height: 100%;
  background: white;
  ${props => props.dark && `
    color: white;
  `}
  /* background: transparent linear-gradient(180deg, #000000 80%, #80808000 150%) 0% 0% no-repeat padding-box; */
`;

export const ContactSection = styled.div`
  /* width: 100%; */
  padding: 2rem 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 100;

  background: transparent linear-gradient(180deg, #fff 60%, #80808000 100%) 0% 0% no-repeat padding-box;
  
  ${props => props.dark && `
    color: white;
    background: transparent linear-gradient(180deg, #000000 60%, #80808000 100%) 0% 0% no-repeat padding-box;
  `}


& > p {
  margin-top: 1.5rem;
  padding: 0 1rem;
  font-size: 18px;
  text-align: center;
}
@media only screen and (min-width: 980px) {
  padding: 2rem 10%;
  & > p {
    font-size: 22px;
    text-align: center;
  }
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
  @media only screen and (min-width: 980px) {
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
  margin: 2rem 1rem;
  padding: 1.5rem;
  width: calc(100% -2rem);
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
  
  @media only screen and (max-width: 1324px) {
    & > h2 {
      font-size: 28px;
    }
    & > h4 {
      margin: 0.5rem 0;
      font-size: 16px;
      font-weight: normal;
    }

  }
  @media only screen and (min-width: 980px) {
    margin: 2rem 1rem;
    width: 50%;
  }
`;

export const Row = styled.div`
  width: 100%;
  @media only screen and (min-width: 980px) {
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
  & .a,.b {
    ${props => props.dark && `
      fill: white !important;
      stroke: none;
    `}
  }
  @media only screen and (max-width: 980px) {
    background: transparent linear-gradient(180deg, #fff 40%, #80808000 100%) 0% 0% no-repeat padding-box;
    ${props => props.dark && `
      background: transparent linear-gradient(180deg, #000 40%, #80808000 100%) 0% 0% no-repeat padding-box;
    `}
  }
  @media only screen and (min-width: 980px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;