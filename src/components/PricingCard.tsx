import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const points = [
  {
    title: "Бизнес",
    description: "Коротко о пункте Бизнес",
  },
  {
    title: "Работа",
    description: "Коротко о пункте Работа",
  },
  {
    title: "Учеба",
    description: "Коротко о пункте Учеба",
  },
  {
    title: "Воссоединение семьи",
    description: "Коротко о пункте Воссоединение семьи",
  },
];

interface PricingCardProps extends React.ComponentProps<typeof Card> {
  plan: {
    id: number;
    title: string;
    tagline: string;
    price: string;
  };
  className?: string;
}

const PricingCard: FC<PricingCardProps> = ({ plan, className, ...props }) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-md">
              От <span className="text-2xl">{plan.price}</span> zł
            </p>
          </div>
        </div>
        <div>
          {points.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-1 text-left last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-slate-800" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
