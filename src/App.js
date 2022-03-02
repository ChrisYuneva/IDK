import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slideshow from "./containers/slideshow/slideshow";
import NotFound from "./containers/notfound/notfound";
import Main from "./containers/main/main";
import Lottie from "react-lottie";
import animationData from "./lotties/loading.json";

import "./App.css";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading === true) {
    return <Lottie options={defaultOptions} height={700} width={700} />;
  } else {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/slideshow" element={<Slideshow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
