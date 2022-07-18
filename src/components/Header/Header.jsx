import React, { useState } from "react";
import { Link } from "react-scroll";

//import customs
import "./Header.css";
import Logo from "../../assets/logo2.png";
import Bars from "../../assets/bars.png";

function Header() {
  //if mobile show burger menu
  const mobileScreen = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobileScreen === true ? (
        <div className="hamburger-icon-bg" onClick={() => setMenuOpened(true)}>
          <img src={Bars} alt="hamburger-icon" className="hamburger-icon" />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="home"
              span={true}
              smooth={true}
              activeClass="active"
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
