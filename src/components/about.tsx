import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Author from "../../public/images/kate-matveeva.jpeg";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
    <section id="about" className="border-1 border-gray-200">
      <MaxWidthWrapper>
        <div className="relative isolate">
          {/* decorative element */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="flex flex-col justify-center lg:flex-row lg:justify-around  dark:text-gray-100">
            <div className="h-136 mt-8 flex items-center justify-center rounded-xl p-6 lg:mt-0">
              <Image
                src={Author}
                alt="author preview"
                width={500}
                height={600}
                quality={100}
                className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-8"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-sm sm:items-start lg:max-w-md lg:text-left xl:max-w-lg">
              <h1 className="text-left text-4xl font-bold">{t("title")}</h1>
              <p className="max-w-prose text-justify text-base text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
