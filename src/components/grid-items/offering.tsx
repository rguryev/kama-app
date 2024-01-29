import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "../icon";

const Offering = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full font-semibold @lg:text-lg">{item.title}</div>
      {/* Price & Promo Container */}
      <div className="w-full">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-500">Промо</div>
          <div className="flex items-center gap-1">
            {/* Old Price */}
            <div className="text-xs text-neutral-500 line-through">
              {item.oldPrice}
            </div>
            <div>{item.price}</div>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="text-sm font-bold text-primary @lg:text-base">
          {item.promotion}
        </div>
      </div>
    </Link>
  );
};

export default Offering;
