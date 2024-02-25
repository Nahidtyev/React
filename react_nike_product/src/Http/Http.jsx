import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const GETAPIData = async (url) => {
  return await HTTP.get(url);
};
// export const getSingleData = (url, id) => {
//   return HTTP.get(`${url}/${id}`);
// };

// export const POSTAPIData = (url, data) => {
//   return HTTP.post(url, data);
// };
// export const DeleteApiData = (url, id) => {
//   return HTTP.delete(`${url}/${id}`);
// };

// export const PutApiData = (url, id, data) => {
//   return HTTP.put(`${url}/${id}`, data);
// };
