import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import React from "react";

const SectionContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xxl mx-auto w-full max-w-screen-xl bg-card px-2.5 py-24 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
