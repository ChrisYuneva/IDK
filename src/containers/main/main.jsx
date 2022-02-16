import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./styles.scss";

function Main() {
  return (
    <div>
      <Header />
      <span className={"main-text"}>
        Hey! My name is Christina and this is my little project where I
        practiced writing a React app You can go through the pages and try
        something.
      </span>
      <Footer />
    </div>
  );
}

export default Main;
