import axios from 'axios';

export const axiosCodeClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  method: 'post',
});
