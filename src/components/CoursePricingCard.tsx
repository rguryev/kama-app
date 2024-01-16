import { FC } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CoursePricingCardProps extends React.ComponentProps<typeof Card> {
  plan: {
    id: number;
    title: string;
    tagline: string;
    quota: number;
    price: number;
    features: Feature[];
  };
  className?: string;
}

type Feature = {
  text: string;
  footnote?: string;
  negative?: boolean;
};

const CoursePricingCard: FC<CoursePricingCardProps> = ({ plan }) => {
  return (
    <Card
      key={plan.id}
      className={
        "shadow-priceCard relative grid grid-cols-1 gap-2 rounded-3xl bg-stone-50 p-6 pt-10 dark:bg-black"
      }
    >
      <CardHeader className="p-0">
        <CardTitle className="font-display mb-3 text-left text-2xl font-semibold">
          {plan.title}
        </CardTitle>
        <CardDescription className="max-h-max max-w-prose text-wrap text-left text-base text-gray-500 sm:h-32">
          {plan.tagline}
        </CardDescription>
        <p className="font-display pb-4 pt-3 text-left text-4xl font-semibold sm:pt-1">
          {plan.price} zł
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <TooltipProvider>
          <div className="flex h-14 rounded-2xl border-gray-600 bg-gray-100 shadow-compact dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-3 flex items-center space-x-0 text-sm">
              <p>Продолжительность курса {plan.quota.toLocaleString()} месяц</p>

              <Tooltip delayDuration={300}>
                <TooltipTrigger className="ml-1.5 cursor-default">
                  <HelpCircle className="ml-1 h-4 w-4 text-zinc-500" />
                </TooltipTrigger>
                <TooltipContent className="w-80 p-2">
                  Старт потока 30 января
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <ul className="my-6 space-y-2">
            {plan.features.map(({ text, footnote, negative }) => (
              <li key={text} className="flex space-x-2">
                <div className="flex-shrink-0">
                  {negative ? (
                    <Minus className="h-6 w-6 text-gray-300" />
                  ) : (
                    <Check className="h-6 w-6 text-gray-500" />
                  )}
                </div>
                {footnote ? (
                  <div className="flex items-center space-x-1">
                    <p
                      className={cn("text-base text-gray-600", {
                        "text-gray-400": negative,
                      })}
                    >
                      {text}
                    </p>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger className="ml-1.5 cursor-default">
                        <HelpCircle className="h-4 w-4 text-zinc-500" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 p-2">
                        {footnote}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ) : (
                  <p
                    className={cn("text-left text-gray-600", {
                      "text-gray-400": negative,
                    })}
                  >
                    {text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200" />
        </TooltipProvider>
      </CardContent>
      <CardFooter className="px-0 py-2">
        <Link
          href={"/dashboard"}
          className={buttonVariants({
            className: "w-full",
            variant: "default",
          })}
        >
          {"Подробнее"}
          <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CoursePricingCard;