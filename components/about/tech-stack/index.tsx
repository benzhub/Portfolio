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

export default InfiniteMovingTechStack;
