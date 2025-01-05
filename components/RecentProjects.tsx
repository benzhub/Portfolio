"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import GradientCard from "./cards/gradient";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Showcasing My{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, link, ...project }) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] mt-6 md:mt-0"
            key={id}
          >
            <PinContainer
              title={title}
              href={link}
            >
              <GradientCard title={title} link={link} {...project} />
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;