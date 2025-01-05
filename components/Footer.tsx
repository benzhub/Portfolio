import Image from "next/image";

import { socialMedia } from "@/data";
import GradientButton from "./buttons/gradient";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you prepared to make your mark in the <span className="text-purple">digital world</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s start a conversation about how I can support your project goals.
        </p>
        <Link href="mailto:lenrich1403@gmail.com">
          <GradientButton title="Chat now!" />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Benz
        </p>

        <div className="flex items-center md:gap-3 gap-6 py-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image 
                src={info.img} 
                alt="icons" 
                width={20} 
                height={20} 
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;