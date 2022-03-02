import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import assets from "../../assets";

import "./styles.scss";

const nature = [
  assets.pink1,
  assets.pink2,
  assets.pink3,
  assets.pink4,
  assets.pink5,
  assets.pink6,
  assets.pink7,
];

const city = [
  assets.city2,
  assets.city3,
  assets.city4,
  assets.city5,
  assets.city6,
  assets.city7,
  assets.city8,
];

const different = [
  assets.different1,
  assets.different2,
  assets.different3,
  assets.different4,
  assets.different5,
  assets.different6,
];

function Slideshow() {
  let classes = ["img-slide"];

  let [count, setCount] = useState(0);

  let [style, setStyle] = useState(classes);

  let [arr, setArr] = useState(nature);

  let [ch, setCh] = useState(0);

  let arrayLength = arr.length - 1;

  useEffect(() => {
    setStyle(classes);
    classes.push("fade");
    setTimeout(() => {
      classes.pop();
    }, 0);
  }, [count]);

  const forward = () => {
    setCount(count + 1);
    if (count > arrayLength - 1) {
      setCount((count = 0));
    }
  };

  const back = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount((count = arrayLength));
    }
  };

  const change = (arr) => {
    setCount(0);
    setCh((ch += 1));
    if (ch > 0) {
      setArr(arr);
    }
  };

  return (
    <>
      <Header />
      <section className={"container-slideshow-section"}>
        <button onClick={back} className={"button-slide"}>
          <img
            src={assets.arrow}
            alt={"Arrow left"}
            className={"button-slide-img-left"}
          />
        </button>
        <img
          src={arr[count]}
          alt={"Slideshow image"}
          className={style.join(" ")}
        />
        <button onClick={forward} className={"button-slide"}>
          <img
            src={assets.arrow}
            alt={"Arrow right"}
            className={"button-slide-img-right"}
          />
        </button>
      </section>
      <div className={"select-container"}>
        <button onClick={() => change(city)} className={"button-change"}>
          Cities
        </button>
        <button onClick={() => change(different)} className={"button-change"}>
          Different
        </button>
        <button onClick={() => change(nature)} className={"button-change"}>
          Nature
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Slideshow;
