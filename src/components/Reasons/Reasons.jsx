import React from "react";

//import customs
import "./Reasons.css";

//import images
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="pic-display" />
        <img src={image2} alt="pic-display" />
        <img src={image3} alt="pic-display" />
        <img src={image4} alt="pic-display" />
      </div>

      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why to </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="icon-tick" />
            <span>over +120 expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="icon-tick" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="icon-tick" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="icon-tick" />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="partner-pic" />
          <img src={adidas} alt="partner-pic" />
          <img src={nike} alt="partner-pic" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
