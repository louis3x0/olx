import styled from "styled-components";

export const LoginDiv = styled.div`
  background: #3a77ff;
  height: 880px;
  display: flex;
  justify-content: center;
  padding: 40px;
  position: relative;
  padding-top: 7rem !important;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -155px;
    width: 1236px;
    height: 1236px;
    margin-left: -618px;
    border: 150px solid #ceddff;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 1;
    z-index: 1;
    transition: 11.3s ease;
  }
`;

export const LoginBox = styled.div`
  background-color: #fff;
  width: 100%;
  z-index: 1;
  max-width: 400px;
  border-radius: 4px;
  form {
    display: block;
    height: auto;
    padding: 2rem;
  }
  section {
    height: 100%;
  }
  .form-footer {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 1rem;
  }
  label {
    font-size: 14px;
    color: #71848d;
    line-height: 18px;
    font-weight: 400;
  }
  .password {
    margin-top: 10px;
  }
  .form-footer a {
    margin-top: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #002f34;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background: #002f34;
    cursor: pointer;
    box-shadow: 0 0 0 2px #002f34;
    border: none;
    padding: 10px 16px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 4px;
  }
  input {
    width: 100%;
    height: auto;
    line-height: initial;
    padding: 14px 16px;
    padding: 14px 16px;
    border-radius: 4px;
    background: #f2f4f5;
    padding: 14px 16px;
    margin-top: 10px;
  }

  .form-container {
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: #406367;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }
  .form-container-2 p {
    text-align: left;
    padding: 0.5rem 0;
    color: #71848d;
    font-size: 11.9px;
    margin-top: 0;
  }
  .checkbox {
    display: flex;
    margin-left: 0;
    margin-bottom: 1rem;
  }
  input[type="checkbox"] {
    height: 26px;
  }
  .checkbox-l {
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    background: #fff;
    border: 1px solid #002f34;
    box-sizing: border-box;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 0 1px #002f34;
    -moz-box-shadow: inset 0 0 0 1px #002f34;
    -ms-box-shadow: inset 0 0 0 1px #002f34;
    -o-box-shadow: inset 0 0 0 1px #002f34;
    box-shadow: inset 0 0 0 1px #002f34;
    position: relative;
    transition: border-color ease 0.2s;
    cursor: pointer;
    margin-right: 20px;
  }

  .checkbox-l::before {
    top: 13px;
    left: 1px;
    transform: rotate(-45deg);
  }

  .checkbox-l::after {
    top: 19px;
    left: 8px;
    transform: rotate(-135deg);
  }

  .checkbox-active {
    background: #000 !important;
  }

  .checkbox-l::before,
  .checkbox-l::after {
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: 2px;
    background-color: #4e5069;
    display: inline-block;
    transform-origin: left top;
    border-radius: 3px;
    content: " ";
  }
  .content {
    display: none;
  }

  .active-content {
    display: block;
    height: 100%;
  }
`;

export const ContentTab = styled.div`
  display: block;
  box-shadow: inset 0 -1px 0 0 #7f9799;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;

  li {
    width: 50%;
  }
  a {
    display: block;
    padding: 20px;
    color: #002f34;
    position: relative;
  }

  .active {
    border-bottom: 3px solid #002f34;
    font-weight: 700;
  }
`;
