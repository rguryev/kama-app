"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/lib/locales";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;

  const otherLocale = locale === "en" ? "ru" : "en";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <GlobeIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem checked={locale === "en"}>
          <Link href={"/" + otherLocale} prefetch={false} locale="en">
            English
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={locale === "ru"}>
          <Link href={"/" + otherLocale} prefetch={false} locale="ru">
            Russian
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
