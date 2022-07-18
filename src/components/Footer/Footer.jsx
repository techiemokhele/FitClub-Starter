import React from "react";

//import customs
import "./Footer.css";

//import icons
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo2.png";

function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="github-icon" />
          <img src={Instagram} alt="instagram-icon" />
          <img src={LinkedIn} alt="linkedin-icon" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo-pic" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer;
