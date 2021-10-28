import React, { useState } from "react";
import "./header.css";
import logo from "./img/cinemaximum_logo.svg";
import goldClass from "./img/gold_class_salon_sizin-black-logo.png";
import arthouse from "./img/arthouse-icon.png";

const Header = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <img src={logo} />
        </div>
        <div className="navbar__menu">
          <a href="/">Menü</a>
        </div>
        <div className="navbar__navigator">
          <ul style={{ display: "flex" }}>
            <li>
              <a href="/">Filmler</a>
            </li>
            <li>
              <a href="/">Sinemalar</a>
            </li>
            <li>
              <img src={goldClass} alt="gold class" />
            </li>
            <li>
              <img src={arthouse} alt="arthouse" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
