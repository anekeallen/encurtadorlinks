import axios from "axios";

export const key = "2f1d60ea77663839f7101449f1f51d807b9b9eb0";  

const api = axios.create({
  baseURL:'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }

})

export default api;

// key 2f1d60ea77663839f7101449f1f51d807b9b9eb0