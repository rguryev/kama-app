import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import TitleContainer from "./title-container";
import PricingCard from "./pricing-card";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("Pricing");
  const plans = [
    {
      id: 1,
      title: t("plan_1_title"),
      tagline: t("plan_1_tagline"),
      price: t("plan_1_price"),
      services: [
        {
          id: 1,
          service: t("plan_1_service_1_title"),
          price: t("plan_1_service_1_price"),
        },
        {
          id: 2,
          service: t("plan_1_service_2_title"),
          price: t("plan_1_service_2_price"),
        },
        {
          id: 3,
          service: t("plan_1_service_3_title"),
          price: t("plan_1_service_3_price"),
        },
        {
          id: 4,
          service: t("plan_1_service_4_title"),
          price: t("plan_1_service_4_price"),
        },
        {
          id: 5,
          service: t("plan_1_service_5_title"),
          price: t("plan_1_service_5_price"),
        },
        {
          id: 6,
          service: t("plan_1_service_6_title"),
          price: t("plan_1_service_6_price"),
        },
        {
          id: 7,
          service: t("plan_1_service_7_title"),
          price: t("plan_1_service_7_price"),
        },
        {
          id: 8,
          service: t("plan_1_service_8_title"),
          price: t("plan_1_service_8_price"),
        },
      ],
      servicesPlus: [
        {
          id: 1,
          service: t("plan_1_service_plus_1_title"),
          price: t("plan_1_service_plus_1_price"),
        },
        {
          id: 2,
          service: t("plan_1_service_plus_2_title"),
          price: t("plan_1_service_plus_2_price"),
        },
        {
          id: 3,
          service: t("plan_1_service_plus_3_title"),
          price: t("plan_1_service_plus_3_price"),
        },
        {
          id: 4,
          service: t("plan_1_service_plus_4_title"),
          price: t("plan_1_service_plus_4_price"),
        },
        {
          id: 5,
          service: t("plan_1_service_plus_5_title"),
          price: t("plan_1_service_plus_5_price"),
        },
        {
          id: 6,
          service: t("plan_1_service_plus_6_title"),
          price: t("plan_1_service_plus_6_price"),
        },
        {
          id: 7,
          service: t("plan_1_service_plus_7_title"),
          price: t("plan_1_service_plus_7_price"),
        },
        {
          id: 8,
          service: t("plan_1_service_plus_8_title"),
          price: t("plan_1_service_plus_8_price"),
        },
      ],
    },
    {
      id: 2,
      title: t("plan_2_title"),
      tagline: t("plan_2_tagline"),
      price: t("plan_2_price"),
      services: [
        {
          id: 1,
          service: t("plan_2_service_1_title"),
          price: t("plan_2_service_1_price"),
        },
        {
          id: 2,
          service: t("plan_2_service_2_title"),
          price: t("plan_2_service_2_price"),
        },
        {
          id: 3,
          service: t("plan_2_service_3_title"),
          price: t("plan_2_service_3_price"),
        },
      ],
      servicesPlus: [
        {
          id: 1,
          service: t("plan_2_service_plus_1_title"),
          price: t("plan_2_service_plus_1_price"),
        },
        {
          id: 2,
          service: t("plan_2_service_plus_2_title"),
          price: t("plan_2_service_plus_2_price"),
        },
        {
          id: 3,
          service: t("plan_2_service_plus_3_title"),
          price: t("plan_2_service_plus_3_price"),
        },
      ],
    },
    {
      id: 3,
      title: t("plan_3_title"),
      tagline: t("plan_3_tagline"),
      price: t("plan_3_price"),
      services: [
        {
          id: 1,
          service: t("plan_3_service_1_title"),
          price: t("plan_3_service_1_price"),
        },
      ],
    },
    {
      id: 4,
      title: t("plan_4_title"),
      tagline: t("plan_4_tagline"),
      price: t("plan_4_price"),
      services: [
        {
          id: 1,
          service: t("plan_4_service_1_title"),
          price: t("plan_4_service_1_price"),
        },
        {
          id: 2,
          service: t("plan_4_service_2_title"),
          price: t("plan_4_service_2_price"),
        },
        {
          id: 3,
          service: t("plan_4_service_3_title"),
          price: t("plan_4_service_3_price"),
        },
        {
          id: 4,
          service: t("plan_4_service_4_title"),
          price: t("plan_4_service_4_price"),
        },
        {
          id: 5,
          service: t("plan_4_service_5_title"),
          price: t("plan_4_service_5_price"),
        },
        {
          id: 6,
          service: t("plan_4_service_6_title"),
          price: t("plan_4_service_6_price"),
        },
      ],
    },
  ];

  return (
    <section id="course-pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            {t("description")}
          </p>
        </TitleContainer>
        <div className="grid grid-cols-1 gap-5 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan) => {
            return <PricingCard plan={plan} key={plan.id} />;
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;

{
  /* <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> */
}
