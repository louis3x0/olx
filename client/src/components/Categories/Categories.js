import React from "react";
import { Link } from "react-router-dom";
import { Container, Item, ItemContainer, Text } from "./styles";
import { ContainerCategories } from "./styles";

const Categories = () => {
  return (
    <ContainerCategories>
      <Container>
        <Text>
          <h2>Categorii principale</h2>
        </Text>
        <ItemContainer>
          <Item>
            <Link to="/">
              <div className="imagine masina"></div>
              <span>Auto,moto si ambarcatiuni</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine piese"></div>
              <span>Piese auto</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine imobiliare"></div>
              <span>Imobiliare</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine locuri-de-munca"></div>
              <span>Locuri de munca</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine casa"></div>
              <span>Casa si gradina</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine sport"></div>
              <span>Sport, timp liber, arta</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine electronice"></div>
              <span>Electronice si electrocasnice</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine moda"></div>
              <span>Moda si frumusete</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine familie"></div>
              <span>Mama si copilul</span>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <div className="imagine animale"></div>
              <span>Animale de companie</span>
            </Link>
          </Item>
        </ItemContainer>
      </Container>
    </ContainerCategories>
  );
};

export default Categories;
