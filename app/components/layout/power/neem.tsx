import Image from "next/image";
import React from "react";

interface TweetCardProps {
  name: string;
  username: string;
  body: string;
  avatar: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  username,
  body,
  avatar,
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md max-w-md mx-auto mb-5">
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{username}</p>
        </div>
      </div>
      <p className="text-base text-gray-800 dark:text-gray-100">{body}</p>
    </div>
  );
};

export default TweetCard;
