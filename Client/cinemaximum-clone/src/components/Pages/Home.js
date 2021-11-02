import React from "react";
import BookingBar from "../BookingBar";
import HeroSlider from "../HeroSlider";

export default function Home() {
  return (
    <div className="relative">
      <HeroSlider />
      <BookingBar className="absolute" />
    </div>
  );
}
