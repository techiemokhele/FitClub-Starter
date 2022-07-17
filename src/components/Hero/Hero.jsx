import React from "react";

//import customs
import "./Hero.css";
import Header from "../Header/Header";

//import images
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* The best ad section */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        {/* hero section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to stay in shape and build your ideal
              body so that you live up your life to the fullest
            </span>
          </div>
        </div>

        {/* company figures */}
        <div className="figures">
          <div>
            <span>+31</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+932</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+60</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">get started</buttons>
          <buttons className="btn">learn more</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join now</button>

        <div className="heart-rate">
          <img src={Heart} alt="heart-icon" />
          <span>Heart Rate </span>
          <span>121 bpm</span>
        </div>

        {/*hero images*/}
        <img src={Hero_image} alt="hero-pic" className="hero-image" />
        <img
          src={Hero_image_back}
          alt="background-pic"
          className="hero-image-back"
        />

        {/*calories section*/}
        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
