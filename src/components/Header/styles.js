import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";

export const HeaderWrapper = styled.header`
  height: 15vh;
  width: 100vw;
  padding: 2.6rem 2.4rem;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    height: 100%;
    width: 30%;
    
    & > svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  display: ${props => props.menuOpen ? "none" : "block"};
  height: 24px;
  width: 24px;
`;
