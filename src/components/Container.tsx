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
    <div
      className={cn(
        "rounded-3xl border-2 border-slate-300 bg-slate-50 p-5 dark:bg-slate-900 dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
