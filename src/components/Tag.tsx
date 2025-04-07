import React from "react";

interface TagProps {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

const Tag = (props: TagProps) => {
  const { text, bgColor, onClick } = props;
  return (
    <div
      className={`min-w-4 p-1.5 h-4 rounded-full flex items-center justify-center font-bold text-white ${bgColor} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
export default Tag;
