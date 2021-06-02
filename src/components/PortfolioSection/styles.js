import styled from "styled-components";

export const PortfolioSectionWrapper = styled.div`
  padding: 2rem 0rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    width: fit-content;
    background: transparent linear-gradient(90deg, #521E7B 2%, #5B4F76 13%, #637C73 26%, #699C70 37%, #6DB06E 46%, #6FB86E 52%, #6DB06F 59%, #699B72 68%, #637977 80%, #5A4A7E 93%, #552F83 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 1rem;
  }

  & > span {
    margin: 1rem 0;
    font: normal normal bold 14px Montserrat;
    display: flex;
    justify-content:  center;
    
    & > a {
      color: #323232;
    }
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;


export const Filters = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /* display: grid;
  grid-template-columns: repeat(1fr, 6);
  grid-template-rows: auto;

  grid-template-areas: 
    "filter1 filter2 filter3"
    "filter4 filter5"; */
`;

export const FilterItem = styled.h4`
  margin: 0.5rem 1rem;
  padding: 1rem 0;
  font-size: 16px;
  text-align:  center;
  /* grid-area: "filter2"; */
`;