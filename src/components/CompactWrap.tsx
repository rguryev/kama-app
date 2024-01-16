import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import React from "react";

const CompactWrap = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("shadow-compact flex items-center", className)}>
      {children}
    </div>
  );
};

export default CompactWrap;
