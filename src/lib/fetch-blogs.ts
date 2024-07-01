import config from "@/config";
import axios from "axios";

const fetchBlogs = async (params?: string) => {
  try {
    const apiUrl = `${config.api}/api/blogs?populate=*&${params}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export default fetchBlogs;
