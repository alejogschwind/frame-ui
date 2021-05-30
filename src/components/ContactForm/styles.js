import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  width: 100%;
  min-height: 150px;
  background: transparent linear-gradient(218deg, #F27044 0%, #A11E7D 100%) 0% 0% no-repeat padding-box;
  color: white;

  & > h2 {
    font-size: 22px;
  }
  & > h4 {
    margin: 0.5rem 0;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Form = styled.form`
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