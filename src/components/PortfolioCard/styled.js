import styled from "styled-components";

export const PortfolioCardWrapper = styled.div`
  margin-bottom: 1rem;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;

    h3 {
      text-decoration: underline;
    }
  }

  & > img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    margin: 0.5rem 0;
  }
`;

export const Title = styled.h3`
  margin: 0 1rem;
  `;

export const Subtitle = styled.h4`
  margin: 0rem 1rem;
  font-weight: 300;
`;