import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";

export const ResponsiveMenuWrapper = styled.div`
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

export const CloseIconStyled = styled(CloseIcon)`
  height: 24px;
  width: 24px;
  z-index: 1001;
  position: absolute;
  right: 2.4rem;
  top: 2.6rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
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
