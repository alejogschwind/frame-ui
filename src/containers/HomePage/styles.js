import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";

export const MenuIconStyled = styled(MenuIcon)`
  display: ${props => props.menuOpen ? "none" : "block"};
  height: 28px;
  width: 28px;
`;

export const CloseIconStyled = styled(CloseIcon)`
  height: 24px;
  width: 24px;
  z-index: 1001;
  position: absolute;
  right: 2.1rem;
  top: 2.3rem;
`;

export const Menu = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: ${props => props.menuOpen ? "block" : "none"};
  background: black;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

export const MenuList = styled.ul`
  z-index: 1001;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;
`;

export const MenuItem = styled.li`
  /* background: red; */
  width: 50vw;
  padding: 0.2rem 0;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
  list-style: none;

  &:hover {
    background: black;
    opacity: 0.2;
  }
`;

export const HomePageWrapper = styled.div`
  min-height: 100vh;
`;


export const HeroWrapper = styled.div`
  background: #323232;
  padding: 1rem;
  width: 100%;
  height: 100vh;

  position: relative;
`;

export const VideoPlayerBlur = styled.div`
 filter: blur(8px);
 position: absolute;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;
 
 
 & > video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  }
`;

export const VideoPlayer = styled.div`
  height: 100%;
  position: relative;

  & > video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  padding: 5px;
  background: transparent linear-gradient(90deg, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%) 0% 0% no-repeat padding-box;
  position: absolute;
  top: 0;
  }
`;

export const HeroBorder = styled.div`
  height: calc(100vh - 2rem);
  width: 100%;
  padding: 5px;
  background: transparent linear-gradient(90deg, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
 
  /* border: 4px solid white; */
`;


export const Header = styled.div`
  /* background: red; */
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;

  /* padding: 1rem; */
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  background: white;
`;

export const AboutUsSection = styled.div`
  /* width: 100%; */
  color: #292853;
  text-align: center;
  margin: 2rem 1rem;
  & > p {
    font: normal 300 18px Montserrat;
    letter-spacing: 0px;
    padding-bottom: 10px;
  }

  & > span {
    font: normal normal bold 14px Montserrat;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ServiceSection = styled.div`
  /* width: 100%; */
  padding: 2rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #A33C8E 0%, #A33C8E 0%, #9F4A93 3%, #8479AD 18%, #6EA1C3 32%, #60B9D1 43%, #5CC3D6 50%, #5CC2CD 56%, #5EBFB6 65%, #61BB90 77%, #65B55C 90%, #69B130 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;

export const PortfolioSection = styled.div`
  padding: 2rem 0rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #521E7B 2%, #5B4F76 13%, #637C73 26%, #699C70 37%, #6DB06E 46%, #6FB86E 52%, #6DB06F 59%, #699B72 68%, #637977 80%, #5A4A7E 93%, #552F83 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  & > span {
    margin: 1rem 0;
    font: normal normal bold 14px Montserrat;
    display: flex;
    justify-content:  center;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;