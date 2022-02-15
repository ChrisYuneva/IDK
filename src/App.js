import "./App.css";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/test.json";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slideshow from "./containers/slideshow/slideshow";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      <Slideshow />
      {/*  <Lottie options={defaultOptions} height={700} width={700} />*/}
    </div>
  );
}

export default App;
