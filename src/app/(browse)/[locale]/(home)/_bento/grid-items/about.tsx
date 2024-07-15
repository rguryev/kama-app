import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { GridItemInterface } from "../bento";
import Icon from "@/components/icon";

const About = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.link as Url}
      className="m-x-auto flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#FFEBF2] p-1 md:p-1 dark:bg-background"
    >
      <div className="relative m-2 mb-0 h-1/2 flex-shrink-0 rounded-3xl bg-white dark:bg-background ">
        <Image
          className="rounded-3xl bg-transparent object-cover object-center bg-dot-black/[0.2] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          src={item.image ?? ""}
          alt="equipments"
          fill
        />
      </div>
      {/* Content 1 */}
      <div className="relative my-2 flex w-full flex-grow flex-col flex-wrap items-center justify-around gap-3 space-y-3 px-2">
        <div className="flex w-full flex-row justify-between">
          <div className="flex rounded-2xl bg-background p-2 px-4 text-xl font-medium text-foreground dark:bg-backgroundAlt dark:text-foreground">
            {item.title}
          </div>
          <div className="flex self-end rounded-xl bg-background dark:bg-backgroundAlt">
            {item.icon && <Icon type={item.icon} color={item.color} />}
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-grow flex-row flex-wrap items-stretch justify-around gap-3 px-2">
        {item.features &&
          item.features.map((feature) => (
            <div
              key={feature.id}
              className="my-2 mt-0 flex flex-1 flex-col items-center rounded-xl bg-background p-1 text-foreground dark:bg-backgroundAlt dark:text-foreground"
            >
              <h3 className="pt-1 text-2xl font-bold">{feature.value}</h3>
              <p className="text-center text-sm">{feature.title}</p>
            </div>
          ))}
      </div>
    </Link>
  );
};

export default About;
