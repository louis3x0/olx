import React from "react";
import { Image, InfoContainer, InfoDiv, InfoImage, InfoText } from "./styles";

const Info = () => {
  return (
    <InfoDiv>
      <InfoContainer>
        <InfoImage>
          <Image src="https://static.olx.ro/static/olxro/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" />
        </InfoImage>
        <InfoText>
          <p>
            {" "}
            OLX.ro iti ofera posibilitatea de a publica anunturi gratuite pentru
            orasul tau si imprejurimile sale. Vei gasi usor pe OLX.ro anunturi
            gratuite interesante din Bucuresti, Ilfov si alte orase din tara si
            vei putea intra usor in legatura cu cei care le-au publicat. Pe
            OLX.ro te asteapta locuri de munca, apartamente si camere de
            inchiriat, masini second-hand si telefoane mobile la preturi mici.
            Daca vrei sa vinzi ceva vei putea adauga foarte usor anunturi
            gratuite. Daca vrei sa cumperi ceva aici vei putea gasi produsele
            care te intereseaza la preturi mai mici decat in orice magazin.
          </p>
        </InfoText>
      </InfoContainer>
    </InfoDiv>
  );
};

export default Info;
