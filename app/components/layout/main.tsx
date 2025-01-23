"use client";

import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { WarpBackground } from "@/components/ui/warp-background";
import { ArrowRightIcon, Rocket } from "lucide-react";

import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <WarpBackground>
      <div className="w-full h-[80vh] mt-5 flex justify-center items-center px-6 py-8">
        <div className="text-center flex flex-col items-center font-semibold mb-2">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Myaimix</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
          <h1 className="text-4xl mt-4 md:text-5xl lg:text-7xl mb-4">
            <TextAnimate>AI Solutions for</TextAnimate>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4">
            <AuroraText>Every Need</AuroraText>
          </h1>

          <p className="text-md mt-4 max-w-lg text-gray-600">
            🎉 Discover a variety of AI tools designed to make your life easier,
            help you grow, and thrive in an AI-driven world.🥳
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="h-12 w-40 bg-green-600 text-white hover:bg-green-700 rounded-md transition font-semibold flex justify-center items-center">
              <Rocket className="w-5 h-5 mr-2 text-white" /> Join Now
            </button>
          </div>
          <div className="text-center text-gray-300 text-sm mt-4">
            Explore Ai all the features for free. Hurry up! Offer not for all
            time.
          </div>

          {/* <div className="absolute bottom-0 flex gap-6 flex-wrap justify-center w-full">
            {["b.svg", "c.svg", "g.svg", "a.svg", "d.svg", "e.svg"].map(
              (icon, index) => (
                <Image
                  key={index}
                  src={`/assets/static/${icon}`}
                  alt=""
                  width={50}
                  height={50}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] transition-transform duration-300 transform hover:scale-110"
                />
              )
            )}
          </div> */}
        </div>
      </div>
    </WarpBackground>
  );
};
