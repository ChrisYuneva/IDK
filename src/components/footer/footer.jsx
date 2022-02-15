import React from "react";
import assets from "../../assets";
import "./styles.scss";
import Ref from "../ref/ref";

function Footer() {
  return (
    <footer className={"footer"}>
      <Ref
        src={assets.logo_git}
        alt={"Logo GitHub"}
        style={"footer_ref"}
        href={"https://github.com/ChrisYuneva"}
      />
      <Ref
        src={assets.logo_telegram}
        alt={"Logo Telegram"}
        style={"footer_ref"}
        href={"https://github.com/ChrisYuneva"}
      />
      <Ref
        src={assets.logo_codewars}
        alt={"Logo Codewars"}
        style={"footer_ref"}
        href={"https://github.com/ChrisYuneva"}
      />
    </footer>
  );
}

export default Footer;
