import axios from 'axios';

const BASE_URL = 'https://0cj8ibd6nb.execute-api.us-east-1.amazonaws.com/users';

export const axiosCodeClient = axios.create({
  baseURL: BASE_URL,
  method: 'post',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    mode: 'no-cors',
  }
});
