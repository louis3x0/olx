import React, { useEffect } from "react";
import {
  NavLi,
  Container,
  UList,
  GridContainer,
  LeftSide,
  RightSide,
} from "./styles";

const Products = () => {
  return (
    <NavLi>
      <Container>
        <UList>
          <li>
            <a href="#">Pagina principală</a>{" "}
          </li>
          <li>
            <a href="#">Casa si gradina</a>
          </li>
          <li>
            <a href="#">Scule electrice - Beius</a>
          </li>
        </UList>
        <GridContainer>
          <LeftSide>
            <div class="image-box">
              <img
                src="https://frankfurt.apollo.olxcdn.com/v1/files/08eu206o6l3t2-RO/image;s=1000x700"
                alt=""
                srcset=""
              />
            </div>

            <div class="descriere">
              <p>Postat azi la 21:24</p>
              <h1>
                Nivela laser 360 grade 4D ca și Hilti Dewalt Leica Spectra
              </h1>
              <span class="pret">410 lei</span>
              <div class="detalii-produs">
                <ul>
                  <li>Persoana fizica</li>
                  <li>Stare: Nou</li>
                  <li>Livrare cu verificare</li>
                </ul>
                <h2>Descriere</h2>
                <div class="descriere-produs">
                  <p>
                    Rog seriozitate. Prețul este fix. Va rog citiți toată
                    descrierea cu atenție. Va răspund la orice întrebare, Va pot
                    face suplimentar poze din orice unghi sau sa va trimit film.
                    Vând nivela din imagine. Poze reale. Este noua, nefolosita.
                    Poate da 16 linii verzi pe 360 grade, 4 planuri pe toți
                    pereții unei încăperi în același timp. La pachet cu 2
                    acumulatori de 3000 mA, telecomanda, incarcator, suport
                    perete, suport magnetic pt profil rigips, adaptor pt
                    trepied, etc. Liniile pot fi pornite de la tastatura sau
                    telecomanda.Optional pote fi pornita și printr o aplicație
                    Bluetooth. Intensitatea luminoasa a liniilor poate fi
                    scăzută dacă se dorește pt a economisi energie. Acumulatorul
                    este capabil sa alimenteze toate cele 16 linii la
                    intensitate maxima minim 5 ore. Trimit și în țară prin
                    curierat cu verificare colet ului. Costurile de transport
                    sunt achitate de cumpărător și pornesc de la 19 lei.
                  </p>
                </div>
                <div class="detalli-postare">
                  <span>ID: 222157336</span>
                  <span>Vizualizări: 672</span>
                  <span>Raporteaza</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }} class="descriere">
              <div class="intrebare-container">
                <div class="fisiere-inline">
                  <div class="detalii">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="1em"
                        height="1em"
                        viewBox="0 0 71 71"
                        data-testid="user-photo-placeholder"
                        alt="User avatar"
                        class="css-8d9fzy"
                      >
                        <defs>
                          <path
                            id="avatar_svg__a"
                            d="M.029 34.9c0 19.272 15.623 34.896 34.896 34.896 19.273 0 34.896-15.624 34.896-34.897C69.821 15.627 54.198.003 34.925.003 15.652.003.03 15.627.03 34.9"
                          ></path>
                          <path
                            id="avatar_svg__c"
                            d="M0 34.99c0 19.272 15.624 34.896 34.896 34.896 19.273 0 34.896-15.624 34.896-34.896C69.792 15.717 54.17.094 34.896.094 15.624.094 0 15.717 0 34.99z"
                          ></path>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <g transform="translate(.903 .903)">
                            <mask id="avatar_svg__b" fill="#fff">
                              <use xlinkHref="#avatar_svg__a"></use>
                            </mask>
                            <path
                              fill="#3A77FF"
                              d="M69.821 34.9c0 19.272-15.623 34.896-34.896 34.896C15.652 69.796.03 54.172.03 34.899.029 15.627 15.652.003 34.925.003c19.273 0 34.896 15.624 34.896 34.896"
                              mask="url(#avatar_svg__b)"
                            ></path>
                          </g>
                          <g transform="translate(.932 .906)">
                            <mask id="avatar_svg__d" fill="#fff">
                              <use xlinkHref="#avatar_svg__c"></use>
                            </mask>
                            <use
                              fill="#D8DFE0"
                              xlinkHref="#avatar_svg__c"
                            ></use>
                            <path
                              fill="#406367"
                              d="M10.788 98.23h48.216V50.013H10.788z"
                              mask="url(#avatar_svg__d)"
                            ></path>
                            <path
                              fill="#EBEEEF"
                              d="M53.436 34.896c0 10.24-8.3 18.54-18.54 18.54-10.239 0-18.54-8.3-18.54-18.54 0-10.239 8.301-18.54 18.54-18.54 10.24 0 18.54 8.301 18.54 18.54"
                              mask="url(#avatar_svg__d)"
                            ></path>
                            <path
                              fill="#7F9799"
                              d="M44.812 27.96c-3.975 5.115-11.344 6.04-16.46 2.065-5.115-3.975-6.04-11.344-2.065-16.46 3.975-5.115 11.344-6.04 16.46-2.065 5.116 3.975 6.04 11.344 2.065 16.46"
                              mask="url(#avatar_svg__d)"
                            ></path>
                            <path
                              fill="#7F9799"
                              d="M44.547 28.301l-9.604-7.462 7.463-9.604 9.603 7.462zm-30.922-1.955a7.617 7.617 0 1115.115-1.897 7.617 7.617 0 01-15.115 1.897"
                              mask="url(#avatar_svg__d)"
                            ></path>
                            <path
                              fill="#7F9799"
                              d="M13.59 26.067l7.836-.983.983 7.836-7.836.983z"
                              mask="url(#avatar_svg__d)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </i>
                    <div class="user-detalii">
                      <span>Jan</span>
                      <p>Pe OLX din septembrie 2019</p>
                      <p>Activ azi la 17:41</p>
                    </div>
                    <div class="telefon">
                      <i>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="css-gzjdh5"
                        >
                          <path
                            d="M18.388 19.978C10.62 19.635 4.365 13.38 4.022 5.612l3.515-1.406 2.149 4.299-1.664.832v.62a6.029 6.029 0 006.021 6.021h.62l.278-.554.555-1.11 4.298 2.15-1.406 3.514zm3.13-4.897l-6.022-3.011-1.347.45-.704 1.407a4.023 4.023 0 01-3.372-3.372l1.408-.704.449-1.346-3.01-6.022L7.65 2 2.63 4.007 2 4.94C2 14.347 9.654 22 19.061 22l.932-.63L22 16.35l-.483-1.27z"
                            fill="currentColor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </i>
                      <span>077 370 5905</span>
                    </div>
                  </div>
                </div>
                <textarea
                  placeholder="Scrie mesajul tau..."
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </LeftSide>
          <RightSide>
            <div class="box-right">
              <h2>Vanzator</h2>
              <img src="" alt="" srcset="" />
              <div class="detalii">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="1em"
                    height="1em"
                    viewBox="0 0 71 71"
                    data-testid="user-photo-placeholder"
                    alt="User avatar"
                    class="css-8d9fzy"
                  >
                    <defs>
                      <path
                        id="avatar_svg__a"
                        d="M.029 34.9c0 19.272 15.623 34.896 34.896 34.896 19.273 0 34.896-15.624 34.896-34.897C69.821 15.627 54.198.003 34.925.003 15.652.003.03 15.627.03 34.9"
                      ></path>
                      <path
                        id="avatar_svg__c"
                        d="M0 34.99c0 19.272 15.624 34.896 34.896 34.896 19.273 0 34.896-15.624 34.896-34.896C69.792 15.717 54.17.094 34.896.094 15.624.094 0 15.717 0 34.99z"
                      ></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <g transform="translate(.903 .903)">
                        <mask id="avatar_svg__b" fill="#fff">
                          <use xlinkHref="#avatar_svg__a"></use>
                        </mask>
                        <path
                          fill="#3A77FF"
                          d="M69.821 34.9c0 19.272-15.623 34.896-34.896 34.896C15.652 69.796.03 54.172.03 34.899.029 15.627 15.652.003 34.925.003c19.273 0 34.896 15.624 34.896 34.896"
                          mask="url(#avatar_svg__b)"
                        ></path>
                      </g>
                      <g transform="translate(.932 .906)">
                        <mask id="avatar_svg__d" fill="#fff">
                          <use xlinkHref="#avatar_svg__c"></use>
                        </mask>
                        <use fill="#D8DFE0" xlinkHref="#avatar_svg__c"></use>
                        <path
                          fill="#406367"
                          d="M10.788 98.23h48.216V50.013H10.788z"
                          mask="url(#avatar_svg__d)"
                        ></path>
                        <path
                          fill="#EBEEEF"
                          d="M53.436 34.896c0 10.24-8.3 18.54-18.54 18.54-10.239 0-18.54-8.3-18.54-18.54 0-10.239 8.301-18.54 18.54-18.54 10.24 0 18.54 8.301 18.54 18.54"
                          mask="url(#avatar_svg__d)"
                        ></path>
                        <path
                          fill="#7F9799"
                          d="M44.812 27.96c-3.975 5.115-11.344 6.04-16.46 2.065-5.115-3.975-6.04-11.344-2.065-16.46 3.975-5.115 11.344-6.04 16.46-2.065 5.116 3.975 6.04 11.344 2.065 16.46"
                          mask="url(#avatar_svg__d)"
                        ></path>
                        <path
                          fill="#7F9799"
                          d="M44.547 28.301l-9.604-7.462 7.463-9.604 9.603 7.462zm-30.922-1.955a7.617 7.617 0 1115.115-1.897 7.617 7.617 0 01-15.115 1.897"
                          mask="url(#avatar_svg__d)"
                        ></path>
                        <path
                          fill="#7F9799"
                          d="M13.59 26.067l7.836-.983.983 7.836-7.836.983z"
                          mask="url(#avatar_svg__d)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </i>
                <div class="user-detalii">
                  <span>Jan</span>
                  <p>Pe OLX din septembrie 2019</p>
                  <p>Activ azi la 17:41</p>
                </div>
              </div>
              <div class="butoane">
                <button class="buton-alb">Suna vanzatorul</button>
                <button class="buton-negru">Trimitem mesaj</button>
              </div>
            </div>

            <div class="box-right box-right-second">
              <button class="buton-negru">Comanda cu livrare</button>
              <a href="#">Cum funcționează Livrarea prin OLX?</a>
              <div class="cost-estimativ">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                    <g fill="none" fill-rule="evenodd">
                      <g
                        fill="currentColor"
                        fill-rule="nonzero"
                        stroke="currentColor"
                        stroke-width=".5"
                      >
                        <g>
                          <g>
                            <path
                              d="M31.418 1.899c.099.08.174.188.213.312l.023.095.007 1.636c1.92.156 3.652.985 4.959 2.251 1.242 1.202 2.1 2.798 2.373 4.584l.044.337 1.57.224c.175.005.333.078.449.194.12.12.194.285.194.468 0 .159-.056.304-.149.418-.08.099-.188.174-.312.213l-.095.023-1.636.007c-.156 1.92-.985 3.651-2.25 4.959-1.203 1.242-2.799 2.1-4.585 2.373l-.337.044-.224 1.57c-.005.175-.078.333-.194.449-.12.12-.285.194-.468.194-.159 0-.304-.056-.418-.149-.099-.08-.174-.188-.213-.312l-.023-.095-.007-1.636c-1.92-.156-3.651-.985-4.959-2.25-1.242-1.203-2.1-2.799-2.372-4.585l-.045-.337-1.57-.224c-.175-.005-.333-.078-.449-.194-.12-.12-.194-.285-.194-.468 0-.159.056-.304.149-.418.08-.099.188-.174.312-.213l.095-.023 1.636-.007c.156-1.92.985-3.652 2.25-4.959 1.203-1.242 2.799-2.1 4.585-2.372l.337-.045.224-1.57c.21-.465.226-.48.244-.494l.053-.017c.588-.182.685-.064.783.017zm.147 3.365l-1.227 2.59V5.272l-.293.035c-1.453.207-2.758.88-3.763 1.885-1.085 1.085-1.82 2.556-2.013 4.244h0l2.584 1.225h-2.58l.035.293c.207 1.453.88 2.758 1.885 3.763 1.085 1.085 2.556 1.82 4.244 2.013h0l1.225-2.584v2.58l.293-.035c1.453-.207 2.758-.88 3.763-1.885 1.085-1.085 1.82-2.556 2.013-4.244h0l-2.584-1.225h2.58l-.036-.298c-.211-1.48-.904-2.807-1.914-3.817-1.099-1.1-2.573-1.823-4.212-1.959h0zM31 8.451c.978 0 1.866.398 2.508 1.04.643.643 1.041 1.53 1.041 2.509 0 .978-.398 1.866-1.04 2.508-.643.643-1.53 1.041-2.509 1.041-.978 0-1.866-.398-2.508-1.04-.643-.643-1.041-1.53-1.041-2.509 0-.978.398-1.866 1.04-2.508.643-.643 1.53-1.041 2.509-1.041zm0 1.325c-.613 0-1.17.25-1.572.652-.403.403-.652.959-.652 1.572 0 .613.25 1.17.652 1.572.403.403.959.652 1.572.652.613 0 1.17-.25 1.572-.652.403-.403.652-.959.652-1.572 0-.613-.25-1.17-.652-1.572-.403-.403-.959-.652-1.572-.652z"
                              transform="translate(-918 -589) translate(896 255) translate(2 333)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
                <div class="info-text">
                  <span>Vezi costul estiamtiv</span>
                  <p>Cat va costa livrarea?</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7 2v1.414l1.271 1.27L15.586 12l-7.315 7.315L7 20.585V22h1.414l1.27-1.271L17 13.414l1-1v-.827l-3.942-3.942v-.001L9.686 3.271 8.413 2z"
                  ></path>
                </svg>
              </div>
              <div class="cost-estimativ">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M21 15.999h-.343A3.501 3.501 0 0 0 17.5 14a3.501 3.501 0 0 0-3.156 1.997l-4.687.002A3.5 3.5 0 0 0 6.5 14a3.5 3.5 0 0 0-3.158 2L3 16.002V5h11v6l1 1h6v3.999zM17.5 19c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-11 0c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19zm12-12l2.25 3H16V7h2.5zm1-2H16V4l-1-1H2L1 4v13.002l1.001 1 1.039-.001A3.503 3.503 0 0 0 6.5 21a3.502 3.502 0 0 0 3.46-3l4.08-.003A3.503 3.503 0 0 0 17.5 21a3.502 3.502 0 0 0 3.46-3.001H22l1-1V9.665L19.5 5z"
                    ></path>
                  </svg>
                </i>
                <div class="info-text">
                  <span>Vezi costul estiamtiv</span>
                  <p>Cat va costa livrarea?</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7 2v1.414l1.271 1.27L15.586 12l-7.315 7.315L7 20.585V22h1.414l1.27-1.271L17 13.414l1-1v-.827l-3.942-3.942v-.001L9.686 3.271 8.413 2z"
                  ></path>
                </svg>
              </div>
              <div class="cost-estimativ">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M21 5l.966 1.001v12.007l-.983.992H3.01l-.956-1.062V6.055L3.045 5h17.956zm-1.03 5.983H4.049v5.92h15.923v-5.92zm-.96 3.991v.998h-2.992v-.998h2.992zm.96-7.98H4.049v1.993h15.923V6.995z"
                    ></path>
                  </svg>
                </i>
                <div class="info-text">
                  <span>Vezi costul estiamtiv</span>
                  <p>Cat va costa livrarea?</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M7 2v1.414l1.271 1.27L15.586 12l-7.315 7.315L7 20.585V22h1.414l1.27-1.271L17 13.414l1-1v-.827l-3.942-3.942v-.001L9.686 3.271 8.413 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </RightSide>
        </GridContainer>
      </Container>
    </NavLi>
  );
};

export default Products;
