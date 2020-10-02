import axios from "axios"
 const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
  });
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  export default instance