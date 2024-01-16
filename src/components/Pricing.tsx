import React from "react";
import { MaxWidthWrapper, PricingCard, TitleContainer } from ".";

const Pricing = () => {
  const pricingItems = [
    {
      id: 1,
      title: "ВНЖ",
      tagline: "Короткое описание услуги...",
      price: "1530",
    },
  ];

  return (
    <section id="course-pricing">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer className="mx-auto mb-2 sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Тарифы на услуги
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-600 dark:text-white">
            Выберете тариф под свои нужды.
          </p>
        </TitleContainer>
        <div className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-3">
          {pricingItems.map((plan) => {
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
