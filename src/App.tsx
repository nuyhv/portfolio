import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
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
      <Header />
      <Mainpage />
    </>
  );
}

export default App;
