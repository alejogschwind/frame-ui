import styled from "styled-components";

export const SpinerWrapper = styled.div`
  height: 3rem;
  width: 3rem;

  border-color: transparent #ffffffaa #ffffffcc white;
  ${props => !props.dark && `
    border-color: transparent #000000aa #000000cc black;
  `}
  border-width: 6px;
  border-style: solid;
  border-radius: 50%;
  animation: spin 0.5s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;