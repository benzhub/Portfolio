import classNames from "classnames";
import { ReactNode } from "react";

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

export default GridItem;
