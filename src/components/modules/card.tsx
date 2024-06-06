import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ConditionalRenderer from "@/lib/condititional-renderer";
import getCategoryColor from "@/lib/get-category-color";

interface CardProps {
  label?: string;
  title?: string;
  summary?: string;
  href?: any;
}

const Card = ({
  className,
  props,
}: {
  className?: string;
  props: CardProps;
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
          <Image src="/blog/1.jpeg" fill alt="sky" className="object-cover" />
        </div>
      </div>
      <div className="ml-4 flex flex-1 flex-col justify-center pb-4">
        <ConditionalRenderer condition={props.label}>
          <h6
            className={`color mb-2 font-medium ${getCategoryColor(
              props.label,
            )}`}
          >
            {props.label}
          </h6>
        </ConditionalRenderer>
        <ConditionalRenderer condition={props.title}>
          <h3 className="mb-4 text-2xl font-bold">{props.title}</h3>
        </ConditionalRenderer>
        <ConditionalRenderer condition={props.summary}>
          <div className="mb-4">{props.summary}</div>
        </ConditionalRenderer>
        <ConditionalRenderer condition={props.href}>
          <Button className="w-40" asChild>
            <Link href={props.href}>Read More</Link>
          </Button>
        </ConditionalRenderer>
      </div>
    </div>
  );
};

export default Card;
