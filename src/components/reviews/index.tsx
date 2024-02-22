import { useTranslation } from "@/app/i18n";
import ReviewsBase from "./reviews";

export const NavMenu = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "reviews");
  return <ReviewsBase lng={lng} />;
};
