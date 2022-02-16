import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import assets from "../../assets";

import "./styles.scss";

const img = [
  assets.pink1,
  assets.pink2,
  assets.pink3,
  assets.pink4,
  assets.pink5,
  assets.pink6,
  assets.pink7,
];

function Slideshow() {
  let classes = ["img-slide"];

  let [count, setCount] = useState(0);

  let arrayLength = img.length - 1;

  const forward = () => {
    setCount(count + 1);
    classes.push("fade");
    console.log(classes);
    if (count > arrayLength - 2) {
      setCount((count = 0));
    }
  };

  const back = () => {
    if (count > 0) {
      setCount(count - 1);
      classes.push("fade");
    } else {
      setCount((count = arrayLength));
    }
  };

  return (
    <>
      <Header />
      <div className={"container-slideshow"}>
        <button onClick={back} className={"button-slide"}>
          <img
            src={assets.arrow}
            alt={"Arrow left"}
            className={"button-slide-img-left"}
          />
        </button>
        <img
          src={img[count]}
          alt={"Slideshow image"}
          className={classes.join(" ")}
        />
        <button onClick={forward} className={"button-slide"}>
          <img
            src={assets.arrow}
            alt={"Arrow right"}
            className={"button-slide-img-right"}
          />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Slideshow;
