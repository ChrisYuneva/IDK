import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slideshow from "./containers/slideshow/slideshow";
import NotFound from "./containers/notfound/notfound";
import Main from "./containers/main/main";

function App() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

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

export default App;
