import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import React from "react";

const TitleContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto mb-10 flex flex-col items-center text-4xl font-bold tracking-tight text-stone-800 sm:max-w-lg sm:text-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TitleContainer;

{
  /* <div className="mx-auto mb-10 sm:max-w-lg">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
    Как я работаю?
  </h1>
  <p className="mt-6 max-w-prose text-lg text-gray-600 dark:text-white">
    Этапы нашего сотрудничества
  </p>
</div>; */
}
