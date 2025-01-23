"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";

export default function MyAimixSlider() {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_23-2151488755.jpg",
      title: "AI-Powered Solutions",
      subtitle: "Innovate with Intelligence",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666311.jpg",
      title: "Next-Gen Automation",
      subtitle: "Seamless AI Integration",
    },
    {
      image:
        "https://img.freepik.com/free-photo/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_23-2151488747.jpg",
      title: "Smart Analytics",
      subtitle: "Turn Data Into Insights",
    },
    {
      image:
        "https://img.freepik.com/free-photo/cyberpunk-boy-illustration_23-2151728202.jpg",
      title: "Creative AI",
      subtitle: "Fuel Your Imagination",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative px-6">
      <div className="text-center my-10">
        <span className="text-lg mb-4">
          <AuroraText>Features</AuroraText>
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
          <TextAnimate animation="blurInUp" as="h1">
            Explore the World of MyAimix
          </TextAnimate>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Dive into the power of AI-driven solutions that are fast, intuitive,
          and built for the future. Discover our features below!
        </p>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4 pb-3">
            <div
              className="bg-cover bg-center rounded-2xl h-[500px] md:h-[600px] lg:h-[750px] flex flex-col justify-end items-center text-center overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <span className="text-lg md:text-xl font-medium text-gray-200 px-4 py-2 bg-gradient-to-r from-black/60 to-transparent rounded-t-md">
                {slide.title}
              </span>
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 px-4">
                {slide.subtitle}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
