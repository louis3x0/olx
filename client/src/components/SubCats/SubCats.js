import React from "react";
import {
  Container,
  Image,
  Items,
  SubCategories,
  Categories,
  Searches,
} from "./styles";

const SubCats = () => {
  return (
    <SubCategories>
      <Container>
        <Items>
          <Categories>
            <Image src="https://static.olx.ro/static/olxro/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg" />
            <p>
              <b>Categorii principale:</b> Auto, moto si ambarcatiuni, Piese
              auto, Imobiliare, Locuri de munca, Casa si gradina, Sport, timp
              liber, arta, Electronice si electrocasnice, Moda si frumusete,
              Mama si copilul, Animale de companie, Agro si industrie, Servicii,
              afaceri, echipamente firme
            </p>
          </Categories>
          <Searches>
            {" "}
            <Image src="https://static.olx.ro/static/olxro/packed/font/2f3293cf048d8d7683b8ce3ac1ecde6db6.svg" />
            <p>
              <b>Cautari frecvente:</b> Dyson, Facile.it, Test, Bicicleta,
              Tractoare, Rtx 3060, 4x4, Casa, Schimb, Rulota, Rtx 2060, Rtx
              3070, Casa de vanzare, Atv, Rtx 3080, Tractor, Audi a4, Logan,
              Apartament, Teren
            </p>
          </Searches>
        </Items>
      </Container>
    </SubCategories>
  );
};

export default SubCats;
