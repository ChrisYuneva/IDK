import React from "react";
import assets from "../../assets";
import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <header className={"header"}>
      <Link to={"/"}>
        <img src={assets.logo_test} alt={"Logo"} className={"logo"} />
      </Link>

      <Link to={"/slideshow"} className={"header-link"}>
        Slideshow
      </Link>
    </header>
  );
}

export default Header;
