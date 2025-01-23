import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import { HeroVideoDialogDemo } from "./hero";

export const Use = () => {
  return (
    <div className="w-full relative px-6">
      <div className="text-center my-10">
        <span className="text-lg mb-4">
          <AuroraText>Use of Myaimix</AuroraText>
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
          <TextAnimate animation="blurInUp" as="h1">
            How To Use Myaimix .
          </TextAnimate>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          There is video for how to use Myaimix its just take only 2 minutes but
          after this you can save some more time
        </p>
      </div>
      <HeroVideoDialogDemo />
    </div>
  );
};
