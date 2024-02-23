import React from "react";
import Badge from "./ui/badge";
import { ArrowDownToLine, CheckCircle, Leaf, TargetIcon } from "lucide-react";
import { LucideIcon } from "lucide-react";
import TitleContainer from "./title-container";
import CompactWrap from "./compact-wrap";
import MaxWidthWrapper from "./max-width-wrapper";
import SectionContainer from "./section-container";

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

export interface IPageInfo {
  badgeIcon?: LucideIcon;
  badgeText: string;
}
const pageInfo: IPageInfo = {
  badgeIcon: TargetIcon,
  badgeText: "Целевая аудитория",
};

const Target = () => {
  return (
    <section id="target">
      <MaxWidthWrapper className="mb-8 mt-24 rounded-xxl bg-card text-center drop-shadow-xl">
        <SectionContainer>
          <TitleContainer className="text-foreground">
            <Badge pageInfo={pageInfo} />
            <h1>Для кого этот курс?</h1>
          </TitleContainer>

          <div className="mx-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="mx-auto justify-around text-center sm:w-80 md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <CompactWrap className="text-f h-16 w-16 justify-center rounded-full bg-card ">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </CompactWrap>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-4">
                  <h3 className="text-xl font-medium">{perk.name}</h3>
                  <p className="mt-3 text-left text-base text-muted-foreground">
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

export default Target;
