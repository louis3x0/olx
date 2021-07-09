import styled from "styled-components";

export const BannerDiv = styled.div`
  background: #002f34;
`;

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.5fr 1fr max-content;
  align-items: center;

  button {
    background: #fff;
    color: #002f34;
    font-size: 14px;
    border: none;
    font-weight: 600;
    line-height: 1.29;
    padding: 11px 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 133px;
    border-radius: 4px;
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 1320px) {
    padding: 2rem 0 4rem;
  }

  @media (max-width: 867px) {
    grid-template-columns: 1fr;
    text-align: center;

    button {
      margin-top: 21px !important;
      width: auto;
      margin: 0 auto;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 0 4rem;
  }
`;

export const BannerImage = styled.div``;

export const Image = styled.img``;

export const BannerText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #7f9799;

  p {
    font-weight: 600;
    line-height: 25px;
    font-size: 20px;
    color: #ffffff;
    margin-top: 5px;
  }
`;
