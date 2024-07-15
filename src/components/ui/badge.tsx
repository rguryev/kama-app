import React from "react";
import { IPageInfo } from "@/app/(browse)/[locale]/(home)/target";
import CompactWrap from "@/wrappers/compact-wrap";

const Badge = ({ pageInfo }: { pageInfo: IPageInfo }) => {
  return (
    <CompactWrap className="mb-2 max-h-max max-w-max rounded-full px-2 pb-[2px]">
      {pageInfo.badgeIcon && <pageInfo.badgeIcon className="w-4" />}
      <p className="pl-1 text-xs font-normal tracking-normal text-foreground">
        {pageInfo.badgeText}
      </p>
    </CompactWrap>
  );
};

export default Badge;
