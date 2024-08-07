import config from "@/config";
import axios from "axios";

const fetchBlogs = async (params?: string) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  try {
    const res = `${config.api}/api/blogs?populate=*&${params}`;
    const response = await axios.get(res, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export default fetchBlogs;
