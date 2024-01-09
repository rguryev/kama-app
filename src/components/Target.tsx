import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Хочу сам",
    Icon: ArrowDownToLine,
    description:
      "Если Вы хотите легализовать себя и свою семью самостоятельно с минимальными затратами и профессиональными знаниями",
  },
  {
    name: "Хочу гражданство",
    Icon: CheckCircle,
    description:
      "Если Вы хотите пройти путь от визы до получения польского гражданства - курс будет пошаговой инструкцией!",
  },
  {
    name: "Хочу знаний и опыта!",
    Icon: Leaf,
    description:
      "Если Вы хотите начать работу или уже работаете в сфере легализации, хотите повысить свой уровень знаний и опыта, а так же увеличить цену на свои услуги - этот курс для Вас!",
  },
];

import React from "react";

const Target = () => {
  return (
    <section id="target">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <div className="mx-auto mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Для кого этот курс?
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="flex justify-center md:flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="h-1/3 w-1/3" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Target;
