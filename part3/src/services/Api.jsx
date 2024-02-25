import axios from "axios";
const Http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const GetTodos = async () => {
  return await Http.get("/data").then((res) => res.data);
};

export const PostTodo = async (data) => {
  return await Http.post("/data", data).then((res) => res);
};

export const Deletetodo = async (id) => {
  return await Http.delete(`/data/${id}`);
};
