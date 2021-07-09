import styled from "styled-components";

export const SubCategories = styled.div`
  background: #f2f4f5;
  p {
    font-weight: 400;
    color: #002f34;
    font-size: 14px;
    line-height: 21px;
  }
  b {
    font-size: 14px;
    line-height: 16px;
    color: #002f34;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  max-width: 1286px;
  margin: 0 auto;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  padding: 95px 0;

  @media (max-width: 1320px) {
    padding: 95px 2rem;
  }

  @media (max-width: 867px) {
    grid-gap: 3rem;
  }

  @media (max-width: 732px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    padding: 95px 1rem;
  }
`;

export const Categories = styled.div``;

export const Searches = styled.div`
  img {
    width: 200px;
    margin-left: -18px;
  }

  @media (max-width: 450px) {
    img {
      width: 148px;
      height: 75px;
      margin-left: -25px;
    }
  }
`;

export const Image = styled.img`
  width: 114px;
  height: 129px;
  margin-bottom: 1rem;

  @media (max-width: 450px) {
    width: 68px;
    height: 99px;
    margin-bottom: 2rem;
  }
`;
