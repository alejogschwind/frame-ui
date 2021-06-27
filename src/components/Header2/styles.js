import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const MenuIconStyled = styled(MenuIcon)`
  display: ${props => props.menuOpen ? "none" : "block"};
  height: 24px;
  width: 24px;
`;

export const Header2Wrapper = styled.header`
  /* background: red; */
  /* position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem; */
  background:black;
  padding: 1rem;
  z-index: 2000;
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
