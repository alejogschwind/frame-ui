import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;

  & > button {
    margin: 1rem 0;
    width: 100%;
    height: 45px;
    background: white;
    color: #d62649;
    font-weight: bold;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  margin: 0.5rem 0;
  height: 40px;
  width: 100%;
  background: rgba(255,255,255, 0.2);
  border: none;
  outline: none;
  color: #fff;

  & > input {
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    border: none;
    outline: none;
    background: inherit;
    color: #fff;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
      color: #fff;
      font-size: 12px;
    }
  }
`;

export const TextareaWrapper = styled.div`
  margin: 0.5rem 0;
  height: 200px;
  width: 100%;
  background: rgba(255,255,255, 0.2);
  border: none;
  outline: none;
  color: #fff;

  & > textarea {
    height: 100%;
    width: 100%;
    padding: 1rem;
    border: none;
    outline: none;
    background: inherit;
    color: #fff;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
      color: #fff;
      font-size: 12px;
    }
  }
`;