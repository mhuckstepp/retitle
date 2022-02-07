import axios from 'axios';

export const axiosCodeClient = axios.create({
  baseURL: process.env.REACT_APP_API_UR,
  method: 'post',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});
