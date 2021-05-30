import styled from "styled-components";

export const TitleWrapper = styled.h1`
  width: fit-content;
  background: transparent ${props => props.linearGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;