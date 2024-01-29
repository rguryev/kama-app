import { GridItemInterface } from "@/config/site-config";
import { FC } from "react";
import Icon from "../icon";
import Link from "next/link";
import Button from "../button";

interface OfferingsProps {
  item: GridItemInterface;
}

const Offerings: FC<OfferingsProps> = ({ item }) => {
  return (
    <Link href={item.buttonLink ?? ""}>
      {/* Header */}
      <div className="flex items-center justify-between">
        {item.icon && <Icon type={item.icon} color={item.color ?? "#fff"} />}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      {/* Content */}
      <div className="mt-2">
        <div className="line-clamp-1 text-xl font-semibold @lg:text-lg">
          {item.title}
        </div>
        {/* <div className="text-sm text-neutral-500">{item.username}</div> */}
        {item.description && (
          <div className="mt-1 line-clamp-2 text-sm text-neutral-500">
            {item.description}
          </div>
        )}

        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Offerings;
