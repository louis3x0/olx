import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 45px 0;
  background: #f2f4f5;
  border-top: 1px solid #7f9799;
  z-index: 213521521;
  position: absolute;
  right: 0;
  left: 0;
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px max-content;
  max-width: 1286px;
  margin: 0 auto;

  @media (max-width: 1320px) {
    padding: 2rem;
  }

  @media (max-width: 867px) {
    grid-template-columns: 222px max-content;
    padding-bottom: 50px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 172px 172px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftItems = styled.div``;

export const Ul = styled.ul`
  flex-direction: column;
  li {
    font-size: 16px;
    line-height: 30px;
    color: #002f34;
    font-weight: 600;
  }
`;

export const CenterItems = styled.div``;

export const RightItems = styled.div`
  .iconite-social {
    display: flex;
  }

  img {
    height: 30px;
    width: 30px;
  }

  .instagram,
  .facebook,
  .youtube {
    margin-right: 10px;
    margin-top: 15px;
  }

  p {
    color: #1b373b;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  .mesaje a:hover,
  .inima a:hover,
  .contul-meu a:hover {
    color: #7f9799;
  }

  .store {
    display: flex;
    margin-top: 1rem;
  }

  .app-store {
    margin-right: 1rem;
  }

  .store img {
    width: 140px;
    height: 48px;
  }
`;
