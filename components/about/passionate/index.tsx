import React from "react";
import { FaCode } from "react-icons/fa6";
import { PiMagnifyingGlass } from "react-icons/pi";

const Passion = () => {
  return (
    <div className="h-full py-4">
      <div className="h-2/5 overflow-hidden relative">
        <FaCode
          className="text-white/20 absolute top-1/2 -right-[4rem] -translate-x-1/2 -translate-y-1/2"
          size={100}
        />
      </div>
      <h3 className="text-3xl font-bold text-white/75 text-center hover:translate-x-2 transition duration-200">
        Passionate about{" "}
        <span className="text-purple/70">technology and coding</span>.
      </h3>
      <div className="h-2/5 overflow-hidden relative">
        <PiMagnifyingGlass
          className="text-white/20 absolute top-1/2 left-[1.5rem] -translate-x-1/2 -translate-y-1/2"
          size={100}
        />
      </div>
    </div>
  );
};

export default Passion;
