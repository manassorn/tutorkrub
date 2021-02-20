import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://1hourtutor.com/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
Api.interceptors.request.use(function(config) {
  // Do something before request is sent
  const token = window.localStorage.getItem('accessToken')
  config.headers.Authorization = `Bearer ${token}`;
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
    window.localStorage.removeItem('accessToken')
  }
  return Promise.reject(error);
});

export default Api;