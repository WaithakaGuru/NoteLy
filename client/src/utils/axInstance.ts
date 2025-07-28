import axios from "axios";
const URL = "https://notely-server-r48z.onrender.com/api";
const ax = axios.create({
  baseURL: URL, 
  withCredentials: true,
});

export default ax;
