import MaxWidthWrapper from "@/components/max-width-wrapper";

import { TooltipProvider } from "@/components/ui/tooltip";
import TitleContainer from "./title-container";
import CoursePricingCard from "./course-pricing-card";
import { useTranslations } from "next-intl";

const CoursePricing = () => {
  const t = useTranslations("CoursePricing");
  const plans = [
    {
      id: 1,
      title: t("plan_1_title"),
      tagline: t("plan_1_tagline"),
      quota: 1,
      price: t("plan_1_price"),
      features: [
        {
          text: t("feature_1_text"),
          footnote: t("feature_1_footnote"),
        },
        {
          text: t("feature_2_text"),
          footnote: t("feature_2_footnote"),
          negative: true,
        },
        {
          text: t("feature_3_text"),
          footnote: t("feature_3_footnote"),
          negative: true,
        },
        {
          text: t("feature_4_text"),
          negative: true,
        },
        {
          text: t("feature_5_text"),
          negative: true,
        },
        {
          text: t("feature_6_text"),
          negative: true,
        },
        {
          text: t("feature_7_text"),
          negative: true,
        },
      ],
      blocks: [
        {
          title: t("block_1_title"),
          description: t("block_1_description"),
        },
        {
          title: t("block_2_title"),
          description: t("block_2_description"),
        },
        {
          title: t("block_3_title"),
          description: t("block_3_description"),
        },
        {
          title: t("block_4_title"),
          description: t("block_4_description"),
        },
        {
          title: t("block_5_title"),
          description: t("block_5_description"),
        },
        {
          title: t("block_6_title"),
          description: t("block_6_description"),
        },
      ],
    },
    {
      id: 2,
      title: t("plan_2_title"),
      tagline: t("plan_2_tagline"),
      quota: 1,
      price: t("plan_2_price"),
      features: [
        {
          text: t("feature_1_text"),
          footnote: t("feature_1_footnote"),
        },
        {
          text: t("feature_2_text"),
          footnote: t("feature_2_footnote"),
        },
        {
          text: t("feature_3_text"),
          footnote: t("feature_3_footnote"),
          negative: true,
        },
        {
          text: t("feature_4_text"),
        },
        {
          text: t("feature_5_text"),
          negative: true,
        },
        {
          text: t("feature_6_text"),
        },
        {
          text: t("feature_7_text"),
          negative: true,
        },
      ],
      blocks: [
        {
          title: t("block_1_title"),
          description: t("block_1_description"),
        },
        {
          title: t("block_2_title"),
          description: t("block_2_description"),
        },
        {
          title: t("block_3_title"),
          description: t("block_3_description"),
        },
        {
          title: t("block_4_title"),
          description: t("block_4_description"),
        },
        {
          title: t("block_5_title"),
          description: t("block_5_description"),
        },
        {
          title: t("block_6_title"),
          description: t("block_6_description"),
        },
        {
          title: t("block_7_title"),
          description: t("block_7_description"),
        },
        {
          title: t("block_8_title"),
          description: t("block_8_description"),
        },
        {
          title: t("block_9_title"),
          description: t("block_9_description"),
        },
        {
          title: t("block_10_title"),
          description: t("block_10_description"),
        },
      ],
    },
    {
      id: 3,
      title: t("plan_3_title"),
      tagline: t("plan_3_tagline"),
      quota: 1,
      price: t("plan_3_price"),
      features: [
        {
          text: t("feature_1_text"),
          footnote: t("feature_1_footnote"),
        },
        {
          text: t("feature_2_text"),
          footnote: t("feature_2_footnote"),
        },
        {
          text: t("feature_3_text"),
          footnote: t("feature_3_footnote"),
        },
        {
          text: t("feature_4_text"),
        },
        {
          text: t("feature_5_text"),
        },
        {
          text: t("feature_6_text"),
        },
        {
          text: t("feature_7_text"),
        },
      ],
      blocks: [
        {
          title: t("block_1_title"),
          description: t("block_1_description"),
        },
        {
          title: t("block_2_title"),
          description: t("block_2_description"),
        },
        {
          title: t("block_3_title"),
          description: t("block_3_description"),
        },
        {
          title: t("block_4_title"),
          description: t("block_4_description"),
        },
        {
          title: t("block_5_title"),
          description: t("block_5_description"),
        },
        {
          title: t("block_6_title"),
          description: t("block_6_description"),
        },
        {
          title: t("block_7_title"),
          description: t("block_7_description"),
        },
        {
          title: t("block_8_title"),
          description: t("block_8_description"),
        },
        {
          title: t("block_9_title"),
          description: t("block_9_description"),
        },
        {
          title: t("block_10_title"),
          description: t("block_10_description"),
        },
      ],
    },
  ];

  return (
    <section id="course-pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-foreground">
            {t("description")}
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

export default CoursePricing;
