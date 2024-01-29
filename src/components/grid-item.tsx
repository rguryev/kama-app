import { FC } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const variants = cva(
  "shadow-grid rounded-3xl bg-background dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
        "3x3":
          "md:col-span-3 col-span-full row-span-3 relative overflow-hidden md:p-8 p-4",
        "4x3":
          "md:col-span-4 col-span-full row-span-3 relative overflow-hidden md:p-8 p-4",
        "4x4":
          "md:col-span-4 col-span-full row-span-4 relative overflow-hidden md:p-8 p-4",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  },
);

const GridItem: FC<GridItemProps> = ({ size, children }) => {
  return (
    <div
      className={cn(
        variants({
          size,
          className:
            "transition-colors duration-75 ease-in-out hover:bg-neutral-50 hover:dark:bg-neutral-800",
        }),
      )}
    >
      {children}
    </div>
  );
};

export default GridItem;
