import React from "react";
import CardsT from "./chan";

const Review = () => {
  return (
    <div
      className="min-w-screen min-h-screen bg-gray-50 dark:bg-gray-950 text-white flex items-center justify-center py-5"
      style={{
        backgroundImage: 'url("/path/to/handwritten-image.jpg")', // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full bg-white dark:bg-gray-900 dark:text-white px-5 pt-8 md:pt-24 text-gray-800">
        <div className="w-full max-w-8xl mx-auto">
          <div className="text-center max-w-xl mx-auto fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 dark:text-gray-100">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Our Happy customers around the world
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="w-full">
            <CardsT />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
