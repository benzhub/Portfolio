"use client";

import { useState } from "react";
import MagicButton from "@/components/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { Boxes } from "@/components/background/boxes";

function ContactMe() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "lenrich1403@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg px-8 lg:p-0">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-white text-2xl text-wrap text-center z-50">
          Do you want to start a project together?
        </h3>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    </div>
  );
}

export default ContactMe;
