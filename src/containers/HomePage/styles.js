import styled from "styled-components";

export const HomePageWrapper = styled.div`
  min-height: 100vh;
`;

export const AboutUsSection = styled.div`
  /* width: 100%; */
  color: #292853;
  text-align: center;
  margin: 2rem 1rem;
  & > p {
    font: normal 300 18px Montserrat;
    letter-spacing: 0px;
    padding-bottom: 10px;
  }

  & > span {
    font: normal normal bold 14px Montserrat;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ServiceSection = styled.div`
  /* width: 100%; */
  padding: 2rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #A33C8E 0%, #A33C8E 0%, #9F4A93 3%, #8479AD 18%, #6EA1C3 32%, #60B9D1 43%, #5CC3D6 50%, #5CC2CD 56%, #5EBFB6 65%, #61BB90 77%, #65B55C 90%, #69B130 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;
