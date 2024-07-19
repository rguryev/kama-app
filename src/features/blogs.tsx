import BlogCard from "./blog-card";
import config from "@/config";

const Blogs = ({ blogs }: any) => {
  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-3">
      {blogs?.data?.map((blog: any) => (
        <div className="w-full" key={blog.id}>
          <BlogCard
            // label={blog.attributes.categories}
            title={blog.attributes.Title}
            href={`${"blog"}/${blog.attributes.slug}`}
            imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
            imgAlt="Thumbnail"
            summary={blog.attributes.Summary}
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
