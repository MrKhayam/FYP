import axios from "axios";
const baseUrl = "http://localhost:4000/api/posts/";
export const uploadPost = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${baseUrl}upload-post`, data, config);
  return response.data;
};
