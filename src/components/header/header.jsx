import React from "react";
import assets from "../../assets";
import Link from "../link/link";
import PropTypes from "prop-types";
import "./styles.scss";

function Header({ color, text }) {
  return (
    <header className={`header ${color}`}>
      <img src={assets.logo_test} alt={"Logo"} className={"logo"} />
      <Link
        href={
          "https://github.com/ChrisYuneva/FLEUR/blob/master/src/containers/basket/style.css"
        }
      >
        <h1>test</h1>
      </Link>
      <Link href={"https://github.com"} style={"blue"} />
    </header>
  );
}

Header.propTypes = {
  color: PropTypes.string,
};

export default Header;
