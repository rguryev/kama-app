"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { languages } from "@/app/i18n/settings";
import { Languages } from "lucide-react";
import { TFunction } from "i18next";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

const languageNames = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
];

export function DropdownMenuCheckboxes({
  t,
  lng,
}: {
  t: TFunction;
  lng: string;
}) {
  const [activeLang, setActiveLang] = React.useState<string | null>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36" align="center">
        <DropdownMenuLabel>Выбирете язык</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {languages
          // .filter((l) => lng !== l)
          .map((l, index) => {
            const language = languageNames.find((lng) => lng.code === l);

            const displayName = language ? language.name : l;
            return (
              <Link href={`/${l}`} key={l}>
                <DropdownMenuCheckboxItem
                  disabled={lng === l}
                  className={lng === l ? "" : "cursor-pointer"}
                >
                  {displayName}
                </DropdownMenuCheckboxItem>
              </Link>
            );
          })}

        {/* {languages.map((language) => (
          <DropdownMenuCheckboxItem
            key={language.code}
            checked={activeLang === language.code}
            onCheckedChange={() => handleLanguageChange(language.code)}
            // onClick={() => changeLanguage()}
          >
            {language.name}
          </DropdownMenuCheckboxItem>
        ))} */}
        {/* <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
