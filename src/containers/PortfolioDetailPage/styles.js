import styled from "styled-components";

export const PortfolioDetailPageWrapper = styled.div`

`;

export const MainSection = styled.section`
  width: 100%;
  min-height: fit-content;
`;

export const ImageWrapper = styled.div`
  height: calc(100vh - 24px - 5.2rem);
  width: 100%;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProjectDetail = styled.div`
  width: 90%;
  margin: 2rem 5% 0 5%;
  color: #323232;
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
    width: 60%;
    display: flex;
    align-items: center;
  }
`;

export const LinksGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    font-size: 14px;
    font-weight: 600;
    color: #323232;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  
`;

export const Left = styled.div`
  @media only screen and (min-width: 767px) {
    width: 30%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;