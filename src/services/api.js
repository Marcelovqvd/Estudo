import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-39a-test.herokuapp.com',
})

export default api;