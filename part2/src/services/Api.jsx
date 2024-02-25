import axios from "axios";

// export default  FetchApi = async (url, method, data) => {
//   try {
//     const response = await axios({
//       url,
//       method,
//       data,
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

export const GetData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const GetApiData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/data");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const PostApiData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/data", data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
