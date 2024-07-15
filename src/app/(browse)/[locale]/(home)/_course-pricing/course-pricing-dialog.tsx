import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FC } from "react";
import { CoursePricingCardProps } from "./course-pricing-card";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";

const CoursePricingDialog: FC<CoursePricingCardProps> = ({ plan }) => {
  const t = useTranslations("CoursePricingDialog");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"full"} variant="outline">
          {t("details")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-max max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>{t("rate_title", { plan: plan.title })}</DialogTitle>
          <DialogDescription>{t("rate_description")}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[450px] w-auto">
          <div className="flex flex-col gap-4 py-4 sm:grid">
            <ul>
              {plan.blocks.map((obj, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col border-b-2 p-2 sm:grid sm:grid-cols-4"
                  >
                    <h3 className="gird mr-8 text-base font-medium">
                      {obj.title}
                    </h3>
                    <p className="col-span-3 text-base font-light">
                      {obj.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit">{t("submit")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CoursePricingDialog;
