import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    id: "1",
    Icon: ArrowDownToLine,
    description: "Хотите переехать в Польшу, но не знаете с чего начать",
  },
  {
    id: "2",
    Icon: CheckCircle,
    description:
      "Не знаете на какую Карту Побыта можно податься и какие документы собрать",
  },
  {
    id: "3",
    Icon: Leaf,
    description:
      "Хотите остаться в Польше на долгий срок и получить гражданство",
  },
  {
    id: "4",
    Icon: Leaf,
    description:
      "Не хотите тратить свое время и нервы на самостоятельный сбор документов",
  },
];

import React from "react";

const Solutions = () => {
  return (
    <MaxWidthWrapper className="mb-8 mt-24 text-center">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Какие проблемы я помогу решить?
        </h1>
        <p className="mt-6 max-w-prose text-lg text-gray-600">
          Это самые распространенные сложности, с которыми сталкиваются мои
          клиенты
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
        {perks.map((perk) => (
          <div
            key={perk.id}
            className="py-10 text-center md:flex md:items-start md:text-left lg:block lg:text-center"
          >
            <div className="flex justify-center md:flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                {<perk.Icon className="h-1/3 w-1/3" />}
              </div>
            </div>

            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <p className="mt-3 text-base text-muted-foreground">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Solutions;
