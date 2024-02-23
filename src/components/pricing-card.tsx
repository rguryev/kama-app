import { cn } from "@/lib/utils";
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
    <Card
      key={plan.id}
      className={cn(
        "relative grid grid-cols-1 gap-2 rounded-3xl bg-card p-5 pt-10 drop-shadow-xl sm:p-2 ",
        className,
      )}
      {...props}
    >
      <CardHeader className="p-2">
        <CardTitle className="font-display mb-3 mt-5 text-left text-2xl font-semibold">
          {plan.title}
        </CardTitle>
        <CardDescription className="h-8 text-left text-base text-foreground">
          {plan.tagline}
        </CardDescription>
        <p className="font-display pb-4 pt-3 text-left text-4xl font-semibold sm:pt-1">
          От {plan.price} zł
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {points.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[15px_1fr] text-left last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-gray-800" />
              <div className="space-y-1">
                <p className="text-base font-medium leading-none">
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
      <CardFooter className="px-0 py-2">
        {/* <CoursePricingDialog {...plan} /> */}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
