import React from "react";
import TweetCard from "./tweet";
import Nice from "./avatar/nice.png";
import Cool from "./avatar/cool.png";
import West1 from "./avatar/west (1).png";
import West2 from "./avatar/west (2).png";
import West3 from "./avatar/west (3).png";
import West4 from "./avatar/west (4).png";
import West5 from "./avatar/west (5).png";
import West12 from "./avatar/west (12).png";

import Marquee from "@/components/ui/marquee";

// Star Rating SVG Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "yellow" : "gray"}
          className="w-5 h-5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill="none"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const CardsT = () => {
  const reviews = [
    {
      name: "John Doe",
      username: "johndoe",
      description:
        "This product is amazing! It has completely transformed the way I approach my daily tasks. The quality and attention to detail are unmatched. I highly recommend it to everyone looking for something reliable and effective.",
      img: Nice,
      rating: 5, // 5 stars rating
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      description:
        "The best purchase I’ve made in a long time. From the packaging to the product itself, everything was top-notch. It exceeded my expectations in every way. Five stars for sure!",
      img: Cool,
      rating: 4, // 5 stars rating
    },
    {
      name: "Chris West",
      username: "chriswest",
      description:
        "Absolutely love it. This product offers great value for money. It has made my daily routine so much easier, and I can’t imagine going back to how things were before.",
      img: West1,
      rating: 5, // 5 stars rating
    },
    {
      name: "Sarah Lee",
      username: "sarahlee",
      description:
        "Exceeded my expectations. The quality is fantastic, and it works perfectly for my needs. I appreciate the thoughtfulness put into every aspect of this product.",
      img: West2,
      rating: 5, // 5 stars rating
    },
    {
      name: "Michael Scott",
      username: "mscott",
      description:
        "Fantastic quality and speedy delivery. I was pleasantly surprised by how quickly it arrived and how well it was packaged. This product has been a great addition to my tools.",
      img: West3,
      rating: 5, // 5 stars rating
    },
    {
      name: "Olivia Brown",
      username: "oliviabrown",
      description:
        "A great investment! This product has truly improved my workflow and the quality is amazing. It’s now an essential part of my routine. Highly recommend!",
      img: West4,
      rating: 5, // 5 stars rating
    },
    {
      name: "Ethan White",
      username: "ethanwhite",
      description:
        "Exceeded all expectations! The design is sleek, the product is functional, and it has worked flawlessly since the moment I started using it. Worth every penny.",
      img: West5,
      rating: 5, // 5 stars rating
    },
    {
      name: "Charlotte Harris",
      username: "charlotteharris",
      description:
        "I am extremely satisfied with this product. It’s a must-have for anyone looking for efficiency and reliability. I can’t imagine going without it now.",
      img: West12,
      rating: 5, // 5 stars rating
    },
  ];

  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="grid max-w-[120rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {reviews.map((review, index) => (
            <TweetCard
              key={index}
              name={review.name}
              username={review.username}
              description={review.description}
              img={review.img}
            >
              {/* Add Star Rating inside the TweetCard */}
              <StarRating rating={review.rating} />
            </TweetCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default CardsT;
