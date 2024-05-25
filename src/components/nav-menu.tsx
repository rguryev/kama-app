"use client";
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
import { ModeToggle } from "./theme-toggle";
import Logo from "./logo";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";
import { LanguagePicker } from "./language-switcher";

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

const NavMenu = () => {
  const t = useTranslations("Header");
  const navLinksServices: {
    id: string;
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      id: "about",
      title: t("services_about_title"),
      href: "#",
      description: t("services_about_description"),
    },
    {
      id: "services",
      title: t("services_services_title"),
      href: "#",
      description: t("services_services_description"),
    },
    {
      id: "reviews",
      title: t("services_reviews_title"),
      href: "#",
      description: t("services_reviews_description"),
    },
  ];

  const navLinksCourse: {
    id: string;
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      id: "course_about",
      title: t("course_about_title"),
      href: "#",
      description: t("course_about_description"),
    },
    {
      id: "course_billing",
      title: t("course_billing_title"),
      href: "#",
      description: t("course_about_description"),
    },
    {
      id: "сourse_reviews",
      title: t("course_reviews_title"),
      href: "#",
      description: t("course_reviews_description"),
    },
    {
      id: "course_additional",
      title: t("course_additional_title"),
      href: "#",
      description: t("course_additional_description"),
    },
  ];

  return (
    <>
      <NavigationMenu id="nav" className="m-auto gap-6 text-center sm:m-0 ">
        <NavigationMenuList
          id="nav-list"
          className="grid grid-cols-1 gap-1 sm:flex sm:flex-row"
        >
          <NavigationMenuItem className="order-4 md:order-1">
            <NavigationMenuTrigger>{t("services")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid h-[26rem] gap-1 p-4 md:h-[16rem] md:w-[31rem] md:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b to-muted p-4 no-underline outline-none focus:shadow-md"
                      href={"/"}
                    >
                      <Logo />
                      <p className="my-2 text-left text-sm leading-tight text-muted-foreground">
                        {t("services_subtitle")}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ul className="flex flex-col text-left">
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
          <NavigationMenuItem className="order-3 md:order-2">
            <NavigationMenuTrigger>{t("course")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid h-[26rem] gap-1 p-4 text-left md:h-[16rem] md:w-[31rem] md:grid-cols-2">
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
          <NavigationMenuItem className="order-2 md:order-3">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("contact_form")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <div className="order-1 flex flex-row justify-center gap-2 md:order-4">
            <NavigationMenuItem>
              {/* <LocalSwitcher /> */}
              <LanguagePicker />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavMenu;
