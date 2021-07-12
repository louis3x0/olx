import styled from "styled-components";

export const NavLi = styled.div`
  background: #f2f4f5;
  padding-top: 110px;
  padding-bottom: 70px;

  .descriere,
  .box-right,
  .image-box {
    background-color: #fff;
  }

  .image-box {
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .image-box img {
    object-fit: contain;
    height: auto;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .box-right {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: 4px;
  }

  .box-right h2 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #002f34;
  }

  .box-right span {
    font-weight: 700;
    font-size: 20px;
    color: #002f34;
  }

  .box-right p {
    font-size: 15px;
    color: #7f9799;
    line-height: 18px;
  }
`;

export const Container = styled.div`
  max-width: 1286px;
  margin: 0 auto;

  li > a {
    font-size: 12px;
    font-weight: 500;
    color: #7f9799;
    text-decoration: underline;
    margin-right: 3px;
  }

  li a::after {
    content: "/";
  }
`;

export const UList = styled.ul`
  margin-bottom: 50px;
  display: flex;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 1rem;
`;

export const LeftSide = styled.div`
  .descriere {
    padding: 24px;
  }
  .descriere h1 {
    font-size: 32px;
    color: #002f34;
    font-weight: 500;
    margin-right: 20px;
    margin-bottom: 16px;
  }

  .descriere p {
    font-size: 12px;
    line-height: 16px;
    color: #406367;
  }

  .descriere .pret {
    font-weight: 700;
    font-size: 40px;
    color: #002f34;
  }

  .detalii-produs li {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #002f34;
    align-items: center;
    padding: 6px 16px;
    margin: 16px 8px 0 0;
    border-radius: 4px;
    border: solid 1px #406367;
  }

  .detalii-produs ul {
    margin-bottom: 0;
    display: flex;
  }

  .detalii-produs h2 {
    margin: 1rem 0;
    color: #002f34;
    font-size: 24px;
    font-weight: 600;
  }

  .descriere-produs p {
    font-weight: 400;
    font-size: 16px;
    color: #002f34;
    line-height: 22px;
  }

  .descriere-produs p {
    padding-bottom: 1rem;
    border-bottom: 1px solid #7f9799;
  }

  .detalli-postare {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 0.5fr 1fr max-content;
  }

  .detalli-postare span {
    font-size: 12px;
    line-height: 14px;
    color: #406367;
  }

  textarea {
    width: 100%;
    padding: 1rem;
  }
  .user-detalii {
    flex: 1;
  }

  .fisiere-inline {
    justify-content: space-between;
  }

  .telefon span {
    font-size: 24px;
    line-height: 26px;
    font-weight: 600;
    color: #002f34;
    margin-bottom: 0.2rem;
  }

  .telefon svg {
    width: 32px !important;
    height: 32px !important;
    min-height: 0 !important;
    min-width: 0 !important;
    color: rgb(0, 47, 52);
    padding: 8px;
    background-color: rgb(35, 229, 219);
    border-radius: 50%;
    margin-right: 16px;
    min-height: 0;
    min-width: 0;
  }

  .telefon {
    align-items: center;
    text-align: center;
    display: flex;
  }

  .detalii {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    text-align: left;
  }

  textarea {
    background-clip: padding-box;
    background-color: rgb(242, 244, 245);
    border: 1px solid rgb(242, 244, 245);
    border-radius: 4px;
    color: rgb(64, 99, 103);
    font-size: 15px;
    line-height: 20px;
    outline: 0px;
    resize: none;
  }

  .user-detalii span {
    font-size: 20px;
    line-height: 22px;
    color: #002f34;
    font-weight: 700;
  }

  .detalii svg {
    width: 72px;
    height: 72px;
    min-height: 72px;
    min-width: 72px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
`;

export const RightSide = styled.div`
  .detalii {
    display: flex;
    align-items: center;
    text-align: left;
  }

  .detalii svg {
    width: 72px;
    height: 72px;
    min-height: 72px;
    min-width: 72px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
  .buton-alb {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    background-color: transparent;
    border: 2px solid rgb(0, 47, 52);
    border-radius: 4px;
    color: rgb(0, 47, 52);
    padding: 0px 8px;
    margin: 0px 4px;
    flex: 1 1 0%;
    min-height: 48px;
  }

  .buton-negru {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    background-color: rgb(0, 47, 52);
    border: 5px solid rgb(0, 47, 52);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 0px 8px;
    margin: 0px 4px;
    flex: 1 1 0%;
    min-height: 48px;
  }

  .butoane {
    display: flex;
    align-items: stretch;
    padding: 20px 0 10px;
  }

  .box-right-second {
    display: flex;
    flex-direction: column;
  }

  .box-right-second a {
    text-align: center;
    padding: 1rem;
    font-size: 12px;
    font-weight: 600;
    color: #2769ff;
    text-decoration: underline;
  }

  .cost-estimativ svg {
    width: 24px;
    height: 24px;
    font-size: 24px;
    min-height: 0;
    min-width: 0;
    color: #7f9799;
  }

  .cost-estimativ {
    align-items: center;
    display: grid;
    grid-template-columns: 0.15fr 1fr max-content;
    border-bottom: 1px solid rgb(216, 223, 224);
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
  }

  .cost-estimativ span {
    font-weight: 700;
    font-size: 14px;
    color: #002f34;
    line-height: 18px;
  }

  .cost-estimativ p {
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: #406367;
  }

  .cost-estimativ:last-of-type {
    padding-bottom: 5rem;
  }
`;
