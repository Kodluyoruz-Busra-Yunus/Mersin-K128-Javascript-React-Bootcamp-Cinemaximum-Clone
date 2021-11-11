import React from "react";
import { TiTimes } from "react-icons/ti";

export default function BookingPopup(prop) {
  console.log(prop);
  return (
    <div className={prop.showPopup ? "!flex booking-popup" : "booking-popup"}>
      <div className="booking-popoup-inner bg-white w-full relative">
        <div className="container">
          <div className="title relative flex justify-center text-lg my-2 mx-2 after:bg-black before:bg-black">
            <span>Bilet Al</span>
          </div>
          <TiTimes
            size={25}
            className="absolute right-3 top-3"
            onClick={() => {
              prop.setShowPopup(false);
            }}
          />
          <div className="flex">
            <div className="steps cinemas w-[33%]">
              <div className="steps-header">
                <input
                  type="text"
                  placeholder="Şehir yada Sinema adı yaz"
                  className="focus:outline-none px-1 w-full"
                ></input>
              </div>
            </div>
            <div className="steps movies w-[33%]">
              <div className="steps-header">
                <h3>Film Seç</h3>
              </div>
            </div>
            <div className="steps dates w-[16.6%]">
              <div className="steps-header">
                <h3>Tarih Seç</h3>
              </div>
            </div>
            <div className="steps session w-[16.6%]">
              <div className="steps-header">
                <h3>Seans Seç</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
