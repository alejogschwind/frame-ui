import styled from "styled-components";

export const HomePageWrapper = styled.div`
  /* min-height: 100vh; */
  height: 100%;
  /* Dark */
  ${props => props.dark && (
    `
    background: black;
    color: white;
    `
  )}
`;

export const AboutUsSection = styled.div`
  /* width: 100%; */
  color: #292853;
  text-align: center;
  margin: 4rem 1rem 0 1rem;
  /* Dark */
  ${props => props.dark && (
    `
    background: black;
    color: white;
    `
  )}
  
  
  & > p {
    font-weight: 300;
    font-size: 22px;
    letter-spacing: 0px;
    padding-bottom: 40px;
  }

  & > span {
    font-weight: bold;
    font-size: 16px;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 980px) {
    & > p {
      font-weight: 300;
      font-size: 18px;
      padding-bottom: 40px;
    }
  }

  @media only screen and (min-width: 767px) {
    margin: 4rem 10% 0 10%;
  }
`;

export const ServiceSection = styled.div`
  /* width: 100%; */
  padding: 4rem 1rem 0 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Dark */
  ${props => props.dark && (
    `
    background: transparent linear-gradient(180deg, #000000 0%, #363636 50%, #000000 100%) 0% 0% no-repeat padding-box;
    color: white;
    `
  )}
  & > h1 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #A33C8E 0%, #A33C8E 0%, #9F4A93 3%, #8479AD 18%, #6EA1C3 32%, #60B9D1 43%, #5CC3D6 50%, #5CC2CD 56%, #5EBFB6 65%, #61BB90 77%, #65B55C 90%, #69B130 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    font-size: 48px;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  & > a {
    width: 100%;
  }

  @media only screen and (max-width: 980px) {
    & > h1 {
      font-size: 38px;
    }
  }
`;

export const Grid = styled.div`

  & .pos1 {
    bottom: 0;
  }

  & .pos2 {
    top: 0;
    /* margin: 4rem 0 0 0; */
  }

  @media only screen and (min-width: 767px) {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6rem;

    & .pos1 {
      position: relative;
      bottom: -12rem;
    }

    & .pos2 {
      position: relative;
      top: -12rem;
    }

    & > a {
      /* margin-top: 4rem; */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div {
      height: 6rem;
    }
  }
`;
