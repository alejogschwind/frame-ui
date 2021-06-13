import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";

export const HeaderWrapper = styled.header`
  height: calc(5.2rem + 24px);
  width: 100%;
  /* padding: 0rem 2.4rem; */
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* position: relative; */
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
`;
