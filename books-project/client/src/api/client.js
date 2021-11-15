import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default client;

