import styled from "styled-components";

export const ContainerCategories = styled.div`
  padding: 2rem 1rem 5rem;
`;

export const Container = styled.div`
  max-width: 1286px;
  margin: 0 auto;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 29px;
    font-weight: 700;
    line-height: 24px;
    margin: 3rem;
    margin-top: 1rem;
    color: #002f34;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2rem;
  margin-left: 3rem;

  @media (max-width: 1320px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 867px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 732px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 580px) {
    margin-left: 2rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 2rem;
  }
`;

export const Item = styled.div`
  width: 58%;
  display: flex;
  text-align: center;

  .imagine {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 1rem;
  }

  .masina {
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/auto-masini-moto-ambarcatiuni-5-2x.png);
    background-color: #ffce32 !important;
  }

  .piese {
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/piese-auto-1639-2x.png);
    background-color: rgb(58, 119, 255) !important;
  }

  .imobiliare {
    background-color: rgb(58, 119, 255) !important;
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/imobiliare-3-2x.png);
  }

  .locuri-de-munca {
    background-color: #23e5db !important;
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/locuri-de-munca-4-2x.png);
  }

  .casa {
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/casa-gradina-628-2x.png);
    background-color: #ceddff !important;
  }

  .sport {
    background-image: url(https://categories.olxcdn.com/assets/categories/olxro/hobby-sport-turism-97-2x.png);
    background-color: #ffd6c9 !important;
  }

  .electronice {
    background-color: #ff5636 !important;
    background-image: url(https://static.olx.ro/static/olxro/packed/img/2fbdd6cc9f1e2add8947ae07a2e4be0655.png);
  }

  .moda {
    background-image: url(https://static.olx.ro/static/olxro/packed/img/2fe929a474b25c02ed8d46f6b4191f56c2.png);
    background-color: #ceddff !important;
  }

  .familie {
    background-image: url(https://static.olx.ro/static/olxro/packed/img/2f7e12d511cd41d51846e65c3040bcb22c.png);
    background-color: #c8f8f6 !important;
  }

  .animale {
    background: url(https://static.olx.ro/static/olxro/packed/img/2f3f64b4385c02d4b4bdec60512414ddf3.png);
    background-color: #ffce32 !important;
    background-position: top;
    background-size: 86px;
    background-repeat: no-repeat;
  }

  a {
    color: #002f34;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }

  span {
    margin-top: 1rem;
  }
`;
