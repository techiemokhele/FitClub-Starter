import React from "react";

//import customs
import "./Plans.css";
import { plansData } from "../../data/plansData";

//import images
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      {/* plans data */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="tick-icon" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits </span>
            </div>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
