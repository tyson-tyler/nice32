import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

// Define the Props interface
interface TweetCardProps {
  name: string;
  username: string;
  description: string;
  img: StaticImageData | string; // StaticImageData for imported images or string for external URLs
  children?: ReactNode; // Optional children for rendering additional content
}

// TweetCard Component
const TweetCard: React.FC<TweetCardProps> = ({
  name,
  username,
  description,
  img,
  children,
}) => {
  return (
    <div className="border p-4 rounded-xl shadow-md w-full mx-auto bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={img}
          alt={`${name}'s avatar`}
          width={48} // Add width for Next.js Image
          height={48} // Add height for Next.js Image
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>
      <p className="text-sm text-gray-800">{description}</p>
      <div className="mt-2 text-yellow-600">{children}</div>
    </div>
  );
};

export default TweetCard;
