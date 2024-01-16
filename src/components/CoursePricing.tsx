import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
import { CoursePricingCard, TitleContainer } from ".";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Для себя",
      tagline:
        "Если Вы хотите легализовать себя и свою семью САМОСТОЯТЕЛЬНО с минимальными затратами и профессиональными знаниями.",
      quota: 1,
      price: 1530,
      features: [
        {
          text: "10 блоков",
          footnote:
            "В каждый блок входит обучающий материал на определенную тему (ВНЖ, ПМЖ, Трудоустройство и тд)",
        },
        {
          text: "Обратная связь",
          footnote: "Информация о обратной связи",
          negative: true,
        },
        {
          text: "Групповой чат PRO",
          footnote: "Информация о групповом чате",
          negative: true,
        },
        {
          text: "Групповой созвон еженедельно",
          negative: true,
        },
        {
          text: "Индивидуальный созвон еженедельно",
          negative: true,
        },
        {
          text: "Возможность выиграть приз",
          negative: true,
        },
        {
          text: "Стажировка в моей команде",
          negative: true,
        },
      ],
    },
    {
      id: 2,
      title: "Для работы",
      tagline:
        "Если Вы хотите начать работу или уже работаете в сфере легализации, хотите повысить свой уровень знаний и опыта, а также увеличить цену на свои услуги - этот курс для Вас!",
      quota: 1,
      price: 1700,
      features: [
        {
          text: "10 блоков",
          footnote:
            "В каждый блок входит обучающий материал на определенную тему (ВНЖ, ПМЖ, Трудоустройство и тд)",
        },
        {
          text: "Обратная связь",
          footnote: "Информация о обратной связи",
        },
        {
          text: "Групповой чат PRO",
          footnote: "Информация о групповом чате",
          negative: true,
        },
        {
          text: "Групповой созвон еженедельно",
        },
        {
          text: "Индивидуальный созвон еженедельно",
          negative: true,
        },
        {
          text: "Возможность выиграть приз",
        },
        {
          text: "Стажировка в моей команде",
          negative: true,
        },
      ],
    },
    {
      id: 3,
      title: "Для работы PRO",
      tagline:
        "Если Вы хотите начать работу или уже работаете в сфере легализации, хотите повысить свой уровень знаний и опыта, а также увеличить цену на свои услуги - этот курс для Вас!",
      quota: 1,
      price: 2295,
      features: [
        {
          text: "10 блоков",
          footnote:
            "В каждый блок входит обучающий материал на определенную тему (ВНЖ, ПМЖ, Трудоустройство и тд)",
        },
        {
          text: "Обратная связь",
          footnote: "Информация о обратной связи",
        },
        {
          text: "Групповой чат PRO",
          footnote: "Информация о групповом чате",
        },
        {
          text: "Групповой созвон еженедельно",
        },
        {
          text: "Индивидуальные созвоны еженедельно",
        },
        {
          text: "Возможность выиграть приз",
        },
        {
          text: "Стажировка в моей команде",
        },
      ],
    },
  ];

  return (
    <section id="course-pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Тарифы на курс
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-600 dark:text-white">
            Выберете тариф под свои нужды.
          </p>
        </TitleContainer>

        <div className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-3">
          <TooltipProvider>
            {plans.map((plan) => {
              return <CoursePricingCard plan={plan} key={plan.id} />;
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;
