const axios = require('axios');

export const http = axios.create({
  baseURL: "https://randomuser.me",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

http.interceptors.response.use(
  
)