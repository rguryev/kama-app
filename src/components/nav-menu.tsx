import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navLinksCourse, navLinksServices } from "@/constants";
import { ModeToggle } from "./theme-toggle";
import Logo from "./logo";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavMenuProps {
  lng: string;
}

const NavMenu = async ({ lng }: NavMenuProps) => {
  const { t } = await useTranslation(lng, "navbar");
  return (
    <>
      <NavigationMenu id="nav" className="m-auto gap-6 sm:m-0">
        <NavigationMenuList
          id="nav-list"
          className="grid grid-cols-2 gap-1 sm:flex sm:flex-row"
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b to-muted p-4 no-underline outline-none focus:shadow-md"
                      href={"/"}
                    >
                      <Logo />
                      <p className="my-2 text-sm leading-tight text-muted-foreground">
                        Фирма по легализации, которой стоит доверять.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ul>
                  {navLinksServices.map((component) => (
                    <ListItem
                      key={component.id}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Наш курс</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                {navLinksCourse.map((component) => (
                  <ListItem
                    key={component.id}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Форма для контакта
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="m-auto flex w-20 justify-center gap-4">
              {/* <Trans t={t}>
                <strong className="text-lg">{lng}</strong> |
              </Trans> */}
              <div className="cursor-pointer rounded-md bg-foreground px-4 py-1 text-center text-lg font-bold text-background">
                {languages
                  .filter((l) => lng !== l)
                  .map((l, index) => {
                    return (
                      <span key={l}>
                        {index > 0 && " or "}
                        <Link href={`/${l}`}>{l}</Link>
                      </span>
                    );
                  })}
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavMenu;
