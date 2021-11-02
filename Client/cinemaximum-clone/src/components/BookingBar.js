import React from "react";
import { BsChevronExpand } from "react-icons/bs";

export default function BookingBar() {
  return (
    <div className="booking-bar sticky bottom-0 w-full  h-[76px] text-white">
      <div className="container">
        <div className="title relative flex justify-center text-lg my-2">
          <span>Bilet Al</span>
        </div>
        <div className="row flex">
          <div className="col">
            <section className="booking-section">
              <label>Sinema Seç</label>
              <BsChevronExpand />
            </section>
          </div>
          <div className="col">
            <section className="booking-section">
              <label>Film Seç</label>
              <BsChevronExpand />
            </section>
          </div>
          <div className="col">
            <section className="booking-section">
              <label>Tarih Seç</label>
              <BsChevronExpand />
            </section>
          </div>
          <div className="col">
            <section className="booking-section">
              <label>Seans Seç</label>
              <BsChevronExpand />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
