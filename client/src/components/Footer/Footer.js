import React from "react";
import {
  CenterItems,
  Container,
  FooterContainer,
  LeftItems,
  RightItems,
  Ul,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LeftItems>
          <Ul>
            <li>Ajutor si contact</li>
            <li>Cautari frecvente</li>
            <li>Conditii de utilizare</li>
            <li>Politica de confidentialitate</li>
            <li>Setari Cookies</li>
            <li>Harta site</li>
            <li>Harta judetelor</li>
            <li>Cariere in OLX</li>
            <li>ANPC</li>
            <li>Parteneri</li>
          </Ul>
        </LeftItems>
        <CenterItems>
          <Ul>
            <li>Aplicatii mobile</li>
            <li>Cum functioneaza</li>
            <li>OLX pentru afacerea ta</li>
            <li>Livrare prin OLX</li>
            <li>Promovarea anunturilor</li>
            <li>Blog OLX</li>
            <li>Sfaturi de siguranta</li>
            <li>How to OLX</li>
            <li>Publicitate pe OLX</li>
            <li>Bun de angajat</li>
            <li>Incotro in RO</li>
          </Ul>
        </CenterItems>
        <RightItems>
          <p>Urmareste-ne pe</p>
          <div className="iconite-social">
            <div className="facebook">
              <img
                src="https://static.olx.ro/static/olxro/packed/font/2f9ed74eb16a89b2ef6149ac4c19e435fb.svg"
                alt=""
              />
            </div>
            <div className="instagram">
              <img
                src="https://static.olx.ro/static/olxro/packed/font/2f2b36258b98290b664a2044479a46e78d.svg"
                alt=""
              />
            </div>
            <div className="youtube">
              <img
                src="https://static.olx.ro/static/olxro/packed/font/2fe6a0cb0c597dd3a032a1dcd1e10f14aa.svg"
                alt=""
              />
            </div>
          </div>
          <p style={{ marginTop: "1rem" }}>
            Descarca aplicatia pentru telefon din
          </p>
          <div className="store">
            <div className="app-store">
              <img
                src="https://static.olx.ro/static/olxro/packed/font/2f49b54353de5793b164e0183ce0eede7c.svg"
                alt=""
              />
            </div>
            <div className="google-store">
              <img
                src="https://static.olx.ro/static/olxro/packed/font/2f9ffdf76917fa605b139944cf4ea4fb62.svg"
                alt=""
              />
            </div>
          </div>
        </RightItems>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
