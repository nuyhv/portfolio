import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import ScrollButton from "./components/ScrollButton";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <ScrollButton />
      <Header />
      <Mainpage />
    </>
  );
}

export default App;
