import React from "react";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        zIndex: "2",
        width: "7rem",
        height: "7rem",
        padding: "2rem 4rem 2rem 1rem",
        background: "white",
        borderRadius: "50%",
      }}
    >
      <FaAngleRight color="#000" size="2x" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        zIndex: "2",
        width: "7rem",
        height: "7rem",
        padding: "2rem 1rem 2rem 4rem",
        background: "white",
        borderRadius: "50%",
      }}
    >
      <FaAngleLeft color="#000" size="1x" />
    </div>
  );
};
export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const sliderContent = [
    {
      image:
        "https://www.cinemaximum.com.tr/Files/Carousel/pcr_3-03-20210922.jpg",
      title: "Covid-19 Aşı ve PCR Testi Zorunluluğu Genelgesi Hakkında",
    },
    {
      image: "https://www.cinemaximum.com.tr/Files/Eternals_1920x420.jpg",
      title:
        "Marvel Studios'dan Eternals 5 Kasım'da Vizyonda! Biletleri Ön Satışta!",
    },
    {
      image: "https://www.cinemaximum.com.tr/Files/DUNE_1920x420_.jpg",
      title: "Dune: Çöl Gezegeni Vizyonda! Hemen Tıkla Biletini Al!",
    },
    {
      image:
        "https://www.cinemaximum.com.tr/Files/_stanbul_Muhaf_zlar__Slider.jpg",
      title:
        "İstanbul Muhafızları: 100 Yılın Muhafızları Vizyonda! Hemen Tıkla Biletini Al...",
    },
    {
      image:
        "https://www.cinemaximum.com.tr/Files/CGV_Ogrenci_isi_indirim_SM_1920x420.jpg",
      title: "Öğrenci İşi Sinema! %35'e varan Öğrenci İndirimi Cinemaximum'da!",
    },
  ];
  return (
    <div className="hero-slider overflow-x-hidden overflow-y-visible">
      <Slider {...settings}>
        {sliderContent.map((item) => (
          <div>
            <img
              className="w-full h-[420px] object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="flex justify-evenly py-5">
              <h1 className="text-4xl font-extralight">{item.title}</h1>
              <button className="btn bg-black text-white">İncele</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
