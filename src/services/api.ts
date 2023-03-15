import axios from "axios";

export const api = axios.create({
  baseURL: "https://financeappproject.netlify.app/api",
});
