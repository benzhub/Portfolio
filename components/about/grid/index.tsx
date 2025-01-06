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

export default Grid;
