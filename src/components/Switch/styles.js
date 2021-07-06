import styled from "styled-components";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 3.8rem;
  height: 1.8rem;
`;

export const Input = styled.input`
  opacity: 0;
  height: 0;
  width: 0;

  &:checked + .slider::before {
    transform: translateX(2rem);
  }

  &:checked + .slider {
    background: #222222;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #ccc;
  border-radius: 15px;
  transition: 0.4s;

  &::before {
    content: "";
    position: absolute;
    height: 1.4rem;
    width: 1.4rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;