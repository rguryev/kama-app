import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useTranslation } from "@/app/i18n";

// const Hero = async ({ params: { lng } }: any) => {
export default async function Hero({ lng }: any) {
  const { t } = await useTranslation(lng);
  return (
    <section id="hero">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between pb-1 pt-16 text-left">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {t("tagline_top")} <br />
            <span className="text-gradient dark:text-gradient-dark">
              {t("tagline_middle")}{" "}
            </span>
            {t("tagline_bottom")}
          </h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

// export default Hero;
