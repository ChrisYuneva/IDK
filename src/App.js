import "./App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/test.json";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
      <div>
        <Header color='pink' text={'test1'} />
        <div>
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
          <Footer/>
      </div>
  );
}

export default App;
