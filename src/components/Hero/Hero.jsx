import React from "react";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

//import customs
import "./Hero.css";
import { Header } from "../";

//import images
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

function Hero() {
  //framer motion settings
  const transition = { type: "spring", duration: 3 };

  //cal width of circle
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        {/* The best ad section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "130px" : "203px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter end={120} start={0} delay="3" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={932} start={650} delay="5" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={60} start={0} delay="2" preFix="+" />
            </span>
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

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart-icon" className="beat" />
          <span>Heart Rate </span>
          <span>121 bpm</span>
        </motion.div>

        {/*hero images*/}
        <img src={Hero_image} alt="hero-pic" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt="background-pic"
          className="hero-image-back"
        />

        {/*calories section*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
