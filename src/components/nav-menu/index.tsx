import { useTranslation } from "@/app/i18n";
import NavMenuBase from "./nav-menu";

export const NavMenu = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "nav-menu");
  return <NavMenuBase t={t} lng={lng} />;
};
