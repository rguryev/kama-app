import Image from "next/image";
import { FC } from "react";

interface CategoryProps {
  category: any;
}

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <div className={`flex h-14 items-center gap-2 rounded-2xl pr-4 capitalize`}>
      {/* <div className="relative my-2 ml-2 h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={category.image}
          fill
          alt={category.name}
          className=""
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <p className="font-medium">{category.attributes.Title}</p>
    </div>
  );
};

export default Category;
