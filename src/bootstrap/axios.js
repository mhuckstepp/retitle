import axios from 'axios';

const BASE_URL = 'https://0zprthcval.execute-api.us-east-1.amazonaws.com/users';

export const axiosCodeClient = axios.create({
  baseURL: BASE_URL,
  method: 'post',
});
