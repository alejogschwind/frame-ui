import styled from "styled-components";

export const PortfolioCardWrapper = styled.div`
  /* margin-bottom: 1rem; */
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;

    h3 {
      text-decoration: none;
    }
  }

  & > img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin: 0.5rem 0;
  }
`;

export const Title = styled.h3`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  /* Dark */
  ${props => props.dark && `
    color: white
    `
  }
`;

export const Subtitle = styled.h4`
  color: #323232;
  font-size: 16px;
  font-weight: 300;
  /* Dark */
  ${props => props.dark && `
    color: white
    `
  }
`;