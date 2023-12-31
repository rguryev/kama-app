import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
export const workflowStages = [
  {
    id: "1",
    title: "Консультация",
    description:
      "Проводим консультацию с анализом вашей ситуации и документов. Предлагаю все возможные варианты получения необходимых документов в кратчайшие сроки.",
    Icon: ArrowDownToLine,
  },
  {
    id: "2",
    title: "Заключаем договор",
    description:
      "Подписываем договор и запускаем процесс вашей легализации в Польше. Записываю вас в Ужонд, заполняем анкеты, собираем все необходимые документы.",
    Icon: CheckCircle,
  },
  {
    id: "3",
    title: "Поддержка",
    description:
      "Сопровождаю вас в Ужонд, помогаю с последующей корреспонденцией. После 3-4 месяцев ожидания пишу письма на ускорение вашего дела. Я всегда нахожусь на связи и если нужна какая-то помощь или информация , то рада помочь.",
    Icon: Leaf,
  },
];
const perks = [
  {
    id: "consult",
    title: "Консультация",
    description:
      "Проводим консультацию с анализом вашей ситуации и документов. Предлагаю все возможные варианты получения необходимых документов в кратчайшие сроки.",
    icon: ArrowDownToLine,
  },
  {
    id: "accept",
    title: "Заключаем договор",
    description:
      "Подписываем договор и запускаем процесс вашей легализации в Польше. Записываю вас в Ужонд, заполняем анкеты, собираем все необходимые документы.",
    icon: CheckCircle,
  },
  {
    id: "support",
    title: "Поддержка",
    description:
      "Сопровождаю вас в Ужонд, помогаю с последующей корреспонденцией. После 3-4 месяцев ожидания пишу письма на ускорение вашего дела. Я всегда нахожусь на связи и если нужна какая-то помощь или информация , то рада помочь.",
    icon: Leaf,
  },
];

import React from "react";
import Container from "./Container";
import { TitleContainer } from ".";

const Workflow = () => {
  return (
    <section id="solutions">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Как я работаю?
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-600 dark:text-white">
            Этапы нашего сотрудничества
          </p>
        </TitleContainer>

        <div className="mb-36 flex flex-col gap-8">
          {workflowStages.map((item) => (
            <Container
              key={item.id}
              className="mx-auto flex w-full p-2 text-left align-middle sm:w-[40rem]"
            >
              <div className="flex items-center justify-center">
                <div className="m-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 sm:m-5 sm:h-16 sm:w-16 dark:bg-slate-600">
                  {/* {<item.Icon className="h-1/3 w-1/3" />} */}
                  <span className="text-xl text-slate-400 sm:text-4xl dark:text-white">
                    {item.id}
                  </span>
                </div>
              </div>

              <div className="my-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Container>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Workflow;
