import React, { useState, useEffect, useRef } from "react";
import { HeaderContainer, LogoDiv, RightDiv, NavbarDiv } from "./styles";
import { FaRegComment, FaRegHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  const controlNav = () => {
    if (window.scrollY > 20) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <HeaderContainer className={`nav ${show ? "" : "none"}`} ref={ref}>
      <NavbarDiv>
        <LogoDiv>
          <h1>
            <Link
              to="/"
              id="headerLogo"
              className="olx-website-rebranded"
              title="Anunturi pe OLX.ro"
            >
              <span className="olx-website-rebranded__o"></span>
              <span className="olx-website-rebranded__l"></span>
              <span className="olx-website-rebranded__x"></span>
            </Link>
          </h1>
        </LogoDiv>

        <RightDiv>
          <div className="mesaje">
            <Link to="/">
              <FaRegComment />
              <span>Mesaje</span>
            </Link>
          </div>
          <div className="inima">
            <Link to="/">
              {" "}
              <FaRegHeart className="fa-comment" />
            </Link>
          </div>
          <div className="contul-meu">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <FaUser />
                <span>Contul meu</span>
              </Link>
            ) : (
              <Link to="/login">
                <FaUser />
                <span>Contul meu</span>
              </Link>
            )}
          </div>
          <button>Adauga anunt nou</button>
          <div className="hamburger-button">
            <i className="fas fa-bars"></i>
          </div>
        </RightDiv>
      </NavbarDiv>
    </HeaderContainer>
  );
};

export default Navbar;
