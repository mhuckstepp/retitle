import axios from "axios";

const BASE_URL = "https://HERE";

export const tokenClient = axios.create({
  baseURL: "https://www.strava.com/oauth/token",
  method: "post",
  timeout: 3000,
});

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
