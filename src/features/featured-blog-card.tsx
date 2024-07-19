import Image from "next/image";
import { FC } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import ConditionalRenderer from "@/lib/condititional-renderer";
import getCategoryColor from "@/lib/get-category-color";
import { Button } from "@/components/ui/button";

export interface BlogCardProps {
  className?: string;
  label?: string;
  title?: string;
  summary?: string;
  imgSrc?: any;
  imgAlt?: any;
  href?: any;
}

const FeaturedBlogCard: FC<BlogCardProps> = ({
  className,
  label,
  title,
  summary,
  href,
  imgSrc,
  imgAlt,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-[500px] w-full flex-col gap-6 overflow-hidden rounded-3xl bg-white shadow-xl	",
        className,
      )}
    >
      <div className="flex-1">
        <div className="relative aspect-[16/9] min-h-full w-full sm:aspect-[4/3]">
          <Image src={imgSrc} fill alt={imgAlt} className="object-cover" />
        </div>
      </div>
      <div className="mr-10 flex flex-1 flex-col justify-center pb-4">
        <ConditionalRenderer condition={label}>
          <h6 className={`color mb-2 font-medium ${getCategoryColor(label)}`}>
            {label}
          </h6>
        </ConditionalRenderer>
        <ConditionalRenderer condition={title}>
          <h3 className="mb-4 text-xl font-bold">{title}</h3>
        </ConditionalRenderer>

        <ConditionalRenderer condition={summary}>
          <div className="mb-4">{summary}</div>
        </ConditionalRenderer>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
