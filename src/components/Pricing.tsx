import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import TitleContainer from "./title-container";
import PricingCard from "./pricing-card";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "ВНЖ",
      tagline: "Короткое описание услуги...",
      price: "1200",
      services: [
        { id: 1, service: "бизнес", price: "1400" },
        { id: 2, service: "работа", price: "1200" },
        { id: 3, service: "воссоединение семьи", price: "1200" },
        { id: 4, service: "учеба", price: "1200" },
        { id: 5, service: "blue card", price: "1400" },
        { id: 6, service: "брак с поляком", price: "1200" },
        { id: 7, service: "конкубинат", price: "1400" },
        { id: 8, service: "международная защита", price: "1200" },
      ],
      servicesPlus: [
        { id: 1, service: "бизнес", price: "1750" },
        { id: 2, service: "работа", price: "1500" },
        { id: 3, service: "воссоединение семьи", price: "1500" },
        { id: 4, service: "учеба", price: "1500" },
        { id: 5, service: "blue card", price: "1750" },
        { id: 6, service: "брак с поляком", price: "1500" },
        { id: 7, service: "конкубинат", price: "1750" },
        { id: 8, service: "международная защита", price: "1500" },
      ],
    },
    {
      id: 2,
      title: "ПМЖ",
      tagline: "Короткое описание услуги...",
      price: "1200",
      services: [
        { id: 1, service: "карта поляка", price: "1200" },
        { id: 2, service: "польские корни", price: "1400" },
        { id: 3, service: "карта резидента ЕС", price: "1800" },
      ],
      servicesPlus: [
        { id: 1, service: "карта поляка", price: "1500" },
        { id: 2, service: "польские корни", price: "1700" },
        { id: 3, service: "карта резидента ЕС", price: "2000" },
      ],
    },
    {
      id: 3,
      title: "Гражданство",
      tagline: "Короткое описание услуги...",
      price: "2000",
      services: [{ id: 1, service: "Получение гражданства", price: "2000" }],
    },
    {
      id: 4,
      title: "Дополнительные услуги",
      tagline: "Короткое описание услуги...",
      price: "250",
      services: [
        { id: 1, service: "Ускорение", price: "1000" },
        { id: 2, service: "Апелляция", price: "700" },
        { id: 3, service: "Замена децизии", price: "400" },
        { id: 4, service: "Замена пластика", price: "400" },
        { id: 5, service: "Проверка документов перед подачей", price: "600" },
        { id: 6, service: "Консультация", price: "250" },
      ],
    },
  ];

  return (
    <section id="course-pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
            Тарифы на услуги
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            Выберете тариф под свои нужды.
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
