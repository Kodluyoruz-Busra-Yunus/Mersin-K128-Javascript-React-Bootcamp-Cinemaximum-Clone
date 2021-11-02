import React, { useState } from "react";
import logo from "../img/cinemaximum_logo.svg";
import goldClass from "../img/gold_class_salon_sizin-black-logo.png";
import arthouse from "../img/arthouse-icon.png";
import cgv from "../img/cgv_icon.svg";
import { CgMenuLeft } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="flex h-20 items-center justify-center">
      <div className="container flex w-full h-full items-center justify-between">
        <div className="flex h-full items-center">
          <Link to="/">
            <img src={logo} alt="cinemaximum logo" />
          </Link>
          <div className="flex items-center justify-evenly w-40 border-l-2 border-r-2 mx-8 h-full">
            <CgMenuLeft size={30} />
            <a href="/">Menü</a>
          </div>
        </div>

        <div className="h-full w-[50%] px-3 flex justify-between items-center">
          <ul className={isVisible ? "flex items-center" : "hidden"}>
            <li>
              <a href="/">Filmler</a>
            </li>
            <li className="ml-10">
              <Link to="/sinemalar">Sinemalar</Link>
            </li>
            <li className="ml-10">
              <img src={goldClass} alt="gold class" className=" h-7" />
            </li>
            <li className="ml-10">
              <img src={arthouse} alt="arthouse" className="h-10" />
            </li>
          </ul>
          <FaSearch
            size={20}
            className=""
            onClick={() => {
              setVisible(false);
            }}
          />

          <input
            placeholder="Arama"
            className={
              isVisible ? "hidden" : "focus:outline-none w-[555px] px-3"
            }
          />
          <TiTimes
            size={25}
            className={isVisible ? "hidden" : null}
            onClick={() => {
              setVisible(true);
            }}
          />
        </div>
        <div className="flex items-center border-l-2 h-full pl-8">
          <Link to="/uye-ol" className="butn btn-primary mr-3">
            Üye Ol
          </Link>
          <Link to="/giris" className="butn btn-light mr-3">
            Giriş
          </Link>
          <a href="/" className="">
            <img src={cgv} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
