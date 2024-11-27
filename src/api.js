import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    "'Access-Control-Allow-Origin": "http://localhost:5173/",
  },
});

export default instance;
