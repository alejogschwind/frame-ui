import styled from "styled-components";

export const ServiceStudioWrapper = styled.div`
  height: 100%;

  & h1 , p {
    ${props => props.dark && `
      color: white;
    `}
  }
`;

export const Title = styled.h1`
  margin: 1rem 0;
  color: #323232;
  font-size: 22px;
  text-align: center;
`;

export const Description = styled.p`
  color: #323232;
  font-size: 18px;
  text-align: center;
`;

export const StudioCardsWrapper = styled.div`
  margin: 6rem 0 0 0;
  width: 100%;
  max-width: 1024px;
  height: calc(100% + 50px);
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 980px) {
    /* margin: 6rem auto 0 auto; */
  }
`;

export const StudioCard = styled.div`
  width: calc(100% + 2rem);
  height: 45%;
  position: relative;
  top: 0;
  left: -1rem;
  right: -1rem;

  @media only screen and (max-width: 980px) {
    width: calc(100%);
    width: 100%;
    left: 0rem;
    right: 0rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 400px;
  width: 100%;
  background: #323232;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const Border = styled.div`
  width: calc(100% - 2rem);
  height: 450px;
  position: absolute;
  top: -25px;
  left: 1rem;
  right: 1rem;
  background: transparent;
  border: 0.4rem solid transparent;
  z-index: 4000;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid white;

  ${props => props.borderColor ? (
    `
    -moz-border-image: -moz-${props.borderColor};
    -webkit-border-image: -webkit-${props.borderColor};
    border-image: ${props.borderColor};
    `
  ) : (`
    -moz-border-image: -moz-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    border-image: linear-gradient(to right, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
  `)}
  border-image-slice: 1;
`;

export const StudioTitle = styled.h2`
  margin: 4rem 1rem 0.5rem 1rem;
  color: #323232;
  ${props => props.dark && `
    color: #fff;
  `}
`;

export const StudioDescription = styled.p`
  margin: 0rem 1rem 0rem 1rem;
`;