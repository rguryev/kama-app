import React, { FC, ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import GridItem from "./grid-items/grid-item";
import Social from "./grid-items/social";
import Offering from "./grid-items/offering";
import Info from "./grid-items/info";
import About from "./grid-items/about";
import Offerings from "./grid-items/offerings";
import Title from "./grid-items/title";
import MaxWidthWrapper from "./max-width-wrapper";

export type GridItemLayout =
  | "1x2"
  | "2x1"
  | "2x2"
  | "2x4"
  | "3x3"
  | "4x3"
  | "4x4"; // First number is width, second is height
export type GridItemType =
  | "social"
  | "about"
  | "offering"
  | "info"
  | "title"
  | "offerings";
export type FeaturesItem = {
  id: number;
  title: string;
  value: string;
  description?: string;
  icon: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  titleStart?: string;
  accentTitle?: string;
  titleEnd?: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  link?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  features?: FeaturesItem[];
  image?: string;
  location?: string;
  locationLink?: string;
  email?: string;
}

const Bento = async () => {
  const { t } = await useTranslation(lng);
  const GridItems: GridItemInterface[] = [
    {
      layout: "4x4",
      type: "title",
      title: t("homepage.bento.title.title"),
      accentTitle: t("homepage.bento.title.accent_title"),
      description: t("homepage.bento.title.description"),
      buttonTitle: t("homepage.bento.title.button"),
    },
    {
      layout: "2x2",
      type: "social",
      title: "Instagram",
      icon: "instagram",
      username: "@matveeva__kate",
      description: t("homepage.bento.social.description"),
      color: "#FF0000",
      buttonTitle: t("homepage.bento.social.button"),
      buttonLink: "https://www.instagram.com/matveeva__kate/",
      buttonSecondaryText: "5.5K",
    },
    {
      layout: "1x2",
      type: "social",
      title: "Telegram",
      icon: "telegram",
      username: "@kate520",
      buttonTitle: t("homepage.bento.social_mini.button"),
      buttonLink: "https://t.me/kate520",
      color: "#229ED9",
    },
    {
      layout: "1x2",
      type: "social",
      title: t("homepage.bento.social_phone.title"),
      icon: "phone",
      username: "+48 578 075 927",
      buttonTitle: t("homepage.bento.social_phone.button"),
      buttonLink: "/",
      color: "#070707",
    },
    {
      layout: "2x4",
      type: "about",
      title: t("homepage.bento.about.title"),
      description: "",
      icon: "upRightArrow",
      color: "(var(--foreground))",
      image: "/images/kate-matveeva-nobg.png",
      link: "/",
      features: [
        {
          id: 1,
          title: t("homepage.bento.about.expirience"),
          value: "3+",
          icon: "calendar",
        },
        {
          id: 2,
          title: t("homepage.bento.about.clients"),
          value: "1000+",
          icon: "check",
        },
        {
          id: 3,
          title: t("homepage.bento.about.decisions"),
          value: "99%",
          icon: "trophy",
        },
      ],
    },
    {
      layout: "2x2",
      type: "offerings",
      title: t("homepage.bento.offerings.title"),
      icon: "file",
      buttonTitle: t("homepage.bento.offerings.button"),
      buttonLink: "/",
      color: "#2196F3",
      description: t("homepage.bento.offerings.description"),
    },
    {
      layout: "2x1",
      type: "info",
      title: t("homepage.bento.info.title"),
      icon: "question",
      color: "#dcdcdc",
      buttonLink: "/",
      stars: 10,
    },
    {
      layout: "2x1",
      type: "info",
      title: t("homepage.bento.info.reviews"),
      icon: "star",
      stars: 19,
      color: "#FFD700",
      buttonLink: "/",
    },
    {
      layout: "2x1",
      type: "offering",
      title: t("homepage.bento.offering_consult.title"),
      icon: "messages",
      description: t("homepage.bento.offering.promo"),
      promotion: "kate520",
      color: "#2196F3",
      oldPrice: "300zł",
      price: "250zł",
      buttonLink: "https://t.me/kate520",
    },
    {
      layout: "2x2",
      type: "offerings",
      title: t("homepage.bento.offerings_course.title"),
      username: "@matveeva__kate",
      description: t("homepage.bento.offerings_course.description"),
      icon: "course",
      buttonTitle: t("homepage.bento.offerings_course.button"),
      color: "#A569BD",
      buttonSecondaryText: "-%10",
      buttonLink: "https://www.instagram.com/matveeva__kate/",
    },
    {
      layout: "2x1",
      type: "offering",
      title: t("homepage.bento.offering_permission.title"),
      icon: "card",
      description: t("homepage.bento.offering.promo"),
      color: "#228B22",
      promotion: "kate520",
      oldPrice: "1400zł",
      price: "1200zł",
      buttonLink: "https://t.me/kate520",
    },
  ];

  const siteConfig = {
    // layout: "2x2",
    // type: "expert",
    // expert: "Kate Matveeva",
    // title: "Эксперт по легализации",
    // description: "Помощь в оформлении ВНЖ, ПМЖ и гражданства Республики Польша",
    // location: "Wroclaw, Poland",
    // locationLink: "https://maps.app.goo.gl/Z5exq7TFMxpN8YD19",
    // email: "kama.documents@gmail.com",
    items: GridItems,
  } as const;

  return (
    <MaxWidthWrapper>
      <div className="relative flex w-full flex-1 flex-col items-center">
        {/* Pattern */}
        <div className="bg-light-pattern dark:bg-dark-pattern bg-verySmall absolute inset-0 z-0" />
        {/* Overlay */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" /> */}
        <div className="gap:6 container relative z-20 flex h-full w-full flex-col px-0 xl:flex-row xl:gap-10">
          <div className="grid w-full auto-rows-[5rem] grid-cols-6 gap-2 py-4 sm:gap-6 xl:gap-3 xl:overflow-y-auto xl:py-8">
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
const Skeleton = () => (
  <div className="relative flex h-[50rem] w-full items-center justify-center bg-background bg-dot-black/[0.2] dark:bg-background dark:bg-dot-white/[0.2]">
    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
  </div>
);

export default Bento;
