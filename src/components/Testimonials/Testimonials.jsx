import React, { useState } from "react";

//import customs
import "./Testimonials.css";
import { testimonials, testimonialsData } from "../../data/testimonialsData";

//import icons
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--red)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name + " image"}
        />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="left-arrow-icon"
          />
          <img
            onClick={() => {
              selected === 0 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="right-arrow-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
