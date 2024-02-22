"use client";

import React, { FC } from "react";
import Image from "next/image";
import TitleContainer from "../title-container";
import MaxWidthWrapper from "../max-width-wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { type CarouselApi } from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";

interface ReviewsProps {
  lng: any;
  t: TFunction;
}

const Reviews: FC<ReviewsProps> = ({ lng }: any) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { t, i18n } = useTranslation(lng);

  const isEnglish = i18n.language === "en";

  const reviewsImages = [
    {
      src: t("homepage.reviews.review_1"),
      alt: "review1",
    },
    {
      src: t("homepage.reviews.review_2"),
      alt: "review2",
    },
    {
      src: t("homepage.reviews.review_3"),
      alt: "review3",
    },
    {
      src: t("homepage.reviews.review_4"),
      alt: "review4",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="reviews">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer>
          <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {t("homepage.reviews.title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            {t("homepage.reviews.description")}
          </p>
        </TitleContainer>

        {isEnglish && (
          <div className="mb-8 flex justify-center text-left">
            <Alert className="mx-0 flex max-w-max items-center justify-between sm:mx-4">
              <div className="mr-2">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <AlertTitle className="sm:mr-6">
                {t("homepage.reviews.en_disclaimer.title")}
              </AlertTitle>
              <AlertDescription>
                {t("homepage.reviews.en_disclaimer.description")}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {reviewsImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {/* Slide {current} of {count} */}
          {t("homepage.reviews.counter", {
            current: current,
            count: count,
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;
