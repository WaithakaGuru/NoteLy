import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:5567/api",
  withCredentials: true,
});

export default ax;
