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
import { TitleContainer } from ".";

const Pricing = () => {
  const user = 1;

  const pricingItems = [
    {
      plan: "Для себя",
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
      plan: "Для работы",
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
      plan: "Для работы PRO",
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
    <section id="pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Тарифы
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-600 dark:text-white">
            Выберете тариф под свои нужды.
          </p>
        </TitleContainer>

        <div className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-3">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, price, features }) => {
              return (
                <div
                  key={plan}
                  className={cn(
                    "relative rounded-2xl bg-white shadow-lg transition-transform hover:scale-105 dark:bg-black",
                    {
                      "border-2 border-blue-600 shadow-blue-200":
                        plan === "Pro",
                      "border border-gray-200 dark:border-gray-800":
                        plan !== "Pro",
                    },
                  )}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      Запишись сейчас
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-display my-3 text-center text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="mx-3 h-32 max-w-prose text-justify text-gray-500">
                      {tagline}
                    </p>
                    <p className="font-display my-3 text-4xl font-semibold">
                      {price} zł
                    </p>
                    <p className="text-gray-500">Единоразово</p>
                  </div>

                  <div className="flex h-14 items-center justify-center border-b border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center space-x-1">
                      <p>
                        Продолжительность курса {quota.toLocaleString()} месяц
                      </p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="ml-1.5 cursor-default">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          Старт потока 30 января
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-6 space-y-2 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-2">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
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
                  <div className="p-5">
                    {plan === "Free" ? (
                      <Link
                        href={user ? "/dashboard" : "/sign-in"}
                        className={buttonVariants({
                          className: "w-full",
                          variant: "secondary",
                        })}
                      >
                        {user ? "Подробнее" : "Sign up"}
                        <ArrowRight className="ml-1.5 h-5 w-5" />
                      </Link>
                    ) : user ? (
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {user ? "Подробнее" : "Sign up"}
                        <ArrowRight className="ml-1.5 h-5 w-5" />
                      </Link>
                    ) : (
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {user ? "Подробнее" : "Sign up"}
                        <ArrowRight className="ml-1.5 h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;
