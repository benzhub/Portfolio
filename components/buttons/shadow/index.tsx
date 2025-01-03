import React, { ReactNode } from "react";

export type ShadowButtonType = {
  children: ReactNode;
  onClick?: () => void;
};

const ShadowButton = ({ children, onClick }: ShadowButtonType) => {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-4
        border-none
        text-base
        text-white
        rounded-lg
        tracking-[4px]
        font-bold
        uppercase
        transition-[box-shadow]
        duration-500
        bg-[#6E12E6]
        shadow-[0_0_25px_#6E12E6]
        hover:shadow-[0_0_5px_#6E12E6,0_0_25px_#6E12E6,0_0_50px_#6E12E6,0_0_100px_#6E12E6]
      "
    >
      {children}
    </button>
  );
};

export default ShadowButton;
