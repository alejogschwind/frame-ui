import styled from "styled-components";

import { ReactComponent as FrameLogoSquare } from "../../assets/svgs/framelogo2.svg";

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
    margin-top: 1rem;
  }
  `;

export const MiddleSection = styled.div`
  background: transparent linear-gradient(180deg, #fff 0%, #80808000 30%) 0% 0% no-repeat padding-box;
  ${props => props.dark && `
    background: transparent linear-gradient(180deg, #000 0%, #80808000 30%) 0% 0% no-repeat padding-box;
  `}
  padding: 5rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
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
  opacity: 0.51;
  font-size: 10px;
`;