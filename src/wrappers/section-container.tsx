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
  return <div className={cn("py-20", className)}>{children}</div>;
};

export default SectionContainer;
