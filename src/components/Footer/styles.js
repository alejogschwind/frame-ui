import styled from "styled-components";

import { ReactComponent as FrameLogoSquare } from "../../assets/svgs/framelogo2.svg";

export const FooterWrapper = styled.div`
  background: transparent linear-gradient(209deg, #F27044 -50%, #A11E7D 100%) 0% 0% no-repeat padding-box;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FrameLogoSquareStyled = styled(FrameLogoSquare)`
  width: 120px;
  height: 120px;
`;

export const SocialMediaList = styled.div`
  width: 90%;
  margin: 2rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaItem = styled.a`
  width: auto;
  height: 22px;
  margin: 0 2rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const CopyRight = styled.samp`
  color: #FFFFFF;
  opacity: 0.51;
  font-size: 10px;
`;