import React, { useState } from "react";
import Header from "../../components/header/header";
import Image from "../../components/image/image";
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

  const forward = () => {
    setCount(count + 1);
    classes.push("fade");
    console.log(classes);
    if (count > img.length - 2) {
      setCount((count = 0));
    }
  };

  let arrayLength = img.length - 1;

  const back = () => {
    if (count > 0) {
      setCount(count - 1);
      classes.push("fade");
    } else {
      setCount((count = arrayLength));
    }
  };

  return (
    <div>
      <Header />
      <div className={"container-slideshow"}>
        <button onClick={back} className={"button-slide"}>
          <Image
            src={assets.arrow_left}
            alt={"Arrow left"}
            style="button-slide-img"
          />
        </button>
        <Image
          src={img[count]}
          alt={"Slideshow image"}
          style={classes.join(" ")}
        />
        <button onClick={forward} className={"button-slide"}>
          <Image
            src={assets.arrow_right}
            alt={"Arrow right"}
            style={"button-slide-img"}
          />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Slideshow;
