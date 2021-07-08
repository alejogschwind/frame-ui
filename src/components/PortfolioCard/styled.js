import styled from "styled-components";

export const PortfolioCardWrapper = styled.div`
  /* margin-bottom: 1rem; */
  /* opacity: 0.8; */

  &:hover {
    cursor: pointer;
    opacity: 1;

    h3 {
      text-decoration: none;
    }
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

export const ImageWapper = styled.div`
  position: relative;
  width: 100%;
  /* height: 350px; */
  
  
  /* margin: 0.5rem 0; */
  & > img {
    height: 350px;
    width: 100%;
    object-fit: cover;
    /* position: absolute;
    bottom: 0; */
  }
  & > h1 {
    width: 90%;
    text-align: center;
    color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover h1 {
    color: white;
  }
  &:hover div {
    opacity: 0.85;
    ${props => props.overlay || ""}
    /* mix-blend-mode: color; */
    
  }
`;

export const Overlay = styled.div`
  position: absolute;
  /* top:0; */
  bottom:0.25rem;
  /* right:0;
  left:0; */
  height: 350px;
  width: 100%;
  
`;