import styled from "styled-components";

export const InputContainer = styled.div`
  background: #f2f4f5;
  padding-top: 7rem !important;
  padding: 40px 0 40px 0;

  @media (max-width: 1320px) {
    padding: 40px 2rem 40px 2rem !important;
    form {
      grid-template-columns: 2fr 1.3fr 0.8fr;
    }
  }
  @media (max-width: 867px) {
    padding: 40px 2rem 20px 2rem !important;
    padding-top: 7rem !important;

    form {
      height: auto;
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 450px) {
    padding: 110px 1rem 15px 1rem !important;
  }
`;

export const Container = styled.div`
  max-width: 1286px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 3.8fr 1.3fr 0.8fr;
  height: 72px;

  input {
    width: 100%;
    height: 70px;
    font-size: 16px;
    line-height: 56px;
    border: none;
    border-right: 1px solid #f2f4f5;
    color: #002f34;
    background: #fff;
  }

  input:first-child {
    padding: 0 0 0 3.4rem;
  }

  input::placeholder {
    color: #002f34;
  }

  @media (max-width: 450px) {
    input::placeholder {
      font-size: 12px;
    }
  }
`;

export const InputDiv = styled.div`
  svg {
    position: relative;
    top: -46px;
    right: -20px;
    font-size: 21px;
  }

  .fs-27 {
    font-size: 23px;
    top: -47px;
  }

  .last-input {
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }
`;
