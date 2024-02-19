import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";
import Logo from "../logo";
import { TFunction } from "i18next";
import { DropdownMenuCheckboxes } from "../dropdown-menu";

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

interface NavMenuBaseProps {
  lng: any;
  t: TFunction;
}

const NavMenuBase = ({ lng, t }: NavMenuBaseProps) => {
  const navLinksServices: {
    id: string;
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      id: "about",
      title: t("navbar.services.about.title"),
      href: "#",
      description: t("navbar.services.about.description"),
    },
    {
      id: "services",
      title: t("navbar.services.services.title"),
      href: "#",
      description: t("navbar.services.services.description"),
    },
    {
      id: "reviews",
      title: t("navbar.services.reviews.title"),
      href: "#",
      description: t("navbar.services.reviews.description"),
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
      title: t("navbar.course.about.title"),
      href: "#",
      description: t("navbar.course.about.description"),
    },
    {
      id: "course_billing",
      title: t("navbar.course.billing.title"),
      href: "#",
      description: t("navbar.course.about.description"),
    },
    {
      id: "сourse_reviews",
      title: t("navbar.course.reviews.title"),
      href: "#",
      description: t("navbar.course.reviews.description"),
    },
    {
      id: "course_additional",
      title: t("navbar.course.additional.title"),
      href: "#",
      description: t("navbar.course.additional.description"),
    },
  ];

  return (
    <>
      <NavigationMenu id="nav" className="m-auto gap-6 sm:m-0">
        <NavigationMenuList
          id="nav-list"
          className="grid grid-cols-1 gap-1 sm:flex sm:flex-row"
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("navbar.services")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid h-[20rem] gap-1 p-4 md:h-[16rem] md:w-[32rem] md:grid-cols-2 lg:w-[32rem]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b to-muted p-4 no-underline outline-none focus:shadow-md"
                      href={"/"}
                    >
                      <Logo />
                      <p className="my-2 text-sm leading-tight text-muted-foreground">
                        {t("navbar.services.subtitle")}
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("navbar.course")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid h-[20rem] gap-1 p-4 md:h-[16rem] md:w-[32rem] md:grid-cols-2 lg:w-[32rem] ">
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
                {t("navbar.contact_form")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenuCheckboxes lng={lng} t={t} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavMenuBase;
