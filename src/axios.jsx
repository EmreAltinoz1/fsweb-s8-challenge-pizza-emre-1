import axios from "axios";

const instance = axios.create({
  baseURL: " http://localhost:5173/", // API'nin ana URL'si
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
