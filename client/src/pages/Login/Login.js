import React, { useState } from "react";
import { ContentTab, LoginBox, LoginDiv, Ul } from "./styles";

const Login = () => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleCheckButton, setToggleCheckButton] = useState(false);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <LoginDiv>
      <LoginBox>
        <ContentTab>
          <Ul>
            <li>
              <a
                className={toggleState === 1 ? "tabs active" : "tabs"}
                href="#"
                onClick={() => toggleTab(1)}
              >
                Intra in cont
              </a>
            </li>
            <li>
              <a
                className={toggleState === 2 ? "tabs active" : "tabs"}
                href="#"
                onClick={() => toggleTab(2)}
              >
                Creeaza un cont
              </a>
            </li>
          </Ul>
        </ContentTab>
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div class="form-container">
            <form action="#" class="login-form">
              <div className="email">
                <label for="#">E-mail (din contul OLX)</label>
                <input type="text" placeholder="E-mail (din contul OLX)" />
              </div>
              <div className="password">
                <label for="#">Parola</label>
                <input type="text" placeholder="Parola" />
              </div>
              <div className="form-footer">
                <a href="#">Ai uitat parola?</a>
                <button>Intra in cont</button>
              </div>
            </form>
          </div>
          <p className="terms">
            Prin accesarea contului, esti de acord cu Termenii si Conditiile
            site-ului
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="form-container-2">
            <form action="#" class="login-form">
              <div className="email">
                <label for="#">E-mail (din contul OLX)</label>
                <input type="text" placeholder="E-mail (din contul OLX)" />
              </div>
              <div className="password">
                <label for="#">Parola</label>
                <input type="text" placeholder="Parola" />
              </div>
              <div className="form-footer">
                <p>
                  Prin clic pe butonul Inregistreaza-te, accept{" "}
                  <a href="#">Termenii de utilizare</a>.
                </p>
                <p>
                  Am înțeles că S.C. OLX Online Services S.R.L. îmi folosește
                  datele personale în conformitate cu{" "}
                  <a href="#">Declarația de confidențialitate</a> și{" "}
                  <a href="#">
                    Politica privind modulele cookie și alte tehnologii similare
                  </a>
                  . S.C. OLX Online Services S.R.L. recurge la sisteme automate
                  și la parteneri care analizează modul în care utilizez
                  serviciile, pentru a oferi o funcționalitate a produsului și
                  un conținut relevant, materiale publicitare personalizate,
                  precum și protecție împotriva mesajelor nesolicitate,
                  software-ului rău intenționat și utilizării neautorizate.
                </p>
                <div
                  className="checkbox"
                  onClick={() =>
                    setToggleCheckButton(
                      (setToggleCheckButton) => !setToggleCheckButton
                    )
                  }
                >
                  <label
                    className={
                      toggleCheckButton === true
                        ? "checkbox-l checkbox-active"
                        : "checkbox-l"
                    }
                  ></label>
                  <label>
                    Sunt de acord cu folosirea mijloacelor de comunicare
                    electronica si a echipamentelor de telecomunicatii in scopul
                    trimiterii de informatii de natura comerciala (de ex.
                    buletine informative, mesaje SMS) privind OLX Online
                    Services S.R.L., afliliatii sau partenerii sai.
                  </label>
                </div>
                <button>Inregistreaza-te</button>
              </div>
            </form>
          </div>
        </div>
      </LoginBox>
    </LoginDiv>
  );
};

export default Login;
