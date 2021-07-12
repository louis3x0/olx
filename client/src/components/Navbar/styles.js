import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #002f34;
  z-index: 213521521;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;

export const NavbarDiv = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  max-width: 1286px;
  margin: 0 auto;

  @media (max-width: 1320px) {
    padding: 2rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export const LogoDiv = styled.div`
  .olx-website-rebranded {
    width: 71px;
    height: 41px;
    display: block;
    position: absolute;
    top: 15px;
    z-index: 10;
    text-indent: -1000em;
  }

  .olx-website-rebranded__o {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(12px, 15px);
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 0 12px #24e5db;
  }

  .olx-website-rebranded__l {
    width: 10px;
    top: 0;
    bottom: 0;
    background: #23e5db;
    position: absolute;
    left: 37px;
  }

  .olx-website-rebranded__x {
    width: 20px;
    height: 20px;
    overflow: hidden;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(51px, 10px);
  }

  .olx-website-rebranded__x:before,
  .olx-website-rebranded__x:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 65%;
    height: 100%;
    background: #24e5db;
  }

  .olx-website-rebranded__x:before {
    transform: skewX(45deg) translate(-50%, 0);
  }

  .olx-website-rebranded__x:after {
    transform: skewX(-45deg) translate(-50%, 0);
  }

  .olx-website-rebranded__x:before,
  .olx-website-rebranded__x:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 65%;
    height: 100%;
    background: #24e5db;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  text-align: center;

  .mesaje,
  .inima,
  .contul-meu {
    margin-right: 2.5rem;
  }

  button {
    background: #fff;
    color: #002f34;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    padding: 13px 22px;
    box-shadow: inset 0 0 0 8px #fff;
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  button:hover {
    background: none;
    color: #fff;
    box-shadow: inset 0 0 0 5px #fff;
  }

  a {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    display: flex;
  }

  svg {
    font-size: 18px;
    margin-right: 1rem;
  }

  @media (max-width: 732px) {
    .mesaje,
    .inima,
    .contul-meu {
      display: none;
    }
  }

  @media (max-width: 450px) {
    button {
      padding: 11px;
      font-size: 14px;
    }
  }
`;
