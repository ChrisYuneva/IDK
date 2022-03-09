import React from "react";
import assets from "../../assets";
import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <header className={"header"}>
      <Link to={"/"} className={"header-ref"}>
        <h2 className={"text-logo"}>IDK</h2>
        {/*<img src={assets.logo_test} alt={"Logo"} className={"logo"} />*/}
      </Link>

      <Link to={"/slideshow"} className={"header-link"}>
        Slideshow
      </Link>
      <Link to={"/fetch"} className={"header-link"}>
        Fetch
      </Link>
    </header>
  );
}

export default Header;
