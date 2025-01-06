import Image from "next/image";
import React from "react";

const Programming = () => {
  return (
    <div className="py-4 h-full overflow-hidden">
      <div className="h-1/5"></div>
      <h3 className="text-3xl font-bold text-white/75 text-center hover:translate-x-2 transition duration-200">
        Lover of programming and creation .
      </h3>
      {/* top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
      <div className="h-3/5 overflow-hidden relative">
        <div
          className="absolute -right-6 bottom-8"
          style={{
            position: "relative",
            height: "350px",
            width: "400px",
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
