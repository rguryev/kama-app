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
import {
  Block,
  CoursePricingCardProps,
} from "../_course-pricing/course-pricing-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PricingDialogProps extends CoursePricingCardProps {
  blocks: Block[];
}

const PricingDialog: FC<PricingDialogProps> = ({ title, blocks }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"full"} variant="outline">
          Подробнее
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-max max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>Тариф: {title}</DialogTitle>
          <DialogDescription>Программа курса: </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[450px] w-auto">
          <div className="flex flex-col gap-4 py-4 sm:grid">
            <ul>
              {blocks.map((obj, index) => {
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
          <Button type="submit">Записаться</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
