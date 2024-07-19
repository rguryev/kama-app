import config from "@/config";
// import { usePosts } from "@/hooks/usePosts";
import fetchBlogs from "@/lib/fetch-blogs";
import BlogLayout from "@/layouts/blog-layout";
import CategoryList from "@/features/category-list";
import fetchCategories from "@/lib/fetch-categories";
import Blogs from "@/features/blogs";
import FeaturedBlogCard from "@/features/featured-blog-card";

//"http://127.0.0.1:1337/api/blogs?populate=*&filters[isFeatured][$eq]=true",

export default async function Page({ params: { locale } }: any) {
  // unstable_setRequestLocale(locale);

  //filters[isFeatured][$eq]=false&filters[$and][0][Category][$eq]=Product%20Reviews
  const [featuredBlogs, blogs]: any = await Promise.all([
    await fetchBlogs("filters[isFeatured][$eq]=true"),
    await fetchBlogs("filters[isFeatured][$eq]=false"),
  ]);

  const categories: any = await fetchCategories();

  return (
    <BlogLayout>
      <div className="mt-9 grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="my-4 text-3xl font-semibold">
            <b>Hey, KaMa blog here! </b>
            <br />
            It is a blogpost page
          </h1>
          {featuredBlogs?.data?.map((featuredBlog: any) => (
            <FeaturedBlogCard
              key={featuredBlog.id}
              className="mb-4 flex-col sm:flex-row"
              // label={featuredBlog.attributes.categories}
              title={featuredBlog.attributes.Title}
              summary={featuredBlog.attributes.Summary}
              href={`${"blog"}/${featuredBlog.attributes.slug}`}
              imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
              imgAlt="Featured Image"
            />
          ))}
          <CategoryList categories={categories} />
          <Blogs blogs={blogs} />
        </div>
      </div>
    </BlogLayout>
  );
}
