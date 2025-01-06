import React from "react";
import { AiFillOpenAI } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { GiGearHammer } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiOpentofu } from "react-icons/si";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { LiaMagicSolid } from "react-icons/lia";

const Creation = () => {
  return (
    <div className="h-full py-2">
      <div className="hover:translate-x-2 transition duration-200 relative">
        <h3 className="text-3xl font-bold text-white/75 text-center">
          Creating multiple wonderful{" "}
          <span className="text-purple/70">JavaScript tools</span>.
        </h3>
      </div>
      <div className="flex items-end justify-start relative overflow-hidden h-3/4">
        <div className="absolute -bottom-[2.5rem] left-[3rem]">
          <LiaMagicSolid size={180} className="text-white/30" />
        </div>
        <div className="absolute top-[2.8rem] right-[2.5rem]">
          <IoGameControllerOutline size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[6.8rem] right-[2.5rem]">
          <GiGearHammer size={30} className="text-white/30" />
        </div>
        <div className="absolute top-12 right-[5.5rem]">
          <FiTool size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[4.8rem] right-[4rem]">
          <AiFillOpenAI size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[5.5rem] right-[7rem]">
          <SiOpentofu size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[7.5rem] right-[5.5rem]">
          <BsPencil size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[4.8rem] right-[1rem]">
          <TbBrandGoogleBigQuery size={30} className="text-white/30" />
        </div>
        <div className="absolute top-[9.5rem] right-[4rem]">
          <MdOutlinePhoneIphone size={30} className="text-white/30" />
        </div>
      </div>
    </div>
  );
};

export default Creation;
