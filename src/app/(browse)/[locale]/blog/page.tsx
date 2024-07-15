import MaxWidthWrapper from "@/wrappers/max-width-wrapper";

import config from "@/config";
// import { usePosts } from "@/hooks/usePosts";
import fetchBlogs from "@/lib/fetch-blogs";
import { useQuery } from "@tanstack/react-query";
import { unstable_setRequestLocale } from "next-intl/server";
import BlogLayout from "@/layouts/blog-layout";
import Card from "@/features/card";

//"http://127.0.0.1:1337/api/blogs?populate=*&filters[isFeatured][$eq]=true",

export default async function Page({ params: { locale } }: any) {
  // unstable_setRequestLocale(locale);

  const [featuredBlogs, blogs]: any = await Promise.all([
    await fetchBlogs("filters[isFeatured][$eq]=true"),
    await fetchBlogs("filters[isFeatured][$eq]=false"),
  ]);

  // const {
  //   data: featuredBlogsData,
  //   isLoading: isLoadingFeatured,
  //   error: errorFeatured,
  // } = usePosts("filters[isFeatured][$eq]=true");
  // const {
  //   data: blogsData,
  //   isLoading: isLoadingBlogs,
  //   error: errorBlogs,
  // } = usePosts("filters[isFeatured][$eq]=false");

  // if (isLoadingFeatured || isLoadingBlogs) return <div>Loading...</div>;
  // if (errorFeatured || errorBlogs) return <div>Error loading blogs</div>;

  // const featuredBlogs = featuredBlogsData?.data || [];
  // const blogs = blogsData?.data || [];

  // console.log("Blog: - ", blogs);

  return (
    <BlogLayout>
      <div className="mt-9 grid grid-cols-12 gap-4">
        <div className="col-span-12">
          {featuredBlogs.data.map((featuredBlog: any) => (
            <Card
              key={featuredBlog.id}
              className="mb-4 flex-col sm:flex-row"
              label={featuredBlog.attributes.Category}
              title={featuredBlog.attributes.Title}
              summary={featuredBlog.attributes.Summary}
              href={`${"blog"}/${featuredBlog.attributes.slug}`}
              imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
              imgAlt="Featured Image"
            />
          ))}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {blogs.data.map((blog: any) => (
              <div className="w-full" key={blog.id}>
                <Card
                  className=""
                  label={blog.attributes.Category}
                  title={blog.attributes.Title}
                  summary={blog.attributes.Summary}
                  href={`${"blog"}/${blog.attributes.slug}`}
                  imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
                  imgAlt="Thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
