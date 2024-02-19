import { FC } from "react";
import Title from "./grid-items/title";
import GridItem from "./grid-item";
import Social from "./grid-items/social";
import Offering from "./grid-items/offering";
import About from "./grid-items/about";
import MaxWidthWrapper from "./max-width-wrapper";
import Offerings from "./grid-items/offerings";
import Info from "./grid-items/info";
import { useTranslation } from "react-i18next";

import i18n from "i18next";

interface BentoProps {}

const Bento: FC<BentoProps> = () => {
  // const { t } = useTranslation();

  type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "3x3" | "4x3" | "4x4"; // First number is width, second is height
  type GridItemType =
    | "social"
    | "about"
    | "offering"
    | "info"
    | "title"
    | "offerings";
  type FeaturesItem = {
    id: number;
    title: string;
    value: string;
    description?: string;
    icon: string;
  };

  interface GridItemInterface {
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

  const GridItems: GridItemInterface[] = [
    {
      layout: "4x4",
      type: "title",
      title: i18n.t("bento.title"),
      // title:
      //   "Привет! 👋 Меня зовут Катя Матвеева, я - миграционный эксперт, и моя команда специализируется на",
      accentTitle: "ВНЖ, ПМЖ и гражданстве в Польше.",
      description:
        "Наша цель - обеспечить вам профессиональное сопровождение в подаче документов и консультации по всем вопросам, связанным с процессом. Доверьтесь нам, чтобы сделать ваш переезд максимально комфортным и успешным.",
    },
    {
      layout: "2x2",
      type: "social",
      title: "Instagram",
      icon: "instagram",
      username: "@matveeva__kate",
      description:
        "МИГРАЦИОННЫЙ ЭКСПЕРТ В 🇵🇱 Получила гражданство за 3 месяца и рассказываю в блоге, как это сделать.",
      color: "#FF0000",
      buttonTitle: "Подписаться",
      buttonLink: "https://www.instagram.com/matveeva__kate/",
      buttonSecondaryText: "5.5K",
    },
    {
      layout: "1x2",
      type: "social",
      title: "Telegram",
      icon: "telegram",
      username: "@kate520",
      buttonTitle: "Связаться",
      buttonLink: "https://t.me/kate520",
      color: "#229ED9",
    },
    {
      layout: "1x2",
      type: "social",
      title: "Номер телефона",
      icon: "phone",
      username: "+48 578 075 927",
      buttonTitle: "Позвонить",
      buttonLink: "https://github.com/batuhanbilginn",
      color: "#070707",
    },
    {
      layout: "2x4",
      type: "about",
      title: "Узнайте больше о нас",
      description: "",
      icon: "upRightArrow",
      color: "(var(--foreground))",
      image: "/images/kate-matveeva-nobg.png",
      link: "/",
      features: [
        {
          id: 1,
          title: "Опыта работы",
          value: "3+",
          icon: "calendar",
        },
        {
          id: 2,
          title: "Довольных клиентов",
          value: "1000+",
          icon: "check",
        },
        {
          id: 3,
          title: "Положительных решений",
          value: "99%",
          icon: "trophy",
        },
      ],
    },
    {
      layout: "2x2",
      type: "offerings",
      title: "Наши услуги",
      icon: "file",
      buttonTitle: "Посмотреть",
      buttonLink: "https://twitter.com/makrdev",
      color: "#2196F3",
      description: "Ознакомьтесь с ценами на наши услуги.",
    },
    {
      layout: "2x1",
      type: "info",
      title: "Часто задаваемые вопросы",
      icon: "question",
      color: "#dcdcdc",
      buttonLink: "https://github.com/batuhanbilginn/makr-ai",
      stars: 10,
    },
    {
      layout: "2x1",
      type: "info",
      title: "Отзывы о нас",
      icon: "star",
      stars: 19,
      color: "#FFD700",
      buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
    },
    {
      layout: "2x1",
      type: "offering",
      title: "Консультация",
      icon: "messages",
      promotion: "kate520",
      color: "#2196F3",
      oldPrice: "300zł",
      price: "250zł",
      buttonLink: "https://t.me/kate520",
    },
    {
      layout: "2x2",
      type: "offerings",
      title: "Авторский курс по легализации",
      username: "@matveeva__kate",
      description:
        "Если Вы хотите начать работу или уже работаете в сфере легализации, хотите повысить свой уровень знаний и опыта, а также увеличить цену на свои услуги - этот курс для Вас!",
      icon: "course",
      buttonTitle: "Регистрация",
      color: "#A569BD",
      buttonSecondaryText: "-%10",
      buttonLink: "https://www.instagram.com/matveeva__kate/",
    },
    {
      layout: "2x1",
      type: "offering",
      title: "Оформление ВНЖ",
      icon: "card",
      color: "#228B22",
      promotion: "kate520",
      oldPrice: "1400zł",
      price: "1200zł",
      buttonLink: "https://t.me/kate520",
    },
  ];

  const PRODUCT_CATEGORIES = [
    {
      label: "Services",
      value: "services" as const,
      featured: [
        {
          name: "Editor picks",
          href: `/products?category=services`,
          imageSrc: "/nav/services/mixed.jpg",
        },
        {
          name: "New Arrivals",
          href: "/products?category=services&sort=desc",
          imageSrc: "/nav/services/blue.jpg",
        },
        {
          name: "Bestsellers",
          href: "/products?category=services",
          imageSrc: "/nav/services/purple.jpg",
        },
      ],
    },
    {
      label: "Offers",
      value: "offers" as const,
      featured: [
        {
          name: "Favorite Icon Picks",
          href: `/products?category=offers`,
          imageSrc: "/nav/offers/picks.jpg",
        },
        {
          name: "New Arrivals",
          href: "/products?category=offers&sort=desc",
          imageSrc: "/nav/offers/new.jpg",
        },
        {
          name: "Bestselling offers",
          href: "/products?category=offers",
          imageSrc: "/nav/offers/bestsellers.jpg",
        },
      ],
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
