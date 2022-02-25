import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Lottie from "react-lottie";
import animationData from "../../lotties/main.json";

import "./styles.scss";

function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header />
      <div className={"main-container"}>
        <section className={"main-greetings"}>
          <Lottie options={defaultOptions} height={400} width={400} />
          <span className={"main-text"}>
            Hey! My name is Christina and this is my little project where I
            practiced writing a React app You can go through the pages and try
            something.
          </span>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Main;
