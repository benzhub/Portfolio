"use client";

type GradientButtonProps = {
  title: string;
  onClick?: () => void;
};

const GradientButton = ({ title, onClick }: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex justify-center items-center relative overflow-hidden cursor-pointer py-2 px-6
      backdrop-blur-2xl rounded-[5rem] transition-all duration-500 
      border-[4px] border-fuchsia-300/70
      bg-[length:300%_300%] animate-gradient
      bg-origin-border bg-clip-[content-box,_border-box]
      hover:scale-110 active:border-[#fe53bb] active:animate-none
      bg-[linear-gradient(#212121,#212121),linear-gradient(137.48deg,#ffdb3b_10%,#fe53bb_45%,#8f51ea_67%,#0044ff_87%)]
      before:absolute before:inset-[1px] before:rounded-[5rem] before:p-[1px]
      before:bg-gradient-to-r before:from-[#ffdb3b] before:via-[#fe53bb] before:to-[#8f51ea]
      before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-100"
    >
      {/* Stars Container */}
      <div className="absolute inset-0 -z-10 overflow-hidden transition-all duration-500 backdrop-blur-2xl rounded-[5rem]
        group-hover:z-10 group-hover:bg-[#212121]">
        <div className="relative w-[200rem] h-[200rem] bg-transparent">
          <div className="absolute -top-40 -left-[100rem] w-full h-full animate-[star-rotate_90s_linear_infinite]
            after:absolute after:inset-0 after:bg-[radial-gradient(#ffffff_1px,transparent_1%)] after:bg-[length:50px_50px]" />
          <div className="absolute top-0 -left-1/2 w-[170%] h-[500%] animate-[star-move_60s_linear_infinite]
            before:absolute before:inset-0 before:bg-[radial-gradient(#ffffff_1px,transparent_1%)] before:bg-[length:50px_50px] before:opacity-50" />
        </div>
      </div>

      {/* Text */}
      <strong className="z-20 text-lg tracking-[5px] text-white text-shadow-white">
        {title}
      </strong>

      {/* Glow Effect */}
      <div className="absolute flex w-48">
        <div className="w-full h-[30px] blur-2xl animate-pulse-glow bg-[rgba(254,83,186,0.636)] -z-10" />
        <div className="w-full h-[30px] blur-2xl animate-pulse-glow bg-[rgba(142,81,234,0.704)] -z-10" />
      </div>
    </button>
  );
};

export default GradientButton;