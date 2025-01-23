import React from "react";

import Image from "next/image";

const Banner = () => {
  const images = [
    "/assets/static/banner/nice.jpg",
    "/assets/static/banner/nice1.jpg",
    "/assets/static/banner/nice2.jpg",
    "/assets/static/banner/nice3.jpg",
    "/assets/static/banner/nice4.jpg",
    "/assets/static/banner/nice5.jpg",
    "/assets/static/banner/nice6.jpg",
    "/assets/static/banner/nice7.jpg",
    "/assets/static/banner/nice8.jpg",
    "/assets/static/banner/nice9.jpg",
  ];

  return (
    <>
      <div
        className="banner"
        style={
          {
            "--quantity": images.length,
          } as React.CSSProperties & { "--quantity": number }
        }
      >
        <div className="slider">
          {images.map((src, index) => (
            <div
              className="item"
              style={
                {
                  "--position": index + 1,
                } as React.CSSProperties & { "--position": number }
              }
              key={index}
            >
              <Image
                width={450}
                height={550}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="ALL IN ONE">ALL IN ONE</h1>
          <div className="model" />
        </div>
      </div>
    </>
  );
};

export default Banner;
