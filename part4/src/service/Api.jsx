import axios from "axios";

const HTTP = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const GetUser = async () => {
  return await HTTP.get("/data");
};

export const createTodo = async (data) => {
  return await HTTP.post("/data", data);
};

export const deleteTodo = async (id) => {
  return await HTTP.delete(`/data/${id}`);
};
export const detailTodo = (id) => {
  return HTTP.get(`/data/${id}`);
};

export const UpdateTodoList = async (id, data) => {
  return await HTTP.put(`/data/${id}`, data);
};
