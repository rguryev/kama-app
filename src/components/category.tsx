import config from "@/config";
import { CategoryContext } from "@/context/category-context";
import Image from "next/image";
import { FC, useContext } from "react";

interface CategoryProps {
  cat: any;
}

const Category: FC<CategoryProps> = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      className={`${
        cat.attributes.Title === category
          ? "bg-neutral-200 text-black"
          : "bg-white"
      }  flex h-14 w-full min-w-16 items-center gap-2 rounded-2xl px-2 capitalize`}
      onClick={() => changeCategory(cat.attributes.Title)}
    >
      {/* <div className="relative my-2 ml-2 h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={`${config.api}${cat.attributes.Image.attributes.formats.thumbnail.url}`}
          fill
          alt={cat.attributes.Title}
          className=""
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <p className="font-medium">{cat.attributes.Title}</p>
    </div>
  );
};

export default Category;
