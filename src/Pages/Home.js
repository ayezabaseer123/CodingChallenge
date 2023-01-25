import { useState, useEffect } from "react";

import "./Home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Buttons from "../components/Buttons";
import BackgroundImage from "../components/BackgroundImage";
import SearchBar from "../components/SearchBar";
import Requirements from "../components/Requirements";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div>
      <Header />
      <Heading />
      <Buttons />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar setVisible={setVisible} />
        {visible ? (
          <>
            <div className="pop-box"></div>
          </>
        ) : (
          <>
            <Requirements />
          </>
        )}
      </div>
      <BackgroundImage />
      {windowWidth < 480 && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
