import MaxWidthWrapper from "@/components/max-width-wrapper";
import Card from "@/components/modules/card";
import config from "@/config";

const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions);
  const response = await request.json();

  return response;
};

export default async function Page() {
  const blogs = await fetchBlogs();

  console.log(blogs.data);
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Card
        className={"mb-4 flex-col sm:flex-row"}
        props={{
          label: "Opinions",
          title: "Best Product Reviews",
          summary: "Lorem ipsum dolor sit amet",
          href: "/fdg/",
        }}
      />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="w-full">
          <Card
            props={{
              label: "Opinions",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
        <div className="w-full">
          <Card
            className=""
            props={{
              label: "Product Reviews",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
        <div className="w-full">
          <Card
            props={{
              label: "Travel Guides",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
      </div>
    </>
  );
}
