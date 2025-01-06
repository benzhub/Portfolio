import Image from "next/image";
import React from "react";

const Programming = () => {
  return (
    <div className="py-4 h-full overflow-hidden">
      <div className="h-1/5"></div>
      <h3 className="text-3xl font-bold text-white/75 text-center hover:translate-x-2 transition duration-200">
        Lover of programming and creation .
      </h3>
      
      <div className="h-3/5 overflow-hidden relative">
        <div
          className="absolute -right-[5rem] -bottom-[3rem] lg:-right-[4rem] lg:-bottom-[2rem]"
          style={{
            position: "relative",
            height: "350px",
            width: "300px",
          }}
        >
          <Image
            src="/b5.svg"
            alt="creation"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Programming;
