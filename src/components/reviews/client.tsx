"use client";

import { useTranslation } from "@/app/i18n/client";
import ReviewsBase from "./reviews";

const Reviews = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "reviews");
  return <ReviewsBase lng={lng} />;
};

export default Reviews;
