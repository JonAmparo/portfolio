import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

function NavLogo() {
  return (
    <React.Fragment>
      <Link to="/" className="brand">
        <picture className="brand__img">
          <source srcSet={`${logo2} 1x`} />
          <img
            className="brand__img"
            srcSet={`${logo2} 1x`}
            alt="Jonathan Amparo | Portfolio"
          />
        </picture>
      </Link>
    </React.Fragment>
  );
}

export default NavLogo;
