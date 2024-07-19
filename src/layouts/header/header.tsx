import React from "react";
import Image from "next/image";
import { menu } from "@/assets";
import MaxWidthWrapper from "@/wrappers/max-width-wrapper";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Logo from "@/components/logo";
import NavMenu from "./nav-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const t = useTranslations("Header");
  // const messages = await getMessages();

  return (
    // <nav className="sticky inset-x-0 top-0 z-50 h-20 bg-slate-100">
    <MaxWidthWrapper className="sticky top-2 z-50 h-full sm:top-4">
      <nav className=" mx-auto h-[4rem] w-full max-w-screen-xl rounded-full border border-white border-opacity-40 bg-white px-2.5 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full md:px-10 dark:border-black/40 dark:bg-black">
        <div className="flex h-full items-center justify-center border-gray-200">
          <Logo />
          {/* <Link href="/blog">
            <p>Blog</p>
          </Link> */}

          <div className="hidden flex-1 items-center justify-end sm:flex">
            <NavMenu />
          </div>

          <div className="flex flex-1 items-center justify-end sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={menu}
                  alt="menu"
                  className="h-[28px] w-[28px]
object-contain"
                />
              </SheetTrigger>
              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle>{t("mobile_menu_title")}</SheetTitle>
                  <SheetDescription>
                    {t("mobile_menu_description")}
                  </SheetDescription>
                  {/* <NavMenu /> */}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Header;
