import classNames from "classnames";
import { ReactNode } from "react";

type GridType = {
  children: ReactNode;
  cols?: number;
  rows?: number;
  gap?: number;
  className?: string;
};

function Grid({
  children,
  cols = 1,
  rows = 1,
  gap = 0,
  className = "",
}: GridType) {
  const gridClass = classNames("grid", className, {
    "grid-cols-1": cols === 1,
    "grid-cols-2": cols === 2,
    "grid-cols-3": cols === 3,
    "grid-cols-4": cols === 4,
    "grid-cols-5": cols === 5,
    "grid-cols-6": cols === 6,
    "grid-cols-7": cols === 7,
    "grid-cols-8": cols === 8,
    "grid-cols-9": cols === 9,
    "grid-cols-10": cols === 10,
    "grid-rows-1": rows === 1,
    "grid-rows-2": rows === 2,
    "grid-rows-3": rows === 3,
    "grid-rows-4": rows === 4,
    "grid-rows-5": rows === 5,
    "grid-rows-6": rows === 6,
    "grid-rows-7": rows === 7,
    "grid-rows-8": rows === 8,
    "grid-rows-9": rows === 9,
    "grid-rows-10": rows === 10,
    "gap-1": gap === 1,
    "gap-2": gap === 2,
    "gap-3": gap === 3,
    "gap-4": gap === 4,
    "gap-5": gap === 5,
    "gap-6": gap === 6,
  });
  return <div className={gridClass}>{children}</div>;
}

function GridItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const gridItemClass = classNames(
    "border border-white/10 rounded-lg p-4 min-h-[400px]",
    className
  );
  return <div className={gridItemClass}>{children}</div>;
}

function TechStack() {
  const leftLists = ["ReactJS", "NextJS", "Typescript", "TailwindCSS", "Bootstrap", "Shadcn UI", "Acternity UI", "React Native"];
  const rightLists = ["Python", "MySQL", "PostgreSQL", "Prisma", "Docker", "Linux", "AWS", "Supabase"];
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-6 h-full">
      <div className="p-4 text-center">
        <div className="text-lg text-[#C1C2D3]">
          I constantly try to improve
        </div>
        <div className="text-2xl font-bold">My tech stack</div>
      </div>
      <div className="p-4 flex items-center justify-center">
        <div className="relative h-[300px] overflow-hidden">
          <div className="animate-scroll-vertical flex gap-4">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {[...leftLists, ...leftLists].map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 translate-y-10">
              {[...rightLists, ...rightLists].map((item, i) => (
                <span
                  key={`clone-${i}`}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div id="about" className="mt-24">
      <Grid cols={1} gap={6}>
        <Grid cols={12} gap={6} className="lg:grid-cols-12">
          <GridItem className="md:col-span-6">
            <TechStack />
          </GridItem>
          <GridItem className="md:col-span-3">2</GridItem>
          <GridItem className="md:col-span-3">3</GridItem>
        </Grid>
        <Grid cols={1} gap={6} className="md:grid-cols-3">
          <GridItem className="md:col-span-1">4</GridItem>
          <GridItem className="md:col-span-1">5</GridItem>
          <GridItem className="md:col-span-1">6</GridItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
