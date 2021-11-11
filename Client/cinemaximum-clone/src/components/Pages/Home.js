import { useState } from "react";
import BookingBar from "../BookingBar";
import BookingPopup from "../BookingPopup";
import HeroSlider from "../HeroSlider";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="relative">
      <HeroSlider />
      <BookingPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        className="absolute"
      />
      <BookingBar
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        className="absolute top-0 right-0"
      />
    </div>
  );
}
