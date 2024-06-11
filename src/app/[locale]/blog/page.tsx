import MaxWidthWrapper from "@/components/max-width-wrapper";
import Card from "@/components/modules/card";
import config from "@/config";
import fetchBlogs from "@/lib/fetch-blogs";

export default async function Page() {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs("filters[isFeatured][$eq]=true"),
    await fetchBlogs("filters[isFeatured][$eq]=false"),
  ]);

  return (
    <>
      <h1>Hello, Home page!</h1>
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
    </>
  );
}
