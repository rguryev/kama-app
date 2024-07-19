"use client";
import Category from "@/components/category";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CategoryContext } from "@/context/category-context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useLayoutEffect } from "react";

export default function CategoryList({ categories }: any) {
  // const categories = [

  //   {
  //     id: 1,
  //     name: "product reviews",
  //     category: "Product%20Reviews",
  //     image: "/categories/job.jpg",
  //     color: "bg-indigo-300",
  //     href: "http://127.0.0.1:1337/api/blogs?populate=*&filters[isFeatured][$eq]=false&filters[$and][0][Category][$eq]=Product%20Reviews",
  //   },
  //   {
  //     id: 2,
  //     name: "opinions",
  //     category: "Opinions",
  //     image: "/categories/travel.jpg",
  //     color: "bg-violet-400	",
  //     href: "http://127.0.0.1:1337/api/blogs?populate=*&filters[isFeatured][$eq]=false&filters[$and][0][Category][$eq]=Opinions",
  //   },
  //   {
  //     id: 3,
  //     name: "travel guides",
  //     category: "Travel%20Guides",
  //     image: "/categories/poland.jpg",
  //     color: "bg-pink-400",
  //     href: "http://127.0.0.1:1337/api/blogs?populate=*&filters[isFeatured][$eq]=false&filters[$and][0][Category][$eq]=Travel%20Guides",
  //   },
  //   {
  //     id: 4,
  //     name: "people",
  //     category: "",
  //     image: "/categories/people.jpg",
  //     color: "bg-amber-400",
  //     href: "",
  //   },
  //   {
  //     id: 5,
  //     name: "laws",
  //     category: "",
  //     image: "/categories/laws.jpg",
  //     color: "bg-blue-400",
  //     href: "",
  //   },
  // ];

  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0].attributes.Title);
  }, []);
  return (
    <div className="my-8">
      <h1 className="text-xl font-semibold">Popular categories:</h1>
      <ScrollArea className="mb-8 whitespace-nowrap rounded-md">
        <div className="my-3 flex w-max space-x-4">
          <div className="flex flex-wrap gap-1 space-x-1">
            {categories?.data?.map((category: any) => (
              <div key={category.id}>
                <Category cat={category} />
              </div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
