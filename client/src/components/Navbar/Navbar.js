import React from "react";
import { HeaderContainer, LogoDiv, RightDiv, NavbarDiv } from "./styles";
import { FaRegComment, FaRegHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HeaderContainer>
      <NavbarDiv>
        <LogoDiv>
          <h1>
            <Link
              to="/"
              id="headerLogo"
              class="olx-website-rebranded"
              title="Anunturi pe OLX.ro"
            >
              <span class="olx-website-rebranded__o"></span>
              <span class="olx-website-rebranded__l"></span>
              <span class="olx-website-rebranded__x"></span>
            </Link>
          </h1>
        </LogoDiv>

        <RightDiv>
          <div class="mesaje">
            <Link to="/">
              <FaRegComment />
              <span>Mesaje</span>
            </Link>
          </div>
          <div class="inima">
            <Link to="/">
              {" "}
              <FaRegHeart class="fa-comment" />
            </Link>
          </div>
          <div class="contul-meu">
            <Link to="/login">
              <FaUser />
              <span>Contul meu</span>
            </Link>
          </div>
          <button>Adauga anunt nou</button>
          <div class="hamburger-button">
            <i class="fas fa-bars"></i>
          </div>
        </RightDiv>
      </NavbarDiv>
    </HeaderContainer>
  );
};

export default Navbar;
