import axios from "axios";

const BASE_URL = "https://HERE";

export const axiosCodeClient = axios.create({
  baseURL: BASE_URL,
  method: "post",
  timeout: 3000,
});

export const axiosDisableClient = axios.create({
  baseURL: BASE_URL,
  method: "post",
  timeout: 3000,
});
