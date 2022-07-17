import React from "react";

//import customs
import "./Hero.css";
import Header from "../Header/Header";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>
      </div>
      <div className="right-h">Right</div>
    </div>
  );
}

export default Hero;
