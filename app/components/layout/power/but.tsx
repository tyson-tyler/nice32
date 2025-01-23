import React from "react";
import "./style.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        {/* Add type assertion to fix TypeScript error with custom properties */}
        <div
          className="slider"
          style={{ "--quantity": 10 } as React.CSSProperties}
        >
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice.jpg"
              alt="Banner image 1"
              width={500}
              height={300} // Provide fixed width and height
            />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice1.jpg"
              alt="Banner image 2"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice2.jpg"
              alt="Banner image 3"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice3.jpg"
              alt="Banner image 4"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice4.jpg"
              alt="Banner image 5"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice5.jpg"
              alt="Banner image 6"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice6.jpg"
              alt="Banner image 7"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice7.jpg"
              alt="Banner image 8"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 9 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice8.jpg"
              alt="Banner image 9"
              width={500}
              height={300}
            />
          </div>
          <div
            className="item"
            style={{ "--position": 10 } as React.CSSProperties}
          >
            <Image
              src="/banner/nice9.jpg"
              alt="Banner image 10"
              width={500}
              height={300}
            />
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
