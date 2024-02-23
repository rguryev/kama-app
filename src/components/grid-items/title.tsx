import { GridItemInterface } from "../bento";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Title = ({ item }: { item: GridItemInterface }) => {
  return (
    <div
      key="title"
      className="flex h-full flex-col  bg-transparent bg-dot-black/[0.2] dark:border-white/[0.2] dark:bg-transparent dark:bg-dot-white/[0.2]"
    >
      <div className="my-4 flex h-full max-w-[40rem] flex-col justify-between">
        <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          {item.title} <br />
          <span className="text-orange-600 dark:text-orange-400">
            {item.accentTitle}{" "}
          </span>
          {item.titleEnd}
        </h1>
        {/* <div className="my-1 border-t-2 border-gray-300" /> */}
        <p className="mt-1 max-w-prose text-base text-muted-foreground dark:text-white">
          {item.description}
        </p>
        <div className="mt-3 flex flex-col sm:flex-row">
          <Link href="/products" className={buttonVariants()}>
            {item.buttonTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
