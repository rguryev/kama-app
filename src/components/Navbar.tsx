"use client";

import React from "react";
import Image from "next/image";
import { menu } from "../assets";
import { MaxWidthWrapper } from ".";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    // <nav className="sticky inset-x-0 top-0 z-50 h-20 bg-slate-100">
    <nav className="sticky top-0 z-50 mx-auto h-[5rem] w-full max-w-screen-xl rounded-none border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75">
      <MaxWidthWrapper className="relative">
        <div className="flex h-20 items-center justify-center border-gray-200">
          <Image
            alt="Kate Matveeva Logo"
            color="slate"
            src={"/logo.png"}
            width={54}
            height={54}
            quality={100}
          />

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
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
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
