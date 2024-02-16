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

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
];

// type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [activeLang, setActiveLang] = React.useState<string | null>(null);

  const handleLanguageChange = (code: string) => {
    setActiveLang(code);
  };

  // const changeLanguage = () => {
  //   i18n.changeLanguage("ru");
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36" align="center">
        <DropdownMenuLabel>Выбирете язык</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {languages.map((language) => (
          <DropdownMenuCheckboxItem
            key={language.code}
            checked={activeLang === language.code}
            onCheckedChange={() => handleLanguageChange(language.code)}
            // onClick={() => changeLanguage()}
          >
            {language.name}
          </DropdownMenuCheckboxItem>
        ))}
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
