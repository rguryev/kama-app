"use client";

import { useTranslation } from "@/app/i18n/client";
import ContactBase from "./contact";

const NavMenu = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "contact");
  return <ContactBase t={t} lng={lng} />;
};

export default NavMenu;
