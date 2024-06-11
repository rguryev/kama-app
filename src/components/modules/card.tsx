import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ConditionalRenderer from "@/lib/condititional-renderer";
import getCategoryColor from "@/lib/get-category-color";

export interface CardProps {
  className?: string;
  label?: string;
  title?: string;
  summary?: string;
  imgSrc?: any;
  imgAlt?: any;
  href?: any;
}

const Card: FC<CardProps> = ({
  className,
  label,
  title,
  summary,
  href,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-8 overflow-hidden rounded-3xl shadow-xl",
        className,
      )}
    >
      <div className="flex-1">
        <div className="relative aspect-[16/9] min-h-full w-full sm:aspect-[4/3]">
          <Image src={imgSrc} fill alt={imgAlt} className="object-cover" />
        </div>
      </div>
      <div className="ml-4 flex flex-1 flex-col justify-center pb-4">
        <ConditionalRenderer condition={label}>
          <h6 className={`color mb-2 font-medium ${getCategoryColor(label)}`}>
            {label}
          </h6>
        </ConditionalRenderer>
        <ConditionalRenderer condition={title}>
          <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        </ConditionalRenderer>
        <ConditionalRenderer condition={summary}>
          <div className="mb-4">{summary}</div>
        </ConditionalRenderer>
        <ConditionalRenderer condition={href}>
          <Button className="w-40" asChild>
            <Link href={href}>Read More</Link>
          </Button>
        </ConditionalRenderer>
      </div>
    </div>
  );
};

export default Card;
