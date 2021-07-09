import styled from "styled-components";

export const PostsContainer = styled.div`
  background: #f2f4f5;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1286px;
  margin: 0 auto;
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: none;
  max-height: none;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 29px;
    font-weight: 700;
    line-height: 24px;
    margin: 3rem;
    color: #002f34;
  }

  @media (max-width: 1100px) {
    h2 {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 21px;
      margin: 1rem 0 3rem;
    }
  }
`;

export const PostItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-bottom: 78px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
  }
  @media (max-width: 867px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export const PostItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  height: 390px;
  border-radius: 4px;
  .imagine {
    height: 218px;
    line-height: 218px;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 580px) {
    height: 450px;

    .imagine {
      height: 295px;
    }
  }

  @media (max-width: 450px) {
    height: 480px;
  }
`;

export const InnerPost = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  a {
    color: #002f34;
    font-size: 15.5px;
    font-weight: 500;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const PostUl = styled.ul`
  display: flex;

  list-style: none;
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: #406367;
  line-height: 1.17;
  margin-bottom: 10px;

  li {
    content: "-";
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
  }
`;
