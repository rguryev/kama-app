import config from "@/config";

const fetchBlogs = async (params?: string) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      cache: "no-store",
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&${params}`,
    reqOptions,
  );
  const response = await request.json();

  return response;
};

export default fetchBlogs;
