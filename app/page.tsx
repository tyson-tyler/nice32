"use client";
import { useEffect, useState } from "react";
import { Main } from "./components/layout/main";
import { Empower } from "./components/layout/empower";
import Review from "./components/layout/power/review";

import MyAimixSlider from "./components/layout/slider";
import World from "./components/layout/world/world";
import Banner from "./components/layout/banner/banner";
import Pricing from "./components/layout/price/pricing";
import Team from "./components/layout/team/team";
import { Use } from "./components/layout/use/use";
import BlogSection from "./components/layout/blog/blog";
import FAQSection from "./components/layout/faq/faq";
import Footer from "./components/layout/footer/footer";

const ClientOnlyComponent = ({ Component }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on SSR

  return <Component />;
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="min-h-screen">
        <Main />
      </div>
      <div className="min-h-screen flex justify-center items-center w-full my-5 lg:my-10">
        <div className="flex justify-center items-center ">
          <Use />
        </div>
      </div>

      <div className="min-h-screen">
        <World />
      </div>
      <div className="min-h-screen">
        <MyAimixSlider />
      </div>

      <div className="min-h-screen mb-7">
        <ClientOnlyComponent Component={Empower} />
      </div>
      <div className="min-h-screen">
        <ClientOnlyComponent Component={Review} />
      </div>
      <div className="min-h-screen mt-7">
        <ClientOnlyComponent Component={Banner} />
      </div>
      <div className="min-h-screen">
        <ClientOnlyComponent Component={Pricing} />
      </div>
      <div className="min-h-screen">
        <ClientOnlyComponent Component={Team} />
      </div>
      <div className="min-h-screen">
        <ClientOnlyComponent Component={BlogSection} />
      </div>
      <div>
        <ClientOnlyComponent Component={FAQSection} />
      </div>
      <div>
        <ClientOnlyComponent Component={Footer} />
      </div>
    </div>
  );
}
