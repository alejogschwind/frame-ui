import styled from "styled-components";

export const PortfolioDetailPageWrapper = styled.div`
  ${props => props.dark && `
    background: #000;
    color: white
  `}
`;

export const MainSection = styled.section`
  width: 100%;
  min-height: fit-content;
  border-top: 20px solid transparent;
  position: absolute;
  ${props => props.dark && `
    background: #000;
    color: white;
  `}
`;

export const ImageWrapper = styled.div`
  /* height: calc(100vh - 24px - 5.2rem); */
  width: 100%;
  & img,iframe {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProjectDetail = styled.div`
  width: 90%;
  margin: 5.45rem 5% 0 5%;
  color: #323232;
  ${props => props.dark && `
    background: #000;
    color: white;
  `}
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Info = styled.h4`
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 12px;

  & > span {
    margin-right: 0.5rem;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  @media only screen and (min-width: 767px) {
    width: 48%;
    display: flex;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  & > a {
    font-size: 14px;
    font-weight: 600;
    color: #323232;
    text-decoration: none;

    /* &:hover {
      color: gray;
    } */
  }
  ${props => props.dark && `
    & a {
      color: white;
    }
  `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  @media only screen and (min-width: 767px) {
    width: 48%;
    /* margin-right: 10%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const VimeoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  & > div {
    width: 100% !important;
    height: calc(100vh - 24px - 5.2rem) !important;
  }
`;