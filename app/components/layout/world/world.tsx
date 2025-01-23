"use client";

import styles from ".";

import Image from "next/image";
import Logo from "./map.png";
import { LineShadowTextDemo1 } from "./he";
import { LineShadowTextDemo } from "./heading";

const peopleLocations = [
  {
    src: "https://mighty.tools/mockmind-api/content/human/74.jpg",
    className: "lg:bottom-20 lg:right-20 md:bottom-2 md:right-2",
  },
  {
    src: "https://mighty.tools/mockmind-api/content/human/41.jpg",
    className: "bottom-40 left-40",
  },
  {
    src: "https://mighty.tools/mockmind-api/content/human/76.jpg",
    className: "top-10 left-20",
  },
  {
    src: "https://mighty.tools/mockmind-api/content/human/17.jpg",
    className: "right-[20rem] top-[14rem]",
  },
  {
    src: "https://mighty.tools/mockmind-api/content/human/10.jpg",
    className: "right-[40rem] top-[4rem]",
  },
  {
    src: "https://mighty.tools/mockmind-api/content/human/47.jpg",
    className: "top-1/2 left-[45%]",
  },
];

const World = () => (
  <section className={`${styles.paddings} relative z-10 bg-gray-950`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="text-center flex justify-center items-center ">
        <LineShadowTextDemo1 />
        <h1 className="text-8xl ml-3">
          {""} & {""}
        </h1>
        <div className="ml-2">
          <LineShadowTextDemo />
        </div>
      </div>
      <span className="text-sm font-semibold text-center mt-2">
        There are several out there using myaimix and get work done fast and
        grow fast
      </span>

      <div className="relative mt-[68px] flex w-full h-[550px]">
        <Image
          src={Logo}
          fill
          alt="map"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {peopleLocations.map((person, index) => (
          <div
            key={index}
            className={`absolute ${person.className} w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]`}
          >
            <Image
              src={person.src}
              alt="people"
              width={50}
              loading="lazy"
              height={50}
              className="w-full h-full rounded-full"
            />
            <div className="absolute inset-0 bg-blue-500 opacity-0 rounded-full animate-ping"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default World;
