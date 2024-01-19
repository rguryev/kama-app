"use client";

import React from "react";
import Image from "next/image";
import { menu } from "../assets";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import NavMenu from "./nav-menu";
import MaxWidthWrapper from "./max-width-wrapper";
import Logo from "./logo";

const Navbar = () => {
  return (
    // <nav className="sticky inset-x-0 top-0 z-50 h-20 bg-slate-100">
    <nav className="sticky top-0 z-50 mx-auto h-[4rem] w-full max-w-screen-xl rounded-none border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-4 sm:rounded-full dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75">
      <MaxWidthWrapper className="relative h-full">
        <div className="flex h-full items-center justify-center border-gray-200">
          <Logo />

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
                  <SheetTitle>Меню</SheetTitle>
                  <SheetDescription>Куда хотите перейти?</SheetDescription>
                  <NavMenu />
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
