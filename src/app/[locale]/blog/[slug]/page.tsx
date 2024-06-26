import getCategoryColor from "@/lib/get-category-color";
import Image from "next/image";
import fetchBlogs from "@/lib/fetch-blogs";
import config from "@/config";
import { locales } from "@/lib/locales";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";

const BlogDetails = async ({ locale, ...props }: any) => {
  unstable_setRequestLocale(locale);
  const blogs: any = await fetchBlogs(
    `filters[slug][$eq]=${props.params.slug}`,
  );
  if (blogs.data.length === 0) {
    return null;
  }
  const blog = blogs.data[0];

  return (
    <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4">
      <h1>{props.params.slug}</h1>
      <div>
        <h6
          className={`color mb-2 font-medium ${getCategoryColor(
            blog.attributes.Category,
          )}`}
        >
          {blog.attributes.Category}
        </h6>
        <h2 className="mb-4 text-2xl font-bold">{blog.attributes.Title}</h2>
      </div>
      <Image
        src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
        alt="Image of article"
        width={780}
        height={500}
      />
      <div className="max-w-2xl">
        <div
          className="flex-col"
          dangerouslySetInnerHTML={{ __html: blog.attributes.Content }}
        ></div>
      </div>
    </div>
  );
};

// export const generateStaticParams = async () => {
//   const blogs = await fetchBlogs();

//   return blogs.data.map((blog: any) => ({
//     slug: blog.attributes.slug,
//   }));
// };

export default BlogDetails;
