import styled from "styled-components";

import { ReactComponent as WordIcon } from "../../assets/svgs/wordLight.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mailLight.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phoneLight.svg";


export const ContactPageWrapper = styled.div`

`;

export const ContactSection = styled.div`
  /* width: 100%; */
  padding: 2rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin-top: 1.5rem;
    font-size: 18px;
    text-align: center;
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
    font-size: 22px;
    font-weight: bold;
  }
  & > h5 {
    font-weight: normal;
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

  & > h2 {
    font-size: 22px;
  }
  & > h4 {
    margin: 0.5rem 0;
    font-size: 14px;
    font-weight: normal;
  }
`;