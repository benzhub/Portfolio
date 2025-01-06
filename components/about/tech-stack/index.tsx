"use client";

import React from "react";
import InfiniteMovingCards from "@/components/cards/infinite-moving";

function InfiniteMovingTechStack() {
  const leftLists = [
    "ReactJS",
    "NextJS",
    "Typescript",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn UI",
    "Acternity UI",
    "React Native",
  ];
  const rightLists = [
    "Python",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Linux",
    "AWS",
    "Supabase",
  ];
  return (
    <div className="flex items-center justify-center gap-4">
      <InfiniteMovingCards direction="down" speed="normal">
        <div className="flex flex-col gap-4">
          {leftLists.map((item, idx) => (
            <span
              key={idx}
              className="py-4 px-2 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
        </div>
      </InfiniteMovingCards>
      <InfiniteMovingCards direction="up" speed="normal">
        <div className="flex flex-col gap-4">
          {rightLists.map((item, idx) => (
            <span
              key={idx}
              className="py-4 px-2 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
        </div>
      </InfiniteMovingCards>
    </div>
  );
}

function TechStack() {

  return (<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 h-full w-full">
    <div className="p-4 text-center">
      <div className="text-lg text-[#C1C2D3]">
        I constantly try to improve
      </div>
      <div className="text-2xl font-bold">My tech stack</div>
    </div>
    <div className="p-4 flex items-center justify-center w-full">
      <div className="h-full overflow-hidden w-full">
        <InfiniteMovingTechStack />
      </div>
    </div>
  </div>)
}

export default TechStack;
