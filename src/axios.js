import axios from "axios";

const BASE_URL = "https://gh4p3b37na.execute-api.us-east-1.amazonaws.com/users";

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
