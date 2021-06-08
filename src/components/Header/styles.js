import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 5rem;
  width: 100vw;
  padding: 0 1rem;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    height: 80%;
    width: 30%;
  }
`;