"use client";

import Image from "next/image";
import Link from "next/link";

type GradientCardType = {
  coverImg: string;
  title: string;
  description: string;
  iconLists: string[];
  link: string;
};

const GradientCard = ({
  coverImg,
  title,
  description,
  iconLists,
  link,
}: GradientCardType) => {
  return (
    <div
      className=" relative flex flex-col gap-4 p-6 w-[19rem] rounded-2xl bg-[#161822] 
    bg-[radial-gradient(at_88%_40%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_49%_30%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_14%_26%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_0%_64%,hsla(263,93%,56%,1)_0px,transparent_85%),radial-gradient(at_41%_94%,hsla(284,100%,84%,1)_0px,transparent_85%),radial-gradient(at_100%_99%,hsla(306,100%,57%,1)_0px,transparent_85%)]
    shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]"
    >
      {/* Border Animation */}
      <div
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[calc(100%+2px)] h-[calc(100%+2px)] overflow-hidden pointer-events-none rounded-2xl
      bg-gradient-to-b from-white/50 to-white/40"
      >
        <div
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[200%] h-40 origin-left
        bg-gradient-to-b from-transparent via-[#9333EA] to-transparent
        animate-[rotate_8s_linear_infinite]"
        />
      </div>

      {/* Content */}
      <div className="space-y-1 flex justify-center items-center">
        <Image
          src={coverImg}
          alt="project"
          width={500}
          height={100}
          style={{ maxHeight: "200px", width: "auto" }}
          className="rounded-lg"
        />
      </div>

      <hr className="border-none h-[0.1rem] bg-[#2e2f3a]" />

      <div className="flex flex-col gap-3">
        <h3 className="text-base text-white font-medium">{title}</h3>
        <p className="text-xs text-[#d4d4d4] min-h-[3rem]">{description}</p>
        <div className="flex flex-wrap gap-2">
          {iconLists.map((icon, idx) => (
            <Image
              key={idx}
              src={icon}
              alt="icon"
              width={25}
              height={25}
              className="rounded-md"
            />
          ))}
        </div>
      </div>

      <Link href={link} target="_blank">
        <button
          className="w-full py-2 px-4 text-sm text-white rounded-full
        bg-gradient-to-b from-[#5e3aee] to-[#c56bf0]
        shadow-[inset_0_-2px_25px_-4px_#ffffff]"
        >
          Explore
        </button>
      </Link>
    </div>
  );
};

export default GradientCard;
