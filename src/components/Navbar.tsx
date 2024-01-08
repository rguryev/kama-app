"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <nav className="sticky inset-x-0 top-0 z-50 h-20 bg-slate-100">
      <MaxWidthWrapper className="relative">
        <div className="flex h-20 items-center justify-center border-b border-gray-200">
          <Image
            alt="Kate Matveeva Logo"
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
              <SheetTrigger>Open</SheetTrigger>
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
