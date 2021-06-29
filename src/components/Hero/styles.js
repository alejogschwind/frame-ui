import styled from "styled-components";

import { ReactComponent as IconPause } from "../../assets/svgs/pause.svg";
import { ReactComponent as IconPlay } from "../../assets/svgs/play.svg";

export const HeroWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  ${props => props.dark && `
    background: black;
  `}

  /* position: relative; */

  & > img {
    height: 100vh;
    width: 100vw;

    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
  }
`;



export const VideoPlayerBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  /* overflow: hidden;
  position: absolute;
  top: 0;
  left: 0; */

  & iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177.77vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Border = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: transparent;
  border: 0.4rem solid transparent;
  z-index: 4000;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  ${props => props.borderColor ? (
    `
    -moz-border-image: -moz-${props.borderColor};
    -webkit-border-image: -webkit-${props.borderColor};
    border-image: ${props.borderColor};
    `
  ) : (`
    -moz-border-image: -moz-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    border-image: linear-gradient(to right, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
  `)}
  border-image-slice: 1;
`;

export const VideoPlayer = styled.div`
  

  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  z-index: 1; */

  & iframe {
    width: 100vw !important;
    height: 56.25vw !important;
    min-height: 100vh !important;
    min-width: 177.77vh !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
  }
  
  
 
  /* border-image: ${props => !props.pageColor ? `
    linear-gradient(to right, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
  `: "linear-gradient(to right,#F27044 0%,#A11E7D 100%);"}; */

`;

export const VimeoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0,0,0,0.1);
  z-index: 3000;
`;

export const PlayButton = styled(IconPlay)`
  height: 6rem;
  width: 6rem;
  z-index: 6001;
  cursor: pointer;
  filter: opacity(0.3);

  position: absolute;
  right: 2rem;
  bottom: 2rem;

  &:hover {
    filter: opacity(1);
  }
`;

export const PauseButton = styled(IconPause)`
  height: 6rem;
  width: 6rem;
  z-index: 6001;
  cursor: pointer;

  /* display: flex;
  justify-content: center;
  align-items: center; */
  filter: opacity(0.3);
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  &:hover {
    filter: opacity(1);
  }
`;

export const SpinerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;