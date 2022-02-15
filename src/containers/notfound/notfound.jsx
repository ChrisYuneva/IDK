import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lotties/cat_notfound.json";

import "./styles.scss";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={"container-notfound"}>
      <div className={"line"}>
        <span className={"notfound-span"}>
          Sorry, this page not found. Please, follow this link:
        </span>
        <Link to={"/"} className={"notfound-link"}>
          Main page
        </Link>
      </div>

      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
}

export default NotFound;
