import config from "@/config";
import axios from "axios";

const fetchCategories = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  try {
    const res = `${config.api}/api/categories`;
    const response = await axios.get(res, options);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchCategories;
