import React from "react";
import "./Header.css";
import logo from "../../Assets/LOGO.svg";
import frame1 from "../../Assets/frame3.svg";
import frame2 from "../../Assets/frame2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main">
      <div className="logo-img">
        <img src={logo} />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>Properties</li>
          <li>My Dashboard/Activity</li>
          <li className="nav-item-link">
            <Link>List your property</Link>
          </li>
          <li>Contact us</li>
          <li>More</li>
          <div className="vertical"></div>
          <li>
            <img src={frame1} />
          </li>
          <li>
            <img src={frame2} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
