import styled from "styled-components";

import { ReactComponent as FrameLogoSquare } from "../../assets/svgs/framelogo2.svg";

import { ReactComponent as WordIcon } from "../../assets/svgs/wordLight.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mailLight.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phoneLight.svg";

export const FooterContactWrapper = styled.div`
  width: 100%;
  border-top: 20px solid transparent;
`;

export const Gradient = styled.div`
  background: transparent linear-gradient(209deg, #69B130 0%, #5CC3D6 51%, #A33C8E 100%) 0% 0% no-repeat padding-box;
`;

export const TopSection = styled.div`
  border-top: 10px solid transparent;
  padding: 2rem 1rem 2rem 1rem;
  background: transparent;
  /* min-height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & > p {
    text-align: center;
    font-size: 16px;
    margin: 2rem 4rem;
  }
  `;

export const MiddleSection = styled.div`
  background: transparent linear-gradient(180deg, #fff 0%, #80808000 30%) 0% 0% no-repeat padding-box;
  ${props => props.dark && `
    background: transparent linear-gradient(180deg, #000 0%, #80808000 30%) 0% 0% no-repeat padding-box;
  `}
  padding: 5rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 767px) {
    & > form {
      width: 80%;
    }
  }
`;

export const BottomSection = styled.div`
  /* background: transparent linear-gradient(209deg, #69B130 0%, #5CC3D6 51%, #A33C8E 100%) 0% 0% no-repeat padding-box; */

  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FrameLogoSquareStyled = styled(FrameLogoSquare)`
  width: 120px;
  height: 120px;
  /* margin: 1rem 0; */
`;

export const SocialMediaList = styled.div`
  width: 80%;
  margin: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 767px) {
    max-width: 20vw;
  }
`;

export const SocialMediaItem = styled.a`
  width: fit-content;
  height: 22px;

  & > img {
    width: auto;
    height: 16px;
  }
`;

export const CopyRight = styled.samp`
  color: #FFFFFF;
  opacity:11;
  font-size: 10px;
`;

export const InfoCard = styled.div`
  margin: 2rem 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  color: #323232;

  & h3 {
    margin: 1rem 0;
    font-size: 24px;
    font-weight: bold;
  }
  & h5 {
    font-weight: normal;
    margin: 0.2rem 0;
  }
  @media only screen and (min-width: 980px) {
    align-items: center;
  }
`;

export const WordIconStyled = styled(WordIcon)`
  width: 2rem;
  height: 2rem;
  margin-right:1rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const MailIconStyled = styled(MailIcon)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const PhoneIconStyled = styled(PhoneIcon)`
  width: 2rem;
  height: 2rem;
  margin-right:1rem;

  & .a {
    fill: black;
    stroke: none;
  }
`;

export const Left = styled.div`
  width: 40%;
  margin-right: 2rem;

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
  @media only screen and (max-width: 767px) {
    display: none;
    /* background: transparent linear-gradient(180deg, #fff 40%, #80808000 100%) 0% 0% no-repeat padding-box;
    ${props => props.dark && `
      background: transparent linear-gradient(180deg, #000 40%, #80808000 100%) 0% 0% no-repeat padding-box;
    `} */
  }
  /* @media only screen and (min-width: 980px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

export const ContactFormWrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 4rem;
  }
  @media only screen and (max-width: 596px) {
    width: 100%;
    margin: 0;
  }
`;

export const P = styled.p`
  width: 90%;
  font-size: 24px;
  color: white;
  font-weight: medium;

  @media only screen and (max-width: 980px) {
    font-size: 20px;
  }
`;
