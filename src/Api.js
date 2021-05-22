import axios from 'axios';
import Cookie from './Cookie'
import Auth from './Auth'

const Api = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
Api.interceptors.request.use(function(config) {
  if (Auth.accessTokenDev) {
    config.headers.Authorization = `Bearer ${Auth.accessTokenDev}`;
  }
  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});
Api.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  console.log(Object.keys(error))
  console.log(error.response.request.responseURL)
  console.log(error.request.responseURL)
  console.log(Object.keys(error.config))
  console.log(error.config.url)  

  if (error.response.status == 401) {
    Auth.accessTokenDev = undefined
  }
  return Promise.reject(error);
});

export default Api;