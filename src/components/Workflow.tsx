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

const Workflow = () => {
  return (
    <section id="solutions">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Как я работаю?
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-600">
            Этапы нашего сотрудничества
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {workflowStages.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex w-full rounded-3xl border-2 border-slate-300 bg-slate-50 p-5 text-left align-middle sm:w-[40rem]"
            >
              <div className="flex items-center justify-center">
                <div className="m-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                  {/* {<item.Icon className="h-1/3 w-1/3" />} */}
                  <span className="text-4xl text-slate-400">{item.id}</span>
                </div>
              </div>

              <div className="my-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Workflow;
