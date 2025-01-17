"use client";

import dynamic from "next/dynamic";
const HeroButton = dynamic(() => import("./buttons/hero"), {
  ssr: false,
});
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center " />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[24rem]">
            Discover Dynamic Brilliance with Next.js
          </p>

          <TextGenerateEffect
            words="Building the bridge between imagination and functionality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            I&apos;m Ben, a Frontend Developer based in Taiwan.
          </p>

          <HeroButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
