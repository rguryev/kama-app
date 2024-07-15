import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import React from "react";
import MaxWidthWrapper from "@/wrappers/max-width-wrapper";
import TitleContainer from "@/wrappers/title-container";
import Container from "@/wrappers/container";
import CompactWrap from "@/wrappers/compact-wrap";
import { useTranslations } from "next-intl";

const Workflow = () => {
  const t = useTranslations("Workflow");

  const workflowStages = [
    {
      id: "1",
      title: t("step_1_title"),
      description: t("step_1_description"),
      Icon: ArrowDownToLine,
    },
    {
      id: "2",
      title: t("step_2_title"),
      description: t("step_2_description"),
      Icon: CheckCircle,
    },
    {
      id: "3",
      title: t("step_3_title"),
      description: t("step_3_description"),
      Icon: Leaf,
    },
  ];

  return (
    <section id="solutions">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer>
          <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            {t("description")}
          </p>
        </TitleContainer>

        <div className="mb-36 flex flex-col gap-8">
          {workflowStages.map((item) => (
            <Container
              key={item.id}
              className="mx-auto flex w-full flex-col bg-card p-2 text-left align-middle drop-shadow-xl sm:w-[40rem] sm:flex-row"
            >
              <div className="flex items-center justify-center">
                <CompactWrap className="m-2 flex h-12 w-12 items-center justify-center rounded-full bg-card text-gray-800 sm:m-5 sm:h-16 sm:w-16">
                  <span className="text-xl text-gray-600 sm:text-4xl dark:text-white">
                    {item.id}
                  </span>
                </CompactWrap>
              </div>

              <div className="my-2 mt-0 sm:mt-6">
                <h3 className="text-center text-lg font-semibold sm:text-left">
                  {item.title}
                </h3>
                <p className="my-2 text-base text-muted-foreground">
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
