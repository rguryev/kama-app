import { useTranslation } from "@/app/i18n";
import ContactBase from "./contact";

export const NavMenu = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "contact");
  return <ContactBase t={t} lng={lng} />;
};
