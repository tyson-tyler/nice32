import React from "react";
import brackets from "./brac";

interface TagLineProps {
  className?: string;
  children: React.ReactNode; // Allow any valid JSX or string content
}

const TagLine: React.FC<TagLineProps> = ({ className = "", children }) => {
  return (
    <div className={`tagline flex items-center text-xs ${className}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
