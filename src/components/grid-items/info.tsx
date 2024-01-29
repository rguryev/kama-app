import { GridItemInterface } from "@/config/site-config";
import { Star } from "lucide-react";

import Icon from "../icon";
import Link from "next/link";

const Info = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full font-semibold  @lg:text-lg">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
        <Star fill="currentColor" size={16} />
      </div>
    </Link>
  );
};

export default Info;
