import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";

// const Hero = async ({ params: { lng } }: any) => {
export default async function Hero() {
  const { t } = await useTranslation(lng);
  return (
    <section id="hero">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between pb-10 pt-60 text-left sm:flex-row sm:pt-72">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {t("homepage.hero.tagline_top")} <br />
            <span className="text-gradient dark:text-gradient-dark">
              {t("homepage.hero.tagline_middle")}{" "}
            </span>{" "}
            <br />
            {t("homepage.hero.tagline_bottom")}
          </h1>
          <div className="flex max-w-80 items-end justify-end pt-6 sm:pt-0">
            <p className="text-xl font-semibold">
              {t("homepage.hero.description")}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

// export default Hero;
