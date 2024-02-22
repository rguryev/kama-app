"use client";

import { useTranslation } from "@/app/i18n/client";
import ReviewsBase from "./reviews";

const Reviews = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "reviews");
  return <ReviewsBase t={t} lng={lng} />;
};

export default Reviews;
