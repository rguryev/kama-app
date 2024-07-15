import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import React from "react";
import TitleContainer from "@/wrappers/title-container";
import MaxWidthWrapper from "@/wrappers/max-width-wrapper";
import SectionContainer from "@/wrappers/section-container";
import { useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations("Solutions");
  const perks = [
    {
      id: "1",
      Icon: ArrowDownToLine,
      description: t("problem_1"),
    },
    {
      id: "2",
      Icon: CheckCircle,
      description: t("problem_2"),
    },
    {
      id: "3",
      Icon: Leaf,
      description: t("problem_3"),
    },
    {
      id: "4",
      Icon: Leaf,
      description: t("problem_4"),
    },
  ];
  return (
    <section id="solutions">
      <MaxWidthWrapper className="mb-8 mt-24 rounded-xxl bg-card text-center">
        <SectionContainer>
          <TitleContainer>
            <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
              {t("description")}
            </p>
          </TitleContainer>

          <div className="mx-2 grid grid-cols-1 gap-4 sm:mx-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="py-4 text-left sm:py-10 sm:text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-compact ">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>

                <div className="mt-0 flex justify-center md:ml-4 md:mt-0 lg:ml-0 lg:mt-2">
                  <p className="mt-3 w-80 text-base text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </MaxWidthWrapper>
    </section>
  );
};

export default Solutions;
