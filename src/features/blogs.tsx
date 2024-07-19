"use client";
import { useContext } from "react";
import BlogCard from "./blog-card";
import config from "@/config";
import { CategoryContext } from "@/context/category-context";

const Blogs = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.data.filter((blog: any) => {
    return blog.attributes.categories.data.some(
      (cat: any) => cat.attributes.Title === category,
    );
  });

  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-3">
      {filteredBlogs?.map((blog: any) => (
        <div className="w-full" key={blog.id}>
          <BlogCard
            label={blog.attributes.categories.data[0].attributes.Title}
            title={blog.attributes.Title}
            href={`${"blog"}/${blog.attributes.slug}`}
            imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
            imgAlt="Thumbnail"
            summary={blog.attributes.Summary}
            publishedAt={blog.attributes.publishedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
