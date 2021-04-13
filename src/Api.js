import axios from 'axios';
import Cookie from './Cookie'

const Api = axios.create({
  baseURL: 'http://1hourtutor.com/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
Api.interceptors.request.use(function(config) {
  const token = localStorage? localStorage.getItem('accessToken') :Cookie.get('accessToken')
  console.log('request token',token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});
Api.interceptors.response.use(function(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  if (error.response.status == 401) {
    localStorage?localStorage.removeItem('accessToken'):Cookie.erase('accessToken')
  }
  return Promise.reject(error);
});

export default Api;