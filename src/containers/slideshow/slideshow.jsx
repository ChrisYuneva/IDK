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

  let [test, setTest] = useState(classes);

  let [arr, setArr] = useState(img);

  let [ch, setCh] = useState(0);

  let arrayLength = arr.length - 1;

  const cls = () => {
    if(count>1) {
      classes.push('fade');
    }
    setTest(test=classes);
  }

  const forward = () => {
    cls();
    setCount(count + 1);

    if (count > arrayLength - 1) {
      setCount((count = 0));
    }
  };

  const back = () => {
    if (count > 0) {
      setCount(count - 1);
      cls()
    } else {
      setCount((count = arrayLength));
    }
  };

  const change = () => {
    setCount(0);
    setCh((ch += 1));
    if (ch > 0) {
      setArr((arr = city));
    }
  };

  const change2 = () => {
    setCount(0);
    setCh((ch += 1));
    if (ch > 0) {
      setArr((arr = img));
    }
  };

  const change3 = () => {
    setCount(0);
    setCh((ch += 1));
    if (ch > 0) {
      setArr((arr = different));
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
          className={test.join(" ")}
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
        <button onClick={change} className={"button-change"}>
          Cities
        </button>
        <button onClick={change3} className={"button-change"}>
          Different
        </button>
        <button onClick={change2} className={"button-change"}>
          Nature
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Slideshow;
