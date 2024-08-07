import Image from "next/image";
import { FC } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import ConditionalRenderer from "@/lib/condititional-renderer";
import getCategoryColor from "@/lib/get-category-color";
import { Button } from "@/components/ui/button";
import { getRelativeTime } from "@/lib/get-relative-time";

export interface BlogCardProps {
  className?: string;
  label?: any;
  title?: string;
  summary?: string;
  imgSrc?: any;
  imgAlt?: any;
  href?: any;
  publishedAt?: string | number | Date;
}

const BlogCard: FC<BlogCardProps> = ({
  className,
  label,
  title,
  summary,
  href,
  imgSrc,
  imgAlt,
  publishedAt,
}) => {
  const truncateBlogSummary =
    summary && summary.length > 80 ? summary.substring(0, 80) + "..." : summary;

  const publicationDate = publishedAt!;
  const relativeTime = getRelativeTime(publicationDate);

  return (
    <Link
      href={href}
      className={cn(
        "flex h-[500px] w-full flex-col gap-4 overflow-hidden rounded-3xl bg-white shadow-xl	",
        className,
      )}
    >
      <div className="flex-1">
        <div className="relative aspect-[16/9] min-h-full w-full sm:aspect-[16/10]">
          <Image src={imgSrc} fill alt={imgAlt} className="object-cover" />
        </div>
      </div>
      <div className="ml-4 flex flex-1 flex-col justify-start pb-4">
        <ConditionalRenderer condition={label}>
          <h6 className={`color mb-2 font-medium ${getCategoryColor(label)}`}>
            {label}
          </h6>
        </ConditionalRenderer>

        <div className="">
          <ConditionalRenderer condition={title}>
            <span className="inline text-lg font-bold">{title}</span>
          </ConditionalRenderer>{" "}
          {truncateBlogSummary && (
            <ConditionalRenderer condition={truncateBlogSummary}>
              <span className="inline text-lg">{truncateBlogSummary}</span>
            </ConditionalRenderer>
          )}
        </div>
        <span className="mt-1 text-gray-500">{relativeTime}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
