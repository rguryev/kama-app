"use client";

import { useTranslation } from "@/app/i18n/client";
import NavMenuBase from "./nav-menu";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "nav-menu");
  return <NavMenuBase t={t} lng={lng} />;
};
