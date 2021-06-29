import styled from "styled-components";

import { ReactComponent as FrameLogo } from "../../assets/svgs/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";

export const FrameLogoStyled = styled(FrameLogo)`
  &:hover path {
    fill: black;
  }
  ${props => props.dark && `
    & path {
      fill: black;
    }
    &:hover path {
      fill: white;
    }
  `}
`;

export const HeaderWrapper = styled.header`
  height: calc(5.2rem + 24px);
  width: 100%;
  /* padding: 0rem 2.4rem; */
  background: rgba(0,0,0,0);
  ${props => props.solid && props.dark && `
    background: rgba(255,255,255, 1);
  `}
  ${props => props.solid && !props.dark && `
    background: rgba(0,0,0,1);
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 5000;
`;

export const Position = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 2.6rem;
  padding: 0 2.4rem;

  & > a {
    height: 100%;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  display: ${props => props.menuOpen ? "none" : "block"};
  height: 24px;
  width: 24px;
  ${props => props.dark && `
    & line {
      stroke: black;
    }
  `}
`;

export const ResponsiveMenuWrapper = styled.div`
    display: block;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export const HMenuWrappre = styled.div`
    display: block;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Menu = styled.div`
  /* background: red; */
  display: none;
  @media only screen and (min-width: 1025px) {
    display: block;
  }

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  & a {
    text-decoration: none;
  }
  & li {
    height: 2rem;
    width: 6rem;
    /* background-color: blue; */
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 0 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:hover {
      color: black;
    }
  }

  ${props => props.dark && `
    & > ul > a > li, & > ul > div > li {
      color: #000;
      &:hover {
      color: #fff;
    }
    }
  `}
`;

export const SubMenuButton = styled.div`
  position: relative;

  &:hover div {
    display: block;
  }
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  padding-top: 0.5rem;
  right: 0;
  padding-right: 1.5rem;

  & li{
    color: white;
    margin: 0.5rem 0;
    height: 3rem;
    width: 24rem;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
  }

  & li:hover {
    background: white;
    /* color: white; */
  }

  ${props => !props.dark && `
    & > a > li {
      color: #000;
      background: white;
      &:hover {
        background: black;
        color: white;
    }
    }
  `}
`;

export const SwitchWrapper = styled.div`
  /* margin: 0.8rem 0; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${props => props.dark && `
    & span {
      color: #000;
    }
  `}

  @media only screen and (max-width: 360px) {
    margin: 0.5rem 0;
  }
`;

export const Span = styled.span`
  margin: 0 1rem;
  display: block;
  color: white;
  font-weight: 400;
`;
