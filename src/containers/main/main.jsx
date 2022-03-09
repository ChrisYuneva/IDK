import React from "react";
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
      <div className={"main-container"}>
        <section className={"main-greetings"}>
          <Lottie options={defaultOptions} height={400} width={400} />
          <span className={"main-text"}>
            Hey! My name is Christina and this is my little project where I
            practiced writing a React app. You can go through the pages and try
            something.
          </span>
        </section>
      </div>
    </>
  );
}

export default Main;
