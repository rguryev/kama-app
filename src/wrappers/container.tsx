import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("rounded-3xl bg-card p-5 dark:text-white", className)}>
      {children}
    </div>
  );
};

export default Container;
