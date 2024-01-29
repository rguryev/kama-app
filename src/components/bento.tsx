import { FC } from "react";
import Title from "./grid-items/title";
import GridItem from "./grid-item";
import Social from "./grid-items/social";
import Offering from "./grid-items/offering";
import { siteConfig } from "@/config/site-config";
import About from "./grid-items/about";
import MaxWidthWrapper from "./max-width-wrapper";
import Offerings from "./grid-items/offerings";
import Info from "./grid-items/info";

interface BentoProps {}

const Bento: FC<BentoProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="relative flex w-full flex-1 flex-col items-center">
        {/* Pattern */}
        <div className="bg-light-pattern dark:bg-dark-pattern bg-verySmall absolute inset-0 z-0" />
        {/* Overlay */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" /> */}
        <div className="gap:6 container relative z-20 flex h-full w-full flex-col px-0 xl:flex-row xl:gap-10">
          <div className="grid w-full auto-rows-[5rem] grid-cols-6 gap-6 py-4 xl:gap-4 xl:overflow-y-auto xl:py-8">
            {siteConfig.items.map((item, index) => (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <Social item={item} />
                ) : item.type === "offering" ? (
                  <Offering item={item} />
                ) : item.type === "info" ? (
                  <Info item={item} />
                ) : item.type === "about" ? (
                  <About item={item} />
                ) : item.type === "offerings" ? (
                  <Offerings item={item} />
                ) : item.type === "title" ? (
                  <Title item={item} />
                ) : (
                  <div>Need to create new component type</div>
                )}
              </GridItem>
            ))}
          </div>
          {/* Footer for Mobile */}
          {/* <div className="flex pb-6 xl:hidden">
          <Footer />
        </div> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Bento;
