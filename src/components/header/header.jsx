import React from "react";
import assets from "../../assets";
import "./styles.scss";

function Header() {
  return (
    <header className={"header"}>
      <img src={assets.logo_test} alt={"Logo"} className={"logo"} />
    </header>
  );
}

export default Header;
