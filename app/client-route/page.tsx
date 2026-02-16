"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      id: 1,
      title: "Premium Collection",
      desc: "Discover the best fashion products with amazing offers",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 2,
      title: "Latest Trends",
      desc: "Stay updated with our newest arrivals",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      id: 3,
      title: "Special Discount",
      desc: "Get up to 50% off on selected items",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>

                <p className="text-sm md:text-lg lg:text-xl mb-6 text-gray-200">
                  {slide.desc}
                </p>

                <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition duration-300 rounded-full font-semibold shadow-lg hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
