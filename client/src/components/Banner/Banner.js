import React from "react";
import {
  BannerDiv,
  BannerContainer,
  BannerImage,
  BannerText,
  Image,
} from "./styles";

const Banner = () => {
  return (
    <BannerDiv>
      <BannerContainer>
        <BannerImage>
          <Image src="https://static.olx.ro/static/olxro/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" />
        </BannerImage>

        <BannerText>
          <span>Crește-ți afacerea pe OLX!</span>
          <p>Descoperă oferta olx pentru afaceri</p>
        </BannerText>
        <button>Vezi mai multe detalii</button>
      </BannerContainer>
    </BannerDiv>
  );
};

export default Banner;
