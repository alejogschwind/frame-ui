import styled from "styled-components";

import { ReactComponent as FrameLogoSquare } from "../../assets/svgs/framelogo2.svg";

export const FooterWrapper = styled.div`
  background: transparent linear-gradient(209deg, #F27044 -50%, #A11E7D 100%) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(209deg, #F27044 0%, #A11E7D 100%) 0% 0% no-repeat padding-box;  width: 100%;
  height: 800px;
  
  position: relative;

  top: -400px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 4rem;
`;

export const FrameLogoSquareStyled = styled(FrameLogoSquare)`
  width: 120px;
  height: 120px;
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