import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Title = ({ item }: { item: GridItemInterface }) => {
  return (
    <div key="title" className="flex max-h-64 flex-col">
      <div className="flex max-w-[40rem] flex-col gap-2">
        <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
          {item.title} <br />
          <span className="text-orange-600 dark:text-orange-400">
            {item.accentTitle}{" "}
          </span>
          {item.titleEnd}
        </h1>
        <div className="my-1 border-t-2 border-gray-300" />
        <p className="mt-1 max-w-prose text-base text-muted-foreground dark:text-white">
          {item.description}
        </p>
        <div className="my-2 flex flex-col gap-2 sm:flex-row">
          <Link href="/products" className={buttonVariants()}>
            Записаться
          </Link>
        </div>
      </div>

      {/* <Image
            priority
            loading="eager"
            alt="Kate Matveeva"
            src="/kate-matveeva.jpeg"
            width={120}
            height={120}
          /> */}
      {/* Text section */}

      {/* Button container */}
      {/* <div className="mt-6 flex items-center gap-3">
            <a
              className="flex w-full items-center gap-2 rounded-md border bg-foreground px-4 py-2 text-sm font-medium text-background dark:bg-background dark:text-foreground"
              href={`${item.locationLink}`}
            >
              <MapPin size={14} />
              {item.location}
            </a>
            <a
              className="flex w-full items-center  gap-2 rounded-md border bg-foreground px-4 py-2 text-sm font-medium text-background dark:bg-background dark:text-foreground"
              href={`mailto:${item.email}`}
            >
              <Mail size={14} />
              Contact me
            </a>
          </div> */}
    </div>
  );
};

export default Title;
