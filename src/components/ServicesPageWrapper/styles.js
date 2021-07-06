import styled from "styled-components";

export const ServiceWrapper = styled.div`
  /* width: 100%; */
  height: 100%;

  ${props => props.dark && `
    background: #000;
  `}
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

export const ContentWrapper = styled.div`
  /* margin: 2rem 1rem 0rem 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  & > h3 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #A33C8E 0%, #A33C8E 0%, #9F4A93 3%, #8479AD 18%, #6EA1C3 32%, #60B9D1 43%, #5CC3D6 50%, #5CC2CD 56%, #5EBFB6 65%, #61BB90 77%, #65B55C 90%, #69B130 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 28px;
  }

  @media only screen and (min-width: 767px) {
    margin: 2rem 10%;
  }
`;