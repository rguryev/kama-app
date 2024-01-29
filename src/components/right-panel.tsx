"use client";
import { siteConfig } from "@/config/site-config";
import { useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";
import { FC, useEffect } from "react";
import GridItem from "./grid-item";
import Social from "./grid-items/social";
import Mentor from "./grid-items/offering";
import Project from "./grid-items/info";
import Equipments from "./grid-items/about";

interface RightPanelProps {}

const RightPanel: FC<RightPanelProps> = ({}) => {
  return (
    <div className="grid w-full auto-rows-[76px] grid-cols-4 gap-6 py-6 xl:gap-10 xl:overflow-y-auto xl:px-1 xl:py-10">
      {siteConfig.items.map((item, index) => (
        <GridItem key={item.title + index} size={item.layout}>
          {item.type === "social" ? (
            <Social item={item} />
          ) : item.type === "mentor" ? (
            <Mentor item={item} />
          ) : item.type === "project" ? (
            <Project item={item} />
          ) : item.type === "equipment" ? (
            <Equipments item={item} />
          ) : (
            <div>Need to create new component type</div>
          )}
        </GridItem>
      ))}
    </div>
  );
};

export default RightPanel;
