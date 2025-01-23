import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between w-full  dark:bg-black  bg-white    h-[60px]  px-4 items-center">
      <div className="flex gap-3 items-center">
        <Image src={Logo} className="w-12 h-12" alt="" />
        <span className="text-2xl font-semibold hidden lg:flex ">Myaimix</span>
      </div>
      <div className="lg:flex hidden gap-4  justify-center items-center ">
        <span className="text-md font-semibold cursor-pointer hover:text-green-600 transition">
          Home
        </span>

        <span className="text-md font-semibold cursor-pointer hover:text-green-600 transition">
          Services
        </span>
        <span className="text-md font-semibold cursor-pointer hover:text-green-600 transition">
          About us
        </span>
        <span className="text-md font-semibold cursor-pointer hover:text-green-600">
          Pricing
        </span>
        <span className="text-md font-semibold cursor-pointer hover:text-green-600">
          Blogs
        </span>

        <div className="h-[40px] w-full max-w-[200px] md:w-[200px] flex justify-center items-center border border-green-600 text-green-600 hover:bg-green-600 text-sm cursor-pointer hover:text-white rounded-md transition font-semibold relative overflow-hidden group">
          <Link
            href="/login"
            className="text-md flex justify-center items-center w-full h-full"
          >
            <button className="h-full w-full flex justify-center items-center">
              Get Started Now
              {/* Paper Plane SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.75 12.5l15-7-5 7-5 1 1 5-7-15z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
