import React from "react";
import Logo from "../tense/get/rec.svg";
import Image from "next/image";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center lg:max-w-[30rem] justify-center h-[3.5rem] bg-gray-300/40 px-6 rounded-full ${
        className || ""
      } text-base`}
    >
      <Image
        className="w-5 h-5 text-white text-center flex justify-center items-center mr-2 animate-spin"
        width={10}
        height={10}
        src={Logo}
        alt="jell"
      />
      <span className="bg-gradient-to-r font-semibold from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        AI is Generating
      </span>
    </div>
  );
};

export default Generating;
