import React from "react";
import { IPageInfo } from "../Target";
import { CompactWrap } from "..";

const Badge = ({ pageInfo }: { pageInfo: IPageInfo }) => {
  return (
    <CompactWrap className="mb-2 max-h-max max-w-max px-2 pb-[2px] rounded-full">
      {pageInfo.badgeIcon && <pageInfo.badgeIcon className="w-4" />}
      <p className="pl-1 text-xs font-medium tracking-normal text-neutral-700">
        {pageInfo.badgeText}
      </p>
    </CompactWrap>
  );
};

export default Badge;
