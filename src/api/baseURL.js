import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3300",
  withCredentials: true,
});

export default instance;
