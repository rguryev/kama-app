import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import React from "react";

const DottedWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        " bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DottedWrapper;
