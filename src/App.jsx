import React from "react";
// Components
import Image from "./components/Image";
import Header from "./components/Header";
import Details from "./components/Details";
// Style
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Image />
      <div className="main">
        <Header />
        <Details />
      </div>
      <Footer />
    </div>
  );
}

export default App;
