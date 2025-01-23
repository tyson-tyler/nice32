import React from "react";
import "./style.css";

// Make sure to import the external CSS if you have any

import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <Image src="/banner/nice.jpg" alt="Banner image 1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <Image src="/banner/nice1.jpg" alt="Banner image 2" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <Image src="/banner/nice2.jpg" alt="Banner image 3" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <Image src="/banner/nice3.jpg" alt="Banner image 4" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <Image src="/banner/nice4.jpg" alt="Banner image 5" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <Image src="/banner/nice5.jpg" alt="Banner image 6" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <Image src="/banner/nice6.jpg" alt="Banner image 7" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <Image src="/banner/nice7.jpg" alt="Banner image 8" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <Image src="/banner/nice8.jpg" alt="Banner image 9" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <Image src="/banner/nice9.jpg" alt="Banner image 10" />
          </div>
        </div>
        <div className="content">
          <h1 data-content="ALL IN ONE">ALL IN ONE</h1>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
