import React, { useEffect, useState } from "react";
import { ContentTab, LoginBox, LoginDiv, Ul } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { register, login } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { Redirect, Link } from "react-router-dom";

const Login = () => {
  // Tabs
  const [toggleState, setToggleState] = useState(1);
  const [toggleCheckButton, setToggleCheckButton] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailLogin: "",
    passwordLogin: "",
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log(isAuthenticated);

  useEffect(() => {
    document.title = "TrelloClone | Sign Up";
  }, []);

  const { email, password, emailLogin, passwordLogin } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(register({ email, password }));
    } catch (err) {
      setAlert(err);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(emailLogin, passwordLogin));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <LoginDiv>
      <LoginBox>
        <ContentTab>
          <Ul>
            <li>
              <Link
                className={toggleState === 1 ? "tabs active" : "tabs"}
                to="#"
                onClick={() => toggleTab(1)}
              >
                Intra in cont
              </Link>
            </li>
            <li>
              <Link
                className={toggleState === 2 ? "tabs active" : "tabs"}
                to="#"
                onClick={() => toggleTab(2)}
              >
                Creeaza un cont
              </Link>
            </li>
          </Ul>
        </ContentTab>
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="form-container">
            <form className="login-form" onSubmit={(e) => loginSubmit(e)}>
              <div className="email">
                <label for="#">E-mail (din contul OLX)</label>
                <input
                  type="email"
                  placeholder="E-mail (din contul OLX)"
                  name="emailLogin"
                  value={emailLogin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="password">
                <label for="#">password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="passwordLogin"
                  value={passwordLogin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-footer">
                <Link to="#">Ai uitat password?</Link>
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
            <form className="login-form" onSubmit={(e) => onSubmit(e)}>
              <div className="email">
                <label for="#">E-mail (din contul OLX)</label>
                <input
                  type="text"
                  placeholder="E-mail (din contul OLX)"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="password">
                <label for="#">password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-footer">
                <p>
                  Prin clic pe butonul Inregistreaza-te, accept{" "}
                  <Link to="#">Termenii de utilizare</Link>.
                </p>
                <p>
                  Am ??n??eles c?? S.C. OLX Online Services S.R.L. ??mi folose??te
                  datele personale ??n conformitate cu{" "}
                  <Link to="#">Declara??ia de confiden??ialitate</Link> ??i{" "}
                  <Link to="#">
                    Politica privind modulele cookie ??i alte tehnologii similare
                  </Link>
                  . S.C. OLX Online Services S.R.L. recurge la sisteme automate
                  ??i la parteneri care analizeaz?? modul ??n care utilizez
                  serviciile, pentru a oferi o func??ionalitate a produsului ??i
                  un con??inut relevant, materiale publicitare personalizate,
                  precum ??i protec??ie ??mpotriva mesajelor nesolicitate,
                  software-ului r??u inten??ionat ??i utiliz??rii neautorizate.
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
                <button type="submit">Inregistreaza-te</button>
              </div>
            </form>
          </div>
        </div>
      </LoginBox>
    </LoginDiv>
  );
};

export default Login;
