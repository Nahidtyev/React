import axios from "axios";
const Http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const GetDataApi = async () => {
  return await Http.get("/data");
};

export const PostDataApi = async (data) => {
  return Http.post("/data", data);
};
