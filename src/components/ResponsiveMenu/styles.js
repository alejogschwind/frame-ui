import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";
import { ReactComponent as BackIcon } from "../../assets/svgs/BackIcon.svg";

export const ResponsiveMenuWrapper = styled.div`
  /* width: 100vw; */
  height: 100%;
  /* height: 100%; */
  
  
  display: ${props => props.menuOpen ? "block" : "none"};
  background: rgba(0,0,0,0.8);
  ${props => !props.dark && `
    background: rgba(255,255,255,0.8);
  `}
  /* opacity: 0.8; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9000;
`;

export const MenuContent = styled.div`
  height: 100%;
  z-index: 1001;
  width: 100vw;
  position: relative;

`;

export const CloseIconStyled = styled(CloseIcon)`
  height: 24px;
  width: 24px;
  z-index: 2002;
  position: absolute;
  right: 2.4rem;
  top: 2.6rem;

  ${props => !props.dark && `
    & path {
      fill: #000;
    }
  `}
`;

export const BackIconStyled = styled(BackIcon)`
  height: 28px;
  width: 28px;
  z-index: 2002;
  position: absolute;
  left: 2.4rem;
  top: 2.6rem;

  ${props => !props.dark && `
    & path {
      fill: #000;
    }
  `}
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  ${props => !props.dark && `
    color: black;
  `}
`;

export const MenuList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;

  ${props => props.dark && `
    & a {
      color: white;
    }
  `}
`;

export const MenuItem = styled.li`
  /* background: red; */
  width: 90vw;
  padding: 0.2rem 0;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 0.8rem;
  list-style: none;
  
  /* &:hover {
    background: black;
    opacity: 0.2;
  } */
  @media only screen and (max-width: 360px) {
    font-size: 15px;
    margin: 0.5rem;
  }
`;

export const TogglesGroup = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1rem 0;
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 360px) {
    height: 18%;
  }
`;

export const SwitchWrapper = styled.div`
  margin: 0.8rem 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => !props.dark && `
    & span {
      color: black;
    }
  `}

  @media only screen and (max-width: 360px) {
    margin: 0.5rem 0;
  }
`;


export const Span = styled.span`
  margin: 0 0.5rem;
  color: white;
  font-weight: 400;
`;
